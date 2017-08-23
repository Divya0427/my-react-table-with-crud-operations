import React from 'react';
import { render } from 'react-dom';
import $ from 'jquery';
import ButtonComponent from '../ButtonComponent/ButtonComponent';

//???In this component, I have data in both props and state; Which one would be preferred
//???How to add handlers to a button in a better way

export default class TableBody extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
        	bodyData: this.props.bodyData
        }
        this.onRemoveRow = this._onRemoveRow.bind(this);
        this.updateRow = this._updateRow.bind(this);
    }

    _onRemoveRow(index) {
        delete this.props.bodyData[index];
        this.setState({
        	'bodyData': this.props.bodyData
        })
    }

    _updateRow(index, type, e) {
    	console.log(index);
    	console.log(type);
    	if(type === "Edit") {
    		//Edit logic goes here!!
    	} else if(type === "Delete") {
    		delete this.state.bodyData[index];
	        this.setState({
	        	'bodyData': this.state.bodyData
	        });
    	} else {
    		//TODO::Add row logic goes here!!    		
    	}
    }

  render() {
      var tBodyTag = this.state.bodyData.map((rowData, rowIndex) => {
        return ( <tr key={rowIndex}>
            {Object.keys(rowData).map((column, index) => {
                /*return rowData[column] === true ? 
                	<td key={index}><button key={index} className="btn btn-danger btn-sm" onClick={() => this.onRemoveRow(rowIndex)}>Delete</button></td>
                	: <td key={index}>{rowData[column]}</td>*/
                	console.log(rowData);
                	console.log(column);
                return rowData[column] && rowData[column].showButton === true ? 
                	<td key={index}><ButtonComponent buttonData={rowData[column]} rowIndex={rowIndex} eventHandler={this.updateRow}></ButtonComponent></td>
                	: <td key={index}>{rowData[column]}</td>
            })}
        </tr> );
      });

    return (
        <tbody>
            {tBodyTag}
        </tbody>
    )
  }
}
