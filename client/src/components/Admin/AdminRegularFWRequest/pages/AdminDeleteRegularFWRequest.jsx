import React from 'react';
import FDeleteRegularFWRequest from '../functions/FAdminDeleteRegularFWReques';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

function DeleteRegularFWRequest() {
  const { RegularFWRequest, handleDelete } = FDeleteRegularFWRequest();

  if (!RegularFWRequest) {
    return <p>RegularFWRequest not found</p>;
  }

  return (
    <div className="container mt-5">
      <h1 className="text-center">Delete Regular FW_Request</h1>
      <form onSubmit={handleDelete} className="mt-4">
        <table className="table table-bordered">
          <tbody className='text-center'>
            <tr>
              <th>Request ID:</th>
              <td><input type="text" value={RegularFWRequest.requestId} disabled className="form-control" /></td>
            </tr>
            <tr>
              <th>Organisation Name:</th>
              <td><input type="text" value={RegularFWRequest.organisationName} disabled className="form-control" /></td>
            </tr>
            
            <tr>
              <th>Requester Name:</th>
              <td><input type="text" value={RegularFWRequest.requesterName} disabled className="form-control" /></td>
            </tr>

            <tr>
              <th>Date:</th>
              <td><input type="date" value={RegularFWRequest.date} disabled className="form-control" /></td>
            </tr>
           


            <tr>
              <th>Email:</th>
              <td><input type="email" value={RegularFWRequest.email} disabled className="form-control" /></td>
            </tr>
            <tr>
              <th>Mobile No:</th>
              <td><input type="text" value={RegularFWRequest.mobileNo} disabled className="form-control" /></td>
            </tr>
            <tr>
              <th>Address:</th>
              <td><input type="text" value={RegularFWRequest.address} disabled className="form-control" /></td>
            </tr>
            <tr>
              <th>Approx Quantity:</th>
              <td><input type="text" value={RegularFWRequest.approxQuantity} disabled className="form-control" /></td>
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

export default DeleteRegularFWRequest;
