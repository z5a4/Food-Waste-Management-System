import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import FViewFarmer from '../functions/FViewFarmer';

function ViewFarmer() {
  const { farmers, error } = FViewFarmer();
  const navigate = useNavigate();

  const handleUpdate = (farmer) => {
    navigate(`/update/farmers/${farmer._id}`, { state: { farmer } });
  };

  const handleDelete = (farmer) => {
    navigate(`/delete/farmers/${farmer._id}`, { state: { farmer } });
  };
  
  return (
    <>
    
    <div className="container mt-5 pt-5">
      <h1 className="text-center">Farmers</h1>
      <div className="d-flex justify-content-center mb-3">
  <Link to="/adminfarmerform" className="btn btn-danger btn-lg me-2">Add New</Link>
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
            <th>Username</th>
            <th>Password</th>
            <th>Security Question</th>
            <th>Answer</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {farmers.map(farmer => (
            <tr key={farmer._id}>
              <td>{farmer.farmerId}</td>
              <td>{farmer.farmerName}</td>
              <td>{farmer.farmerEmail}</td>
              <td>{farmer.farmerMobileNo}</td>
              <td>{farmer.farmerAddress}</td>
              <td>{farmer.farmerUsername}</td>
              <td>{farmer.farmerPassword}</td>
              <td>{farmer.farmerSecurityQuestion}</td>
              <td>{farmer.farmerAnswer}</td>
              <td>
                <div className="d-flex">
                  <button type="button" className="btn btn-danger me-2" onClick={() => handleUpdate(farmer)}> Edit</button>
                  <button type="button" className="btn btn-secondary" onClick={() => handleDelete(farmer)}>Delete</button>
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

export default ViewFarmer;
