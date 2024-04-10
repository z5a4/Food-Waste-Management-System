import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import FUSchedule from '../functions/FUSchedule';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

function USchedule() {
    const location = useLocation();
    const navigate = useNavigate();
  
    // Check if location.state is null before destructuring
    const { RegularFWRequest, OccasionalFWRequest } = location.state || {};
    
    // Check if RegularFWRequest and OccasionalFWRequest are null before passing to FUSchedule
    const { formData, handleChange, handleSubmit } = FUSchedule(
      RegularFWRequest || {},
      OccasionalFWRequest || {},
      navigate
    );
    
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Edit Member</h1>
      <form onSubmit={handleSubmit}>
        <table className="table table-bordered">
          <tbody className='text-center'>
            <tr>
              <th><label className="form-label">Request ID : </label></th>
              <td><input type="text" name="requestId" value={formData.requestId} onChange={handleChange} className="form-control" /></td>
            </tr>
            <tr>
              <th><label className="form-label">Organisation Name : </label></th>
              <td><input type="text" name="organisationName" value={formData.organisationName} onChange={handleChange} className="form-control" /></td>
            </tr>
            <tr>
              <th><label className="form-label">Description : </label></th>
              <td><input type="text" name="description" value={formData.description} onChange={handleChange} className="form-control" /></td>
            </tr>
            <tr>
              <th><label className="form-label">Requester Name : </label></th>
              <td><input type="text" name="requesterName" value={formData.requesterName} onChange={handleChange} className="form-control" /></td>
            </tr>
           
            <tr>
              <th><label className="form-label">Mobile No:</label></th>
              <td><input type="text" name="mobileNo" value={formData.mobileNo} onChange={handleChange} className="form-control" /></td>
            </tr>
            <tr>
              <th><label className="form-label">Email : </label></th>
              <td><input type="email" name="email" value={formData.email} onChange={handleChange} className="form-control" /></td>
            </tr>
           
            <tr>
              <th><label className="form-label">Address:</label></th>
              <td><input type="text" name="address" value={formData.address} onChange={handleChange} className="form-control" /></td>
            </tr>
            <tr>
              <th><label className="form-label">Approx Quantity :</label></th>
              <td><input type="text" name="approxQuantity" value={formData.approxQuantity} onChange={handleChange} className="form-control" /></td>
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

export default USchedule;
