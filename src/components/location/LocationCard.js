import React, { Component } from 'react';
import { Link } from "react-router-dom";

class LocationCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <h3>Name: <span className="card-petname">{this.props.location.name}</span></h3>
          <p>Address: {this.props.location.address}</p>
        </div>
        <Link to={`/locations/${this.props.location.id}`}><button>Details</button></Link>
        <button type="button"
          onClick={() => {this.props.history.push(`/locations/${this.props.location.id}/edit`)}}>Edit</button>
        <button type="button" onClick={() => this.props.deleteLocation(this.props.location.id)}>Close</button>
      </div>
    );
  }
}

export default LocationCard;