import React from 'react';
import { Button, Input, Typography } from '@material-tailwind/react';
import AdminNavbar from '../../AdminNavbar';
import Footer from '../../../Footer/Footer';
import FDeleteDonation from '../functions/FDeleteDonation';

function DeleteDonation() {
  const { donation, handleDelete } = FDeleteDonation();

  if (!donation) {
    return <p>Donation data not found</p>;
  }

  return (
    <>
      <AdminNavbar />
      <div className="container mt-5">
        <Typography variant='h1' className="text-center">Delete Donation</Typography>
        <form onSubmit={handleDelete} className="mt-4">
          <table className="table table-bordered">
            <tbody className="text-center">
              <tr>
                <th>Name:</th>
                <td>
                  <Input
                    type="text"
                    value={donation.donorName}
                    disabled
                  />
                </td>
              </tr>
              <tr>
                <th>Email:</th>
                <td>
                  <Input
                    type="email"
                    value={donation.donorEmail}
                    disabled
                  />
                </td>
              </tr>
              <tr>
                <th>Mobile No:</th>
                <td>
                  <Input
                    type="text"
                    value={donation.donorMobileNo}
                    disabled
                  />
                </td>
              </tr>
              <tr>
                <td colSpan="2" className="text-center">
                  <Button type="submit" color="green" size="lg">Delete</Button>
                  <Button color="light-blue" size="lg" className="ms-4" onClick={() => window.history.back()}>Back</Button>
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default DeleteDonation;
