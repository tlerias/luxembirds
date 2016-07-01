import React from 'react';
import _ from 'lodash';

export default class MainContent extends React.Component {
  constructor (props) {
    super(props);
  }

  render() {
    console.log(this.props)
    return (
    	<div className="content">
        {_.map(this.props.currentSearch, function (searchItem) {
          return (<h2 className="content__title" key={searchItem.id}>#{searchItem.title}</h2>);
        })}
      </div>
    );
  }
}