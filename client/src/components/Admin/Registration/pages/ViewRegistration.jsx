import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button,Typography } from '@material-tailwind/react';
import FViewRegistrations from '../functions/FViewRegistration';
import AdminNavbar from '../../AdminNavbar';
import Footer from '../../../Footer/Footer';


function ViewRegistrations() {
  const { registrations, error } = FViewRegistrations();
  const navigate = useNavigate();

  const handleUpdate = (registration) => {
    navigate(`/update/${registration._id}`, { state: { registration } });
  };

  const handleDelete = (registration) => {
    navigate(`/delete/${registration._id}`, { state: { registration } });
  };

  return (
    <>
    <AdminNavbar/>
      <div className="container mt-4 pt-4">
        <Typography variant='h3' className="text-center mb-3">Registrations</Typography>
        <div className="flex justify-center mb-3">
          <Link to="/commonregistration">
            <Button className='mr-2' color="green" >
              Add New
            </Button>
          </Link>
          <Link to="/admin">
            <Button color="light-blue" >
              Back
            </Button>
          </Link>
        </div>
        {error && <p className="text-red-500">{error}</p>}
        <table className="table-auto w-full text-center">
          <thead className="bg-gray-800 text-white">
            <tr>
            <th className="px-4 py-2">ID</th>
            <th className="px-4 py-2">Category</th>
            <th className="px-4 py-2">Organisation Name</th>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Mobile No</th>
              <th className="px-4 py-2">Address</th>
              <th className="px-4 py-2">Date of Birth</th>
              <th className="px-4 py-2">Username</th>
              <th className="px-4 py-2">Password</th>
              <th className="px-4 py-2">Security Question</th>
              <th className="px-4 py-2">Answer</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {registrations.map(registration => (
              <tr key={registration._id} className="text-center">
                <td className="px-4 py-2">{registration.regid}</td>
                <td className="px-4 py-2">{registration.category}</td>
                <td className="px-4 py-2">{registration.organisationName}</td>
                <td className="px-4 py-2">{registration.name}</td>
                <td className="px-4 py-2">{registration.email}</td>
                <td className="px-4 py-2">{registration.mobileNo}</td>
                <td className="px-4 py-2">{registration.address}</td>
                <td className="px-4 py-2">{registration.dateOfBirth}</td>
                <td className="px-4 py-2">{registration.username}</td>
                <td className="px-4 py-2">{registration.password}</td>
                <td className="px-4 py-2">{registration.securityQuestion}</td>
                <td className="px-4 py-2">{registration.answer}</td>
                <td className="px-4 py-2">
                  <div className="flex justify-center">
                    <Button color="green" size="sm" className="me-2" onClick={() => handleUpdate(registration)}>
                      Edit
                    </Button>
                    <Button color="light-blue" size="sm" onClick={() => handleDelete(registration)}>
                      Delete
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Footer/>
    </>
  );
}

export default ViewRegistrations;
