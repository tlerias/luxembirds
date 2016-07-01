import React from 'react';
import Header from '../components/Header';
import Nav from '../components/Nav';
import FilterBox from './FilterBox';

export default class Main extends React.Component {
constructor(props) {
    super(props);
    this.state = {
      navExpanded: false
    };
    // example how to bind object in React ES6
    this.handleScroll = this.handleScroll.bind(this)
}
  
componentDidMount(){
      window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {

    if (window.pageYOffset > 150) {
      this.setState({
        navExpanded: true
      });
    } else if (window.pageYOffset < 150) {
      this.setState({
        navExpanded: false
      });
    }

  }

  render() {
    return ( 
    	<div>
    		<Nav navExpanded={this.state.navExpanded}/>
    		<Header />
    		<FilterBox />
    		<div>Main App</div> 
    	</div>
    );
  }
}