import React from 'react';
import Sticky from './Sticky';

export default class LocationMap extends React.Component {

  render() {
    return (
      <Sticky givenClass="map__container">
        <div>
          MAP!
        </div>
      </Sticky>
    );
  }
}