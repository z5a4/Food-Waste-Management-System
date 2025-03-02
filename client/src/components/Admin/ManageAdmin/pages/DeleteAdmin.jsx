import React from 'react';
import FDeleteadmin from '../functions/FDeleteAdmin';
import { Button, Input, Typography } from '@material-tailwind/react';
import AdminNavbar from '../../AdminNavbar';
import Footer from '../../../Footer/Footer';

function Deleteadmin() {
  const { admin, handleDelete } = FDeleteadmin();

  if (!admin) {
    return <p>Farmer not found</p>;
  }

  return (
    <>
      <AdminNavbar />
      <div className="container mt-5">
        <Typography variant='h3' className="text-center">Delete admin</Typography>
        <form onSubmit={handleDelete} className="mt-4">
          <table className="table table-bordered">
            <tbody className='text-center'>
            <tr>
                <th>Name:</th>
                <td><Input type="text" value={admin.aid} disabled /></td>
              </tr>
             
              <tr>
                <th>Name:</th>
                <td><Input type="text" value={admin.name} disabled /></td>
              </tr>
              <tr>
                <th>Email:</th>
                <td><Input type="email" value={admin.email} disabled /></td>
              </tr>
              <tr>
                <th>Mobile No:</th>
                <td><Input type="text" value={admin.mobileNo} disabled /></td>
              </tr>
              <tr>
                <th>Address:</th>
                <td><Input type="text" value={admin.address} disabled /></td>
              </tr>
              <tr>
                <th>Date of Birth:</th>
                <td><Input type="text" value={admin.dateOfBirth} disabled /></td>
              </tr>
              <tr>
                <th>Username:</th>
                <td><Input type="text" value={admin.username} disabled /></td>
              </tr>
              <tr>
                <th>Password:</th>
                <td><Input type="password" value={admin.password} disabled /></td>
              </tr>
              <tr>
                <th>Security Question:</th>
                <td><Input type="text" value={admin.securityQuestion} disabled /></td>
              </tr>
              <tr>
                <th>Answer:</th>
                <td><Input type="text" value={admin.answer} disabled /></td>
              </tr>
            </tbody>
          </table>
          <div className="text-center">
            <Button type="submit" color="green" size="lg">Delete</Button>
            <Button color="light-blue" size="lg" className="ms-2" onClick={() => window.history.back()}>Back</Button>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default Deleteadmin;
