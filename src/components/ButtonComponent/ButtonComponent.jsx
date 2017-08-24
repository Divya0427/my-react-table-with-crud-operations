import React from 'react';
import { render } from 'react-dom';

export default class ButtonComponent extends React.Component{
	constructor(props) {
		super(props);
		console.log(props);
	}
	render() {
		return (
			<button className={this.props.buttonData.decorators} onClick={this.props.eventHandler}>{this.props.buttonData.buttonText}</button>
		)
	}
};

