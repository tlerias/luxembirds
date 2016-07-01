import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import Sticky from './Sticky';
import LocationMap from  '../components/LocationMap';
import HashtagSearch from  '../components/HashtagSearch';

export default class ExpandedFilters extends React.Component {
  render() {
    var filterBoxComponent;

    if (this.props.filterBoxExpanded) {
        filterBoxComponent =  (
          <Sticky givenClass="filterbox__container filterbox__container--expanded">
            <LocationMap />
            <HashtagSearch />
            <button onClick={this.props.handleMinimize.bind(this.props.parent, false)}>Disappear</button>
          </Sticky>);
      } else {
      filterBoxComponent = '';
    }
      
    return (
      <ReactCSSTransitionGroup transitionName="filterbox" transitionEnterTimeout={400} transitionLeaveTimeout={500}>
        {filterBoxComponent}
      </ReactCSSTransitionGroup>
    )
  }
}