import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import FViewVolunteer from '../functions/FViewVolunteer';

function ViewVolunteer() {
  const { volunteers, error } = FViewVolunteer();
  const navigate = useNavigate();

  const handleUpdate = (volunteer) => {
    navigate(`/update/volunteer/${volunteer._id}`, { state: { volunteer } });
  };

  const handleDelete = (volunteer) => {
    navigate(`/delete/volunteer/${volunteer._id}`, { state: { volunteer } });
  };
  
  return (
    <>
    <div className="container mt-5 pt-5">
      
      <h1 className="text-center">Volunteer</h1>
      <div className="d-flex justify-content-center mb-3">
  <Link to="/adminvolunteerform" className="btn btn-danger btn-lg me-2">Add New</Link>
  <Link to="/admin" className="btn btn-danger btn-lg">Back</Link>
</div>
      {error && <p className="text-danger">{error}</p>}
      <table className="table table-striped border rounded">
        <thead className="table-dark text-center">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Mobile No</th>
            <th>Address</th>
            <th>Date of Birth</th>
            <th>Username</th>
            <th>Password</th>
            <th>Security Question</th>
            <th>Answer</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {volunteers.map(volunteer => (
            <tr key={volunteer._id}>
              <td>{volunteer.id}</td>
              <td>{volunteer.name}</td>
              <td>{volunteer.email}</td>
              <td>{volunteer.mobileNo}</td>
              <td>{volunteer.address}</td>
              <td>{volunteer.dateOfBirth}</td>
              <td>{volunteer.username}</td>
              <td>{volunteer.password}</td>
              <td>{volunteer.securityQuestion}</td>
              <td>{volunteer.answer}</td>
              <td>
                <div className="d-flex">
                  <button type="button" className="btn btn-danger me-2" onClick={() => handleUpdate(volunteer)}> Edit</button>
                  <button type="button" className="btn btn-secondary" onClick={() => handleDelete(volunteer)}> Delete</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    
    </>
  );
}

export default ViewVolunteer;
