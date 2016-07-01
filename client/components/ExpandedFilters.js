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
          </Sticky>);
      } else {
      filterBoxComponent = '';
    }
      
    return (
      <ReactCSSTransitionGroup transitionName="filterbox" transitionEnterTimeout={100} transitionLeaveTimeout={300}>
        {filterBoxComponent}
      </ReactCSSTransitionGroup>
    )
  }
}