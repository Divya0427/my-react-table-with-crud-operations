import React from 'react';
import {render} from 'react-dom';

export default class List extends React.Component {

	constructor(props){
		super(props);
		this.updateName = this.updateName.bind(this);
		this.editName = this.editName.bind(this);
		this.hideInputField = this.hideInputField.bind(this);
		this.deleteName = this.deleteName.bind(this);
		this.state = {
			showInputField: false,
			options: this.props.options
		}
	}

	updateName(e) {
		//var enteredValue = e.target.value;
		//if(enteredValue) {
		//	this.props.options.displayName = e.target.value;
			this.setState({
				'showInputField': true,
				'options': this.props.options
			});
		//}
	}

	hideInputField() {
		this.setState({
			'showInputField': false
		});
	}

	editName(e) {
		console.log("Editing");
		var enteredValue = e.target.value;
			if(enteredValue) {
				this.props.options.displayName = e.target.value;
				this.setState({
					'options': this.props.options
				});
			}
	}

	deleteName(e) {
		e.target.closest('.employee-list').remove();
	}

	render() {
		return (
			<li>
				<div className="container-fluid">
					<div className="row employee-list">
						<div className="col-lg-12 col-md-12">
							<div className="col-lg-3 col-md-3">
								<span>{this.props.options.displayName}</span>
								{this.state.showInputField ? 
			        				<input type="text" onKeyUp={this.editName} onBlur={this.hideInputField}/>
			        				: null
			        			}
							</div>
							{this.props.options.editOption ? 
								<div className="col-lg-3 col-md-3">
									<button type="button" className="btn btn-sm btn-default" onClick={this.updateName}>
										<span className="glyphicon glyphicon-pencil"></span>
										Edit
									</button>
								</div>
								: null
							}
							
							<div className="col-lg-3 col-md-3">
								<button type="button" className="btn btn-sm btn-default" onClick={this.deleteName}>
									<span className="glyphicon glyphicon-trash"></span>
									Delete
								</button>
							</div>
						</div>
					</div>
				</div>
			</li>
		);
	}
} 