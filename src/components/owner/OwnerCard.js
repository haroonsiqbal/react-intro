import React, { Component } from 'react';

class OwnerCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <h3>Name: <span className="card-petname">{this.props.owner.name}</span></h3>
          <p>Phone: {this.props.owner.phone}</p>
        </div>
        <button type="button"
          onClick={() => {this.props.history.push(`/owners/${this.props.owner.id}/edit`)}}>Edit</button>
        <button type="button" onClick={() => this.props.deleteOwner(this.props.owner.id)}>Remove</button>
      </div>
    );
  }
}

export default OwnerCard;