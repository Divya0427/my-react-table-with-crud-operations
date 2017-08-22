import React from 'react';
import { render } from 'react-dom';
const headerText = 'Getting this';

const Header = React.createClass ({
  render() {
    return (
      <div className='Header'>      
        {/*<h1>{headerText}{this.props.heading}</h1>*/}
        <h1>{this.props.heading}</h1>
      </div>
    );
  }
});

export default Header;