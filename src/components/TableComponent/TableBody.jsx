import React from 'react';
import { render } from 'react-dom';
import $ from 'jquery';
import ButtonComponent from '../ButtonComponent/ButtonComponent';
import TableRow from './TableRow';

//???In this component, I have data in both props and state; Which one would be preferred
//???How to add handlers to a button in a better way

export default class TableBody extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            bodyData: this.props.bodyData
        }
        /*this.editRow = this._editRow.bind(this);
        this.deleteRow = this._deleteRow.bind(this);*/
        this.handleClick = this._handleClick.bind(this);
    }

    _handleClick(index){
        // Edit row
        $('.monthly-expenses-table tbody tr td').removeAttr('contentEditable');
        $($('.monthly-expenses-table tbody tr')[index]).find('td.table-column').attr('contentEditable', true);
        /*$('td[contentEditable="true"]').css('border', 'solid 3px lightblue');*/

        /*
        // Delete row
        delete this.state.bodyData[index];
        this.setState({
            'bodyData': this.state.bodyData
        })*/
        /*if(this.props.eventHandler) {
            this.props.eventHandler();
        }*/

    }

  render() {
    return (
        <tbody>
            {
                this.state.bodyData.map((rowData, rowIndex) => {
                    return <TableRow key={rowIndex} rowData={rowData} eventHandler={this.handleClick.bind(null, rowIndex)}></TableRow>
                })
            }
        </tbody>
    )
  }
}
