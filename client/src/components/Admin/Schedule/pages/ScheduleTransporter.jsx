import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import FScheduleTransporter from '../functions/FScheduleTransporter';

function ScheduleTransporter() {
  const { transporters, error } = FScheduleTransporter();
  const navigate = useNavigate();

  
  return (
    <>
    <div className="container mt-5 pt-5">
      
      <h1 className="text-center">Transporter</h1>
      
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
                  <button type="button" className="btn btn-danger me-2" >Add</button>
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

export default ScheduleTransporter;
