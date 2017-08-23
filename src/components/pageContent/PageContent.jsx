import React from 'react';
import {render} from 'react-dom';
import Header from '../Header/Header';
import List from '../List/List';
import TableComponent from '../TableComponent/TableComponent';

//TODO:: Make it functional component as this is stateless if we can have stateful components inside stateless component

const employeesListHeading = "List of Employees";
const tableHeaders = ["Month", "Expenses", "Action"];
const tableRows = [{
						"month": "Jan",
						"expenses": "12 Units",
						"editButton": {
							"showButton": true,
							"buttonText": "Edit",
							"decorators": "btn btn-primary"
						},
						"removeButton": {
							"showButton": true,
							"buttonText": "Delete",
							"decorators": "btn btn-danger"
						}

					},{
						"month": "Feb",
						"expenses": "27 Units",
						"editButton": {
							"showButton": true,
							"buttonText": "Edit",
							"decorators": "btn btn-primary"
						},
						"removeButton": {
							"showButton": true,
							"buttonText": "Delete",
							"decorators": "btn btn-danger"
						}
					},{
						"month": "Mar",
						"expenses": "16 Units",
						"editButton": {
							"showButton": true,
							"buttonText": "Edit",
							"decorators": "btn btn-primary"
						},
						"removeButton": {
							"showButton": true,
							"buttonText": "Delete",
							"decorators": "btn btn-danger"
						}
					},{
						"month": "Apr",
						"expenses": "17 Units",
						"editButton": {
							"showButton": true,
							"buttonText": "Edit",
							"decorators": "btn btn-primary"
						},
						"removeButton": {
							"showButton": true,
							"buttonText": "Delete",
							"decorators": "btn btn-danger"
						}
					}];
const users = [
    {
      "userName": "dyakkala",
      "id": "VLT1886",
      "displayName": "Divya"
    },
    {
      "userName": "byakkala",
      "id": "VLTXXXX",
      "displayName": "Bhargavi"
    }
  ];

export default class PageContent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			employeesListHeading: "Editable List",
			showInputField: false,
			employee1: {
			      "userName": "dyakkala",
			      "id": "VLT1886",
			      "displayName": "Divya",
			      "editOption": true
			    },
		    employee2: {
		      "userName": "byakkala",
		      "id": "VLTXXXX",
		      "displayName": "Bhargavi",
		      "editOption": true
		    },
		    employee3: {
			      "userName": "dyakkala",
			      "id": "VLT123",
			      "displayName": "Pokemon",
			      "editOption": false
			    },
			employees: [{
			      "userName": "dyakkala",
			      "id": "VLT1886",
			      "displayName": "Divya"
			    },
			    {
			      "userName": "byakkala",
			      "id": "VLTXXXX",
			      "displayName": "Bhargavi"
			    }]
		}
		this.onNameEdit = this.onNameEdit.bind(this);
		this.updateName = this.updateName.bind(this);
	}

	onNameEdit(e) {
		/*console.log(e.target.parentElement);*/
		this.setState(
		{
			'showInputField': true
		});
		
		console.log(this.state)
	}

	updateName(e) {
		console.log(e.target.value);
	}


	render () {
		/*if(this.props.isEditable) {

		} else {

		}*/
		var showInputField = this.state.showInputField;
		var showRelatedInputField = this.state.showRelatedInputField;
		return (
			<div className="page-container">
				<div className="usersList">
					<Header heading={employeesListHeading}/>
					{showInputField}
			    	<ul>
			        	{users.map(user => 
			        		<li key={user.id}>{user.userName}({user.id}) -
				        		<span>{user.displayName} | 
				        			<a href="#" key={user.id} onClick={this.onNameEdit}>Edit Name</a>{showInputField}
				        			{showInputField ? 
				        				<input type="text" onKeyUp={this.updateName}/>
				        				: null
				        			}
				        		</span>
				        	</li>
				        )}
			      	</ul>
			      	<hr/>
			      	<Header heading={this.state.employeesListHeading}/>
			      	<ul className="list-unstyled">
			        	<List options={this.state.employee1}/>
			        	<List options={this.state.employee2}/>
			        	<List options={this.state.employee3}/>
			      	</ul>
				</div>
				<div className="table-container">
					<TableComponent decorators="table table-striped" headers={tableHeaders} bodyData={tableRows}/>					
				</div>
			</div>
		);
	}
}