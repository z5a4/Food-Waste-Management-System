import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import FUpdateTransporter from '../functions/FUpdateTransporter';
import 'bootstrap/dist/css/bootstrap.min.css';

function UpdateTransporter() {
  const location = useLocation();
  const navigate = useNavigate();
  const { transporter } = location.state;
  const { formData, handleChange, handleSubmit } = FUpdateTransporter(transporter, navigate);

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Edit Transporter</h1>
      <form onSubmit={handleSubmit}>
        <table className="table table-bordered">
          <tbody className='text-center'>
            <tr>
              <th><label>Transporter ID:</label></th>
              <th><input type="text" name="transporterId" value={formData.transporterId} onChange={handleChange} className="form-control" /></th>
            </tr>
            <tr>
              <th><label>Vehicle No:</label></th>
              <th><input type="text" name="vehicleNo" value={formData.vehicleNo} onChange={handleChange} className="form-control" /></th>
            </tr>
            <tr>
              <th><label>Vehicle Type:</label></th>
              <th><input type="text" name="vehicleType" value={formData.vehicleType} onChange={handleChange} className="form-control" /></th>
            </tr>
            <tr>
              <th><label>Driver Name:</label></th>
              <th><input type="text" name="driverName" value={formData.driverName} onChange={handleChange} className="form-control" /></th>
            </tr>
            <tr>
              <th><label>License No:</label></th>
              <th><input type="text" name="licenseNo" value={formData.licenseNo} onChange={handleChange} className="form-control" /></th>
            </tr>
            <tr>
              <th><label>Mobile No:</label></th>
              <th><input type="text" name="mobileNo" value={formData.mobileNo} onChange={handleChange} className="form-control" /></th>
            </tr>
            <tr>
              <th><label>Email:</label></th>
              <th><input type="email" name="email" value={formData.email} onChange={handleChange} className="form-control" /></th>
            </tr>
            <tr>
              <th><label>Rent Rate:</label></th>
              <th><input type="text" name="rentRate" value={formData.rentRate} onChange={handleChange} className="form-control" /></th>
            </tr>
            <tr>
              <td colSpan="2" className="text-center">
                <button type="submit" className="btn btn-danger btn-lg">Confirm</button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
}

export default UpdateTransporter;
