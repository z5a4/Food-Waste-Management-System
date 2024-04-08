import React from 'react';
import { Input, Button, Typography } from '@material-tailwind/react';
import FDeleteRegularFWRequest from '../functions/FAdminDeleteRegularFWReques';
import AdminNavbar from '../../AdminNavbar';
import Footer from '../../../Footer/Footer';

function DeleteRegularFWRequest() {
  const { RegularFWRequest, handleDelete } = FDeleteRegularFWRequest();

  if (!RegularFWRequest) {
    return <p>RegularFWRequest not found</p>;
  }

  return (
    <div>
      <AdminNavbar />
      <div className="container mt-5">
        <Typography variant='h3' className="text-center">Delete Regular FW_Request</Typography>
        <form onSubmit={handleDelete} className="mt-4">
          <table className="table table-bordered">
            <tbody className='text-center'>
              <tr>
                <th>Request ID:</th>
                <td><Input type="text" value={RegularFWRequest.requestId} disabled /></td>
              </tr>
              <tr>
                <th>Organisation Name:</th>
                <td><Input type="text" value={RegularFWRequest.organisationName} disabled /></td>
              </tr>
              <tr>
                <th>Requester Name:</th>
                <td><Input type="text" value={RegularFWRequest.requesterName} disabled /></td>
              </tr>
              <tr>
                <th>Date:</th>
                <td><Input type="date" value={RegularFWRequest.date} disabled /></td>
              </tr>
              <tr>
                <th>Email:</th>
                <td><Input type="email" value={RegularFWRequest.email} disabled /></td>
              </tr>
              <tr>
                <th>Mobile No:</th>
                <td><Input type="text" value={RegularFWRequest.mobileNo} disabled /></td>
              </tr>
              <tr>
                <th>Address:</th>
                <td><Input type="text" value={RegularFWRequest.address} disabled /></td>
              </tr>
              <tr>
                <th>Approx Quantity:</th>
                <td><Input type="text" value={RegularFWRequest.approxQuantity} disabled /></td>
              </tr>
              <tr>
                <td colSpan="2" className="text-center">
                  <Button type="submit" color="green" size="lg">Delete</Button>
                  <Button color="light-blue" size="lg" className="ms-2" onClick={() => window.history.back()}>Back</Button>
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default DeleteRegularFWRequest;
