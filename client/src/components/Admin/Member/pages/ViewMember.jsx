import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import FViewMember from '../functions/FViewMember';
import { Button, Typography } from '@material-tailwind/react'; // Import Material Tailwind components
import AdminNavbar from '../../AdminNavbar'; // Assuming you have an AdminNavbar component
import Footer from '../../../Footer/Footer'; // Assuming you have a Footer component

function ViewMember() {
  const { members, error } = FViewMember();
  const navigate = useNavigate();

  const handleUpdate = (member) => {
    navigate(`/update/members/${member._id}`, { state: { member } });
  };

  const handleDelete = (member) => {
    navigate(`/delete/members/${member._id}`, { state: { member } });
  };
  
  return (
    <>
    <AdminNavbar />
    <div className="container mt-4 pt-4">
      <Typography variant="h3" className="text-center mb-3">Members</Typography>
      <div className="flex justify-center mb-3">
        <Link to="/adminmemberform">
          <Button color="green" size="lg" className="me-2">Add New</Button>
        </Link>
        <Link to="/admin">
          <Button color="light-blue" size="lg">Back</Button>
        </Link>
      </div>
      {error && <p className="text-red-500">{error}</p>}
      <table className="table-auto w-full border border-collapse rounded">
        <thead className="bg-gray-800 text-white">
          <tr>
            <th className="px-4 py-2">ID</th>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Email</th>
            <th className="px-4 py-2">Mobile No</th>
            <th className="px-4 py-2">Address</th>
            <th className="px-4 py-2">Date of Birth</th>
            <th className="px-4 py-2">Username</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {members.map(member => (
            <tr key={member._id}>
              <td className="border px-4 py-2">{member.id}</td>
              <td className="border px-4 py-2">{member.name}</td>
              <td className="border px-4 py-2">{member.email}</td>
              <td className="border px-4 py-2">{member.mobileNo}</td>
              <td className="border px-4 py-2">{member.address}</td>
              <td className="border px-4 py-2">{member.dateOfBirth}</td>
              <td className="border px-4 py-2">{member.username}</td>
              
              <td className="border px-4 py-2">
                <div className="flex justify-center">
                  <Button color="green" size="sm" className="me-2" onClick={() => handleUpdate(member)}>Edit</Button>
                  <Button color="light-blue" size="sm" onClick={() => handleDelete(member)}>Delete</Button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <Footer />
    </>
  );
}

export default ViewMember;
