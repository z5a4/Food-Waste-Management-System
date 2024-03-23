import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import FUpdateDonation from '../functions/FUpdateDonation';
import 'bootstrap/dist/css/bootstrap.min.css';

function UpdateDonation() {
  const location = useLocation();
  const navigate = useNavigate();
  const { donation } = location.state;
  const { formData, handleChange, handleSubmit } = FUpdateDonation(donation, navigate);

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Edit Donation</h1>
      <form onSubmit={handleSubmit}>
        <table className="table table-bordered">
          <tbody>
            <tr>
              <th className="text-center">Name:</th>
              <td>
                <input type="text" name="donorName" value={formData.donorName} onChange={handleChange} className="form-control" />
              </td>
            </tr>
            <tr>
              <th className="text-center">Email:</th>
              <td>
                <input type="email" name="donorEmail" value={formData.donorEmail} onChange={handleChange} className="form-control" />
              </td>
            </tr>
            <tr>
              <th className="text-center">Mobile No:</th>
              <td>
                <input type="text" name="donorMobileNo" value={formData.donorMobileNo} onChange={handleChange} className="form-control" />
              </td>
            </tr>
            <tr>
              <th className="text-center">Address:</th>
              <td>
                <input type="text" name="donorAddress" value={formData.donorAddress} onChange={handleChange} className="form-control" />
              </td>
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

export default UpdateDonation;
