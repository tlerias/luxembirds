import React from 'react';
import {Map, Marker} from 'google-maps-react';
import _ from 'lodash';

export default class LocationMap extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      zoom: 3,
      markers: [{
        id: 1,
        lat: 49.611622,
        lng: 6.131935
      },
      {
        id: 2,
        lat: 50.611622,
        lng: 7.131935
      },
      {
        id: 3,
        lat: 48.611622,
        lng: 6.131935
      }]
    }
  }

  centerMap (mapProps, map) {
    this.setState({
      google: mapProps.google
    });

    let center = new this.state.google.maps.LatLng(49.611622, 6.131935)
    
    map.panTo(center);

  }

  render() {
    const style = {
        position: 'absolute',
        height: '400px'
    }
    return (
      <div className='googleMap'>
        <Map style={style} google={window.google} zoom={this.state.zoom } onReady={this.centerMap.bind(this)}>
            {_.map(this.state.markers, function(marker) {
             return ( <Marker name={'Current location'} key={marker.id} position={{lat: marker.lat, lng: marker.lng}}/> )
           })}
        </Map>
      </div>
    )
  }
}