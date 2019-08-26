import React, { Component } from 'react';

class EmployeeCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <h3>Name: <span className="card-petname">{this.props.employee.name}</span> </h3>
        </div>
        <button type="button" onClick={() => this.props.deleteEmployee(this.props.employee.id)}>Fire</button>
      </div>
    );
  }
}

export default EmployeeCard;