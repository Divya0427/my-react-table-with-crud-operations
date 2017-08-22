import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header/Header';
import PageContent from './components/PageContent/PageContent';
import Footer from './components/Footer/Footer';

const title = 'Property from main component';
const footerData = {
	"leftContent": "© 2017 BENEFITFOCUS® - All Your Benefits. One Place.™",
	"rightContent": "Terms  of use | Privacy statement"
}

ReactDOM.render(
	<div>
 		<Header heading={title}/>
 		<hr/>
 		<PageContent isEditable="true"/>
 		<Footer footerData={footerData}/>
 	</div>
  ,
  document.getElementById('root')
);
