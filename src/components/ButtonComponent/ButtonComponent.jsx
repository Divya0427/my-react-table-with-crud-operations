import React from 'react';
import { render } from 'react-dom';

const ButtonComponent = (props) => (
	<button className={props.buttonData.decorators} onClick={() => props.eventHandler(props.rowIndex, props.buttonData.buttonText)}>{props.buttonData.buttonText}</button>
);

export default ButtonComponent;