import React, { Component } from 'react';

class EmployeeCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <h3>Employees</h3>
          <p>Haroon Iqbal</p>
          <p>M Stiles</p>
          <p>Ellie Ash</p>
          <p>Bennett Foster</p>
        </div>
      </div>
    );
  }
}

export default EmployeeCard;