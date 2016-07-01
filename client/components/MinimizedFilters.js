import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import Sticky from './Sticky';

export default class MinimizedFilters extends React.Component {
  render() {
    var filterBoxComponent;
    if (!this.props.filterBoxExpanded) {
      filterBoxComponent = (
        <Sticky givenClass="filterbox__container filterbox__container--minimized">
          <button onClick={this.props.handleMinimize.bind(this.props.parent, true)}>Appear</button>
        </Sticky>);
    } else {
      filterBoxComponent = '';
    }
      
    return (
      <ReactCSSTransitionGroup transitionName="filterboxminimized" transitionEnterTimeout={700} transitionLeaveTimeout={500}>
        {filterBoxComponent}
      </ReactCSSTransitionGroup>
    )
  }
}