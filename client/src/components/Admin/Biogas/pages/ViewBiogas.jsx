import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import FViewBiogas from '../functions/FViewBiogas';
import 'bootstrap/dist/css/bootstrap.min.css';

const ViewBiogas = () => {
  const [biogases, setBiogas] = useState([]);
  const [error, setError] = useState(null);
  const { fetchBiogas, handleUpdate, handleDelete } = FViewBiogas();

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchBiogas();
        setBiogas(data);
      } catch (error) {
        setError(error.message);
      }
    }
    fetchData();
  }, [fetchBiogas]);

  return (
    <>
    <div className="container mt-5 pt-5">
      
      <h1 className="text-center">Bio-Gas Plant</h1>
      <div className="d-flex justify-content-center mb-3">
  <Link to="/adminbiogasform" className="btn btn-danger btn-lg me-2">Add New</Link>
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
            <th>Slurry Limit</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody className='text-center'>
          {biogases.map(biogas => (
            <tr key={biogas._id}>
              <td>{biogas.biogasId}</td>
              <td>{biogas.biogasName}</td>
              <td>{biogas.biogasEmail}</td>
              <td>{biogas.biogasMobileNo}</td>
              <td>{biogas.biogasAddress}</td>
              <td>{biogas.biogasSlurryLimit}</td>
              <td>
                <div className="d-flex text-center">
                  <button type="button" className="btn btn-danger me-2 " onClick={() => handleUpdate(biogas)}>Edit</button>
                  <button type="button" className="btn btn-secondary" onClick={() => handleDelete(biogas)}> Delete</button>
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

export default ViewBiogas;
