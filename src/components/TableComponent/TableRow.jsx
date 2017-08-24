import React from 'react';
import { render } from 'react-dom';
import $ from 'jquery';

import TableColumn from './TableColumn';


export default class TableRow extends React.Component{
	constructor(props) {
		super(props);
	//	this.makeNonEditable = this._makeNonEditable.bind(this);
	}
	/*_makeNonEditable() {
		$('td[contentEditable="true"]').removeAttr('contentEditable');
	}*/

	render() {
		var column = Object.keys(this.props.rowData).map((column, index) => {
			return <TableColumn key={index} colData={this.props.rowData[column]} eventHandler={this.props.eventHandler}/>
	    });

		return (
			<tr>{column}</tr>
		);
	}
} 
