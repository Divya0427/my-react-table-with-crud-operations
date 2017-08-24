import React from 'react';
import {render} from 'react-dom';
import Header from '../Header/Header';
import TableComponent from '../TableComponent/TableComponent';
import ButtonComponent from '../ButtonComponent/ButtonComponent';

//TODO:: Make it functional component as this is stateless if we can have stateful components inside stateless component

const employeesListHeading = "List of Employees";
// const tableHeaders = ["Month", "Expenses", "Action"];
const tableHeaders = [{
	heading: 'Month'
},{
	heading: 'Expenses'
},{
	heading: 'Actions',
	colSpan: 2
}];
const tableRows = [{
						"month": "Jan",
						"expenses": "12 Units",
						"editButton": {
							"showButton": true,
							"decorators": "btn btn-primary",
							"buttonText": "Edit",
							"handler": "this.edit"
						},
						"removeButton": {
							"showButton": true,
							"decorators": "btn btn-danger",
							"buttonText": "Delete"
						}

					},{
						"month": "Feb",
						"expenses": "27 Units",
						"editButton": {
							"showButton": true,
							"decorators": "btn btn-primary",
							"buttonText": "Edit"
						},
						"removeButton": {
							"showButton": true,
							"decorators": "btn btn-danger",
							"buttonText": "Delete"
						}
					},{
						"month": "Mar",
						"expenses": "16 Units",
						"editButton": {
							"showButton": true,
							"decorators": "btn btn-primary",
							"buttonText": "Edit"
						},
						"removeButton": {
							"showButton": true,
							"decorators": "btn btn-danger",
							"buttonText": "Delete"
						}
					},{
						"month": "Apr",
						"expenses": "17 Units",
						"editButton": {
							"showButton": true,
							"decorators": "btn btn-primary",
							"buttonText": "Edit"
						},
						"removeButton": {
							"showButton": true,
							"decorators": "btn btn-danger",
							"buttonText": "Delete"
						}
					}];

const addButton = {
							"showButton": true,
							"decorators": "btn btn-success pull-right",
							"buttonText": "Add"
						}
export default class PageContent extends React.Component {
	constructor(props) {
		super(props);
		this.addRow = this._addRow.bind(this);
		this.state = {
			tableRows: tableRows
		}	
	}	

	_addRow() {
		tableRows.push({
					"month": "MAY",
					"expenses": "12 UNITS",
					"editButton": {
						"showButton": true,
						"decorators": "btn btn-primary",
						"buttonText": "Edit"
					},
					"removeButton": {
						"showButton": true,
						"decorators": "btn btn-danger",
						"buttonText": "Delete"
					}}
			)
		this.setState({'tableRows': this.state.tableRows});
	}


	//::TODO::Add lifecycle methods to check the order
	componentDidMount(){
		console.log("mounted!!");
	}

	render () {		
		return (
			<div className="page-container container-fluid">
				<ButtonComponent buttonData={addButton} eventHandler={this.addRow}/>
				<div className="table-container row">
					<TableComponent decorators="table table-bordered monthly-expenses-table" headers={tableHeaders} bodyData={this.state.tableRows}/>
				</div>
			</div>
		);
	}
}