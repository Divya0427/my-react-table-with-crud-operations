import React from 'react';
import {render} from 'react-dom';

import TableHeader from './TableHeader';
import TableBody from './TableBody';

export default class TableComponent extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return(
			<table className={this.props.decorators}>
				<TableHeader headers={this.props.headers}></TableHeader>
				<TableBody bodyData={this.props.bodyData}/>
			</table>
		)
	}
}
