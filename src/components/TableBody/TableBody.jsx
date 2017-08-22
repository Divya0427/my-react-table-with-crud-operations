import React from 'react';
import { render } from 'react-dom';

export default class TableBody extends React.Component{
	constructor(props) {
		super(props);
		/*this.onRemoveRow = this.onRemoveRow.bind(this, index);*/
	}
	onRemoveRow(e, index) {
		console.log(e);
		console.log(index);
	}
  render() {
  	var tBodyTag = this.props.bodyData.map((rowData, index) =>
		<tr key={index}>
			{Object.keys(rowData).map(function(column, index) {
			    return  rowData[column] === true ? <button key={index} className="btn btn-danger btn-sm" onClick={onRemoveRow.bind(this, {index})}>Delete</button> : <td key={index}>{rowData[column]}</td>
			})}
		</tr>
	);
    return (
	    <tbody>
			{tBodyTag}
		</tbody>
    )
  }
}
