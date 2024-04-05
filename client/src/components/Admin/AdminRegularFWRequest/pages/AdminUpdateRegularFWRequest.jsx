import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import FUpdateRegularFWRequest from '../functions/FAdminUpdateRegularFWRequest';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

function UpdateRegularFWRequest() {
  const location = useLocation();
  const navigate = useNavigate();
  const { RegularFWRequest } = location.state;
  const { formData, handleChange, handleSubmit } = FUpdateRegularFWRequest(RegularFWRequest, navigate);

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Edit RegularFWRequest</h1>
      <form onSubmit={handleSubmit}>
        <table className="table table-bordered">
          <tbody className='text-center'>
            <tr>
              <th><label className="form-label">Request_Id:</label></th>
              <td><input type="text" name="requestId" value={formData.requestId} onChange={handleChange} className="form-control" readOnly/></td>
            </tr>
            <tr>
              <th><label className="form-label">Date :</label></th>
              <td><input type="date" name="date" value={formData.date} onChange={handleChange} className="form-control" /></td>
            </tr>
            
            <tr>
              <th><label className="form-label">Email:</label></th>
              <td><input type="email" name="email" value={formData.email} onChange={handleChange} className="form-control" /></td>
            </tr>
            <tr>
              <th><label className="form-label">Mobile No:</label></th>
              <td><input type="text" name="mobileNo" value={formData.mobileNo} onChange={handleChange} className="form-control" /></td>
            </tr>
            <tr>
              <th><label className="form-label">Address:</label></th>
              <td><input type="text" name="address" value={formData.address} onChange={handleChange} className="form-control" /></td>
            </tr>
            <tr>
              <th><label className="form-label">Organisation Name :</label></th>
              <td><input type="text" name="description" value={formData.organisationName} onChange={handleChange} className="form-control" /></td>
            </tr>
            <tr>
              <th><label className="form-label">Requester_Name:</label></th>
              <td><input type="text" name="requesterName" value={formData.requesterName} onChange={handleChange} className="form-control" /></td>
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

export default UpdateRegularFWRequest;
