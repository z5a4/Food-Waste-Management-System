import React from 'react';
import FDeleteDonation from '../functions/FDeleteDonation';
import 'bootstrap/dist/css/bootstrap.min.css';

function DeleteDonation() {
  const { donation, handleDelete } = FDeleteDonation();

  if (!donation) {
    return <p>Donation data not found</p>;
  }

  return (
    <div className="container mt-5">
      <h1 className="text-center">Delete Donation</h1>
      <form onSubmit={handleDelete} className="mt-4">
        <table className="table table-bordered">
          
          <tbody className='text-center'>
            <tr>
              <th>Name:</th>
              <td><input type="text" value={donation.donorName} disabled className="form-control" /></td>
            </tr>
            <tr>
              <th>Email:</th>
              <td><input type="email" value={donation.donorEmail} disabled className="form-control" /></td>
            </tr>
            <tr>
              <th>Mobile No:</th>
              <td><input type="text" value={donation.donorMobileNo} disabled className="form-control" /></td>
            </tr>
            <tr>
              <th>Address:</th>
              <td><input type="text" value={donation.donorAddress} disabled className="form-control" /></td>
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

export default DeleteDonation;
