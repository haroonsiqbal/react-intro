import React, { Component } from 'react';

class LocationCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <h3>Name: <span className="card-petname">{this.props.location.name}</span></h3>
          <p>Address: {this.props.location.address}</p>
        </div>
        <button type="button" onClick={() => this.props.deleteLocation(this.props.location.id)}>Close</button>
      </div>
    );
  }
}

export default LocationCard;