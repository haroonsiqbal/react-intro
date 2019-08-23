import React, { Component } from 'react';

class LocationCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <h3>Locations</h3>
          <p>North Nashville</p>
          <p>South Nashville</p>
          <p>West End</p>
          <p>Green Hills</p>
        </div>
      </div>
    );
  }
}

export default LocationCard;