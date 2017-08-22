import React from 'react';
import { render } from 'react-dom';

const TableHeader = React.createClass({
  render() {

  	var headerTag = this.props.headers.map((header) =>
		<th key={header}>{header}</th>
	);
    return (
	    <thead>
			<tr>{headerTag}</tr>
		</thead>
    )
  }
})

export default TableHeader;