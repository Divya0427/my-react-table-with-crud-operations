import React from 'react';
import {render} from 'react-dom';

import ButtonComponent from '../ButtonComponent/ButtonComponent';


const TableColumn = (props) => {
	/*constructor(props) {
		super(props);
		this.highlight = this._highlight.bind(this);
	}
	_highlight () {

	}*/
	/*{(props.colData && props.colData.showbutton) ? (<button>Button</button>) : (props.colData)}*/
	/*{props.colData.showButton ?
			<button>Button</button>
			: {props.colData}}*/
			/*{(props.colData.showButton) ? <button>Button</button> : props.colData}*/
	//var contentEditable = (props.colData && props.colData.contentEditable) ? props.colData.contentEditable : undefined;

	/*handleClick () {
		if(props.onClick) {
			props.onClick();
		}
	}*/

	//var contentEditable = (props.colData && props.colData.contentEditable) ? true : undefined;
	const tdClass = props.colData.showButton ? undefined : 'table-column';
	return (
		<td className={tdClass}>
			{(props.colData.showButton) ? <ButtonComponent buttonData={props.colData} eventHandler={props.eventHandler}/> : props.colData}
		</td>
	);
}

export default TableColumn;