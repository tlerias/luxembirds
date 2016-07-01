import React from 'react';
import Map from 'google-maps-react';

export default class LocationMap extends React.Component {
	constructor (props) {
		super(props);

		this.state = {
     	zoom: 3
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
        <Map style={style} google={window.google} zoom={this.state.zoom } onReady={this.centerMap.bind(this)}/>
      </div>
    )
  }
}