import React from 'react';
import { render } from 'react-dom';

const Footer = (props) => (
	<footer className="footer">
	  <div className="container-fluid">
	    <div className="row">
			<div className="col-lg-12 col-md-12">
				<div className="col-lg-6 col-md-6 text-muted">
					{props.footerData.leftContent}
				</div>
				<div className="col-lg-6 col-md-6 text-muted">
					{props.footerData.rightContent}
				</div>
			</div>
		</div>
	  </div>
	</footer>
);

export default Footer;