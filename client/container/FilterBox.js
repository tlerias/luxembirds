import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import ExpandedFilters from  '../components/ExpandedFilters';
import MinimizedFilters from  '../components/MinimizedFilters';

export default class FilterBox extends React.Component {
	constructor(props) {
		super(props);
		   this.state = {
		       filterBoxExpanded: true
		   };
		}


	handleMinimize (visible) {
  	this.setState({filterBoxExpanded: visible});

  	// hack to make sure that the boxes immediately appear when toggling
  	window.scrollTo(null, window.pageYOffset + 1);	
  	window.scrollTo(null, window.pageYOffset - 1);	
  }

  render() {
    return (
      <div>
      	<button onClick={this.handleMinimize.bind(this, true)}>Appear</button>
        <button onClick={this.handleMinimize.bind(this, false)}>Disappear</button>
      	<ExpandedFilters filterBoxExpanded={this.state.filterBoxExpanded}/>
      	<MinimizedFilters filterBoxExpanded={this.state.filterBoxExpanded}/>
      </div>
    );
  }
}