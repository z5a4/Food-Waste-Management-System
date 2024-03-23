import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import FAdminViewRegularFWRequest from '../functions/FAdminViewRegularFWRequest';
import 'bootstrap/dist/css/bootstrap.min.css';

const AdminViewRegularFWRequest = () => {
  const [RegularFWRequestS, setRegularFWRequest] = useState([]);
  const [error, setError] = useState(null);
  const { fetchRegularRequest, handleUpdate, handleDelete } = FAdminViewRegularFWRequest();
  
  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchRegularRequest();
        setRegularFWRequest(data);
      } catch (error) {
        setError(error.message);
      }
    }
    fetchData();
  }, [fetchRegularRequest]);

  return (
    <>
    <div className="container mt-5 pt-5">
      
      <h1 className="text-center">Regular FW Request Table</h1>
      <div className="d-flex justify-content-center mb-3">
  <Link to="/adminRegularFWRequestform" className="btn btn-danger btn-lg me-2">Add New</Link>
  <Link to="/admin" className="btn btn-danger btn-lg">Back</Link>
</div>
      {error && <p className="text-danger">{error}</p>}
      <table className="table table-striped border rounded">
        <thead className="table-dark text-center">
          <tr>
            <th>Request ID</th>
            <th>Organisation Name</th>
            <th>Requester Name</th>
            <th>Date</th>
            <th>Address</th>
            <th>Mobile No</th>
            <th>Email</th>
            <th>approxQuantity</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {RegularFWRequestS.map(RegularFWRequest => (
            <tr key={RegularFWRequest._id}>
              <td>{RegularFWRequest.requestId}</td>
              <td>{RegularFWRequest.organisationName}</td>
              <td>{RegularFWRequest.requesterName}</td>
              <td>{RegularFWRequest.date}</td>
              <td>{RegularFWRequest.address}</td>
              <td>{RegularFWRequest.mobileNo}</td>
              <td>{RegularFWRequest.email}</td>
              <td>{RegularFWRequest.approxQuantity}</td>
              <td>
                <div className="d-flex">
                  <button type="button" className="btn btn-danger me-2" onClick={() => handleUpdate(RegularFWRequest)}> Edit</button>
                  <button type="button" className="btn btn-secondary" onClick={() => handleDelete(RegularFWRequest)}> Delete</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    
    </>
  );
};

export default AdminViewRegularFWRequest;
