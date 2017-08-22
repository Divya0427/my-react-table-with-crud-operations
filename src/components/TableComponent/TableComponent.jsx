import React from 'react';
import {render} from 'react-dom';

import TableHeader from '../TableHeader/TableHeader';
import TableBody from '../TableBody/TableBody';

export default class TableComponent extends React.Component {
	render() {
		return(
			<table className={this.props.decorators}>
				<TableHeader headers={this.props.headers}></TableHeader>
				<TableBody bodyData={this.props.bodyData}/>
			</table>
		)
	}
}
