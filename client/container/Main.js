import React from 'react';
import Header from '../components/Header';
import FilterBox from './FilterBox';

export default class Main extends React.Component {  
  render() {
    return ( 
    	<div>
    		<Header />
    		<FilterBox />
    		<div>Main App</div> 
    	</div>
    );
  }
}