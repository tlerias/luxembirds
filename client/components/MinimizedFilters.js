import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import Sticky from './Sticky';

export default class MinimizedFilters extends React.Component {
  render() {
    var filterBoxComponent;
    if (!this.props.filterBoxExpanded) {
      filterBoxComponent = (
        <Sticky givenClass="filterbox__container filterbox__container--minimized">
          Small Container Here
        </Sticky>);
    } else {
      filterBoxComponent = '';
    }
      
    return (
      <ReactCSSTransitionGroup transitionName="filterboxminimized" transitionEnterTimeout={300} transitionLeaveTimeout={100}>
        {filterBoxComponent}
      </ReactCSSTransitionGroup>
    )
  }
}