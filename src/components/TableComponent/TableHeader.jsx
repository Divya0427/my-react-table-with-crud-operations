import React from 'react';
import { render } from 'react-dom';

const TableHeader = (props) => {

  	var headerElement = props.headers.map((header) =>
		<th colSpan={header.colSpan} key={header.heading}>{header.heading}</th>
	);
    return (
	    <thead>
			<tr>{headerElement}</tr>
		</thead>
    )
}

export default TableHeader;
