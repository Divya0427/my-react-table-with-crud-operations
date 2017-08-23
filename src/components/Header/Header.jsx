import React from 'react';
import { render } from 'react-dom';
const headerText = 'Getting this';

const Header = (props) => (
	<div className='Header'>      
	{/*<h1>{headerText}{this.props.heading}</h1>*/}
	<h1>{props.heading}</h1>
	</div>
);

export default Header;