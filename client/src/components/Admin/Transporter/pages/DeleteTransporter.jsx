import React from 'react';
import FDeleteTransporter from '../functions/FDeleteTransporter';
import 'bootstrap/dist/css/bootstrap.min.css';

function DeleteTransporter() {
  const { transporter, handleDelete } = FDeleteTransporter();

  if (!transporter) {
    return <p>Transporter not found</p>;
  }

  return (
    <div className="container mt-5">
      <h1 className='text-center'>Delete transporter</h1>
      <form onSubmit={handleDelete} className='mt-4'>
        <table className="table table-bordered">
          <tbody className='text-center'>
            <tr>
              <th><label>Transporter ID:</label></th>
              <th><input type="text" value={transporter.transporterId} disabled className='form-control' /></th>
            </tr>
            <tr>
              <th><label>Vehicle No:</label></th>
              <th><input type="text" value={transporter.vehicleNo} disabled className='form-control' /></th>
            </tr>
            <tr>
              <th><label>Vehicle Type:</label></th>
              <th><input type="text" value={transporter.vehicleType} disabled className='form-control' /></th>
            </tr>
            <tr>
              <th><label>Driver Name:</label></th>
              <th><input type="text" value={transporter.driverName} disabled className='form-control' /></th>
            </tr>
            <tr>
              <th><label>License No:</label></th>
              <th><input type="text" value={transporter.licenseNo} disabled className='form-control' /></th>
            </tr>
            <tr>
              <th><label>Mobile No:</label></th>
              <th><input type="text" value={transporter.mobileNo} disabled className='form-control' /></th>
            </tr>
            <tr>
              <th><label>Email:</label></th>
              <th><input type="text" value={transporter.email} disabled className='form-control' /></th>
            </tr>
            <tr>
              <th><label>Rent Rate:</label></th>
              <th><input type="text" value={transporter.rentRate} disabled className='form-control' /></th>
            </tr>
            <tr>
              <th colSpan="2" className="text-center">
                <button type="submit" className="btn btn-danger btn-lg">Delete</button>
              </th>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
}

export default DeleteTransporter;
