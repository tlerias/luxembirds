import React from 'react';

export default class Header extends React.Component {

	propTypes: {
    // This will log a message on the console if 
    // items is not defined or if the wrong type
    // is supplied.
    featuredHeaderImage: React.PropTypes.string.isRequired
  }
  
  getDefaultProps () {
    return {
      featuredHeaderImage: 'http://desktopwallpapers.co/wp-content/uploads/2014/03/high-resolution-travel-wallpapers-2.jpg'
    }
  }

  render() {
    return (
    	<div className="header__image--featured">
    		<span className="header__title">The LuxemBirds</span>
    		<img src="http://desktopwallpapers.co/wp-content/uploads/2014/03/high-resolution-travel-wallpapers-2.jpg" />
    	</div>
    );
  }
}