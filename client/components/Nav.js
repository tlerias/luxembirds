import React from 'react';

export default class Nav extends React.Component {  
  render() {
  	let nav;
  	if (this.props.navExpanded) {
        nav =  (
          <div className="nav"></div>
         )
      } else {
      nav = '';
    }
    return (
    	<div>{nav}</div>
    );
  }
}