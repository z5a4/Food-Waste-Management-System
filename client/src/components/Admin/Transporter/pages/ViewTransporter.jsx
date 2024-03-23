import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import FViewTransporter from '../functions/FViewTransporter';

function ViewTransporter() {
  const { transporters, error } = FViewTransporter();
  const navigate = useNavigate();

  const handleUpdate = (transporter) => {
    navigate(`/update/transporter/${transporter._id}`, { state: { transporter } });
  };

  const handleDelete = (transporter) => {
    navigate(`/delete/transporter/${transporter._id}`, { state: { transporter } });
  };
  
  return (
    <>
    <div className="container mt-5 pt-5">
      
      <h1 className="text-center">Transporter</h1>
      <div className="d-flex justify-content-center mb-3">
  <Link to="/admintransporterform" className="btn btn-danger btn-lg me-2">Add New</Link>
  <Link to="/admin" className="btn btn-danger btn-lg">Back</Link>
</div>
      {error && <p className="text-danger">{error}</p>}
      <table className="table table-striped border rounded">
        <thead className="table-dark text-center">
          <tr>
            <th>ID</th>
            <th>Driver Name</th>
            <th>Vehicle No</th>
            <th>Vehicle Type</th>
            <th>Lisence No</th>
            <th>Mobile No</th>
            <th>Email</th>
            <th>Rent Rate</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {transporters.map(transporter => (
            <tr key={transporter._id}>
              <td>{transporter.transporterId}</td>
              <td>{transporter.driverName}</td>
              <td>{transporter.vehicleNo}</td>
              <td>{transporter.vehicleType}</td>
              <td>{transporter.licenseNo}</td>
              <td>{transporter.mobileNo}</td>
              <td>{transporter.email}</td>
              <td>{transporter.rentRate}</td>
              <td>
                <div className="d-flex">
                  <button type="button" className="btn btn-danger me-2" onClick={() => handleUpdate(transporter)}> Edit</button>
                  <button type="button" className="btn btn-secondary" onClick={() => handleDelete(transporter)}>Delete</button>
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

export default ViewTransporter;
