import React from 'react';
import FDeleteMember from '../functions/FDeleteMember';
import { Link } from 'react-router-dom';
import { Typography, Button, Input } from '@material-tailwind/react'; // Import Material Tailwind components
import AdminNavbar from '../../AdminNavbar';
import Footer from '../../../Footer/Footer';


function DeleteMember() {
  const { member, handleDelete } = FDeleteMember();

  if (!member) {
    return <p>Member not found</p>;
  }

  return (
    <>
    <AdminNavbar/>
    <div className="container mt-5">
      <Typography variant="h3" className="text-center">Delete Member</Typography>
      <form onSubmit={handleDelete} className="mt-4">
        <table className="table-auto w-full border rounded">
          <tbody className='text-center'>
            <tr>
              <th>Name:</th>
              <td><Input type="text" value={member.name} disabled className="form-control" /></td>
            </tr>
            <tr>
              <th>Email:</th>
              <td><Input type="email" value={member.email} disabled className="form-control" /></td>
            </tr>
            <tr>
              <th>Mobile No:</th>
              <td><Input type="text" value={member.mobileNo} disabled className="form-control" /></td>
            </tr>
            <tr>
              <th>Address:</th>
              <td><Input type="text" value={member.address} disabled className="form-control" /></td>
            </tr>
            <tr>
              <td colSpan="2" className="text-center">
                <Button type="submit" color="green" size="lg">Delete</Button>
                <Link to="/adminviewmember">
                <Button className='ml-2' color="light-blue">
                  Back
                </Button>
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
    <Footer/>
    </>
  );
}

export default DeleteMember;
