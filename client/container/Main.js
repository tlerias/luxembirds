import React from 'react';
import Header from '../components/Header';
import LocationMap from '../components/LocationMap';

export default class Main extends React.Component {  
  render() {
    return ( 
    	<div>
    		<Header />
    		<LocationMap />
    		<div>Main App</div> 
    	</div>
    );
  }
}