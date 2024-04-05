import React from 'react';
import FDeleteOccasionalFWRequest from '../functions/FDeleteOccasionalFWRequest';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

function DeleteOccasionalFWRequest() {
  const { OccasionalFWRequest, handleDelete } = FDeleteOccasionalFWRequest();

  if (!OccasionalFWRequest) {
    return <p>OccasionalFWRequest not found</p>;
  }

  return (
    <div className="container mt-5">
      <h1 className="text-center">Delete OccasionalFWRequest</h1>
      <form onSubmit={handleDelete} className="mt-4">
        <table className="table table-bordered">
          <tbody className='text-center'>
            <tr>
              <th>Request ID:</th>
              <td><input type="text" value={OccasionalFWRequest.requestId} disabled className="form-control" /></td>
            </tr>
            <tr>
              <th>Description:</th>
              <td><input type="text" value={OccasionalFWRequest.description} disabled className="form-control" /></td>
            </tr>
            
            <tr>
              <th>Requester Name:</th>
              <td><input type="text" value={OccasionalFWRequest.requesterName} disabled className="form-control" /></td>
            </tr>
            
            <tr>
              <th>Email:</th>
              <td><input type="email" value={OccasionalFWRequest.email} disabled className="form-control" /></td>
            </tr>
            <tr>
              <th>Mobile No:</th>
              <td><input type="text" value={OccasionalFWRequest.mobileNo} disabled className="form-control" /></td>
            </tr>
            <tr>
              <th>Address:</th>
              <td><input type="text" value={OccasionalFWRequest.address} disabled className="form-control" /></td>
            </tr>
            <tr>
              <th>Approx Quantity:</th>
              <td><input type="text" value={OccasionalFWRequest.approxQuantity} disabled className="form-control" /></td>
            </tr>
            
            <tr>
              <td colSpan="2" className="text-center">
                <button type="submit" className="btn btn-danger btn-lg">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
}

export default DeleteOccasionalFWRequest;
