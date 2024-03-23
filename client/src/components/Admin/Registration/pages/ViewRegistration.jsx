import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import FViewRegistrations from '../functions/FViewRegistration';
import 'bootstrap/dist/css/bootstrap.min.css';

function ViewRegistrations() {
  const { registrations, error } = FViewRegistrations();
  const navigate = useNavigate();

  const handleUpdate = (registration) => {
    navigate(`/update/${registration._id}`, { state: { registration } });
  };

  const handleDelete = (registration) => {
    navigate(`/delete/${registration._id}`, { state: { registration } });
  };
  
  return (
    <>
    <div className="container mt-5 pt-5">
      
      <h1 className="text-center">Registrations</h1>
      <div className="d-flex justify-content-center mb-3">
  <Link to="/register" className="btn btn-danger btn-lg me-2">Add New</Link>
  <Link to="/admin" className="btn btn-danger btn-lg">Back</Link>
</div>
      {error && <p className="text-danger">{error}</p>}
      <table className="table table-striped border rounded">
        <thead className="table-dark text-center">
          <tr>
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
          {registrations.map(registration => (
            <tr key={registration._id}>
              <td>{registration.name}</td>
              <td>{registration.email}</td>
              <td>{registration.mobileNo}</td>
              <td>{registration.address}</td>
              <td>{registration.dateOfBirth}</td>
              <td>{registration.username}</td>
              <td>{registration.password}</td>
              <td>{registration.securityQuestion}</td>
              <td>{registration.answer}</td>
              <td>
              <div className="d-flex">
                  <button type="button" className="btn btn-danger me-2" onClick={() => handleUpdate(registration)}> Edit</button>
                  <button type="button" className="btn btn-secondary" onClick={() => handleDelete(registration)}> Delete</button>
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

export default ViewRegistrations;
