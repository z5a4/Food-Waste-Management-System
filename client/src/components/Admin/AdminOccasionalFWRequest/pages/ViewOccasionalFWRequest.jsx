import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import FViewOccasionalFWRequest from '../functions/FViewOccasionalFWRequest';
import 'bootstrap/dist/css/bootstrap.min.css';

const ViewOccasionalFWRequest = () => {
  const [OccasionalFWRequestS, setOccasionalFWRequest] = useState([]);
  const [error, setError] = useState(null);
  const { fetchOccasionalRequest, handleUpdate, handleDelete } = FViewOccasionalFWRequest();
  
  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchOccasionalRequest();
        setOccasionalFWRequest(data);
      } catch (error) {
        setError(error.message);
      }
    }
    fetchData();
  }, [fetchOccasionalRequest]);

  return (
    <>
    <div className="container mt-5 pt-5">
      
      <h1 className="text-center">OccasionalFWRequest Table</h1>
      <div className="d-flex justify-content-center mb-3">
  <Link to="/adminOccasionalFWRequestform" className="btn btn-danger btn-lg me-2">Add New</Link>
  <Link to="/admin" className="btn btn-danger btn-lg">Back</Link>
</div>
      {error && <p className="text-danger">{error}</p>}
      <table className="table table-striped border rounded">
        <thead className="table-dark text-center">
          <tr>
            <th>Request ID</th>
            <th>Description</th>
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
          {OccasionalFWRequestS.map(OccasionalFWRequest => (
            <tr key={OccasionalFWRequest._id}>
              <td>{OccasionalFWRequest.requestId}</td>
              <td>{OccasionalFWRequest.description}</td>
              <td>{OccasionalFWRequest.requesterName}</td>
              <td>{OccasionalFWRequest.date}</td>
              <td>{OccasionalFWRequest.address}</td>
              <td>{OccasionalFWRequest.mobileNo}</td>
              <td>{OccasionalFWRequest.email}</td>
              <td>{OccasionalFWRequest.approxQuantity}</td>
              <td>
                <div className="d-flex">
                  <button type="button" className="btn btn-danger me-2" onClick={() => handleUpdate(OccasionalFWRequest)}> Edit</button>
                  <button type="button" className="btn btn-secondary" onClick={() => handleDelete(OccasionalFWRequest)}> Delete</button>
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

export default ViewOccasionalFWRequest;
