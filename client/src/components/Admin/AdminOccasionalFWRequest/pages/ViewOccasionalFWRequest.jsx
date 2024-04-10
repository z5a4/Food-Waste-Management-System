import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import FViewOccasionalFWRequest from '../functions/FViewOccasionalFWRequest';
import 'tailwindcss/tailwind.css';
import AdminNavbar from '../../AdminNavbar';
import Footer from '../../../Footer/Footer';
import { Typography, Button } from '@material-tailwind/react';

const ViewOccasionalFWRequest = () => {
  const [OccasionalFWRequestS, setOccasionalFWRequest] = useState([]);
  const [error, setError] = useState(null);
  const { fetchOccasionalRequest, handleUpdate, handleDelete } = FViewOccasionalFWRequest();
  
  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchOccasionalRequest();
        setOccasionalFWRequest(data);
      } catch (error) {
        setError(error.message);
      }
    }
    fetchData();
  }, [fetchOccasionalRequest]);

  return (
    <>
    <AdminNavbar/>
      <div className="container mt-4 pt-4">
        <Typography variant='h3' className="text-center mb-3">OccasionalFWRequest Table</Typography>
        <div className="flex justify-center mb-3">
        <Link to="/common/occasionalFWrequest">
          <Button color="green" className="mr-2">
            Add New
          </Button>
        </Link>
        <Link to="/admin">
          <Button color="light-blue">
            Back
          </Button>
        </Link>
        </div>
        {error && <p className="text-red-500">{error}</p>}
        <table className="table-auto w-full bg-white border-collapse border border-gray-300">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="py-2 px-4">Request ID</th>
              <th className="py-2 px-4">Description</th>
              <th className="py-2 px-4">Requester Name</th>
              <th className="py-2 px-4">Date</th>
              <th className="py-2 px-4">Address</th>
              <th className="py-2 px-4">Mobile No</th>
              <th className="py-2 px-4">Email</th>
              <th className="py-2 px-4">approxQuantity</th>
              <th className="py-2 px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {OccasionalFWRequestS.map(OccasionalFWRequest => (
              <tr key={OccasionalFWRequest._id}>
                <td className="py-2 px-4">{OccasionalFWRequest.requestId}</td>
                <td className="py-2 px-4">{OccasionalFWRequest.description}</td>
                <td className="py-2 px-4">{OccasionalFWRequest.requesterName}</td>
                <td className="py-2 px-4">{OccasionalFWRequest.date}</td>
                <td className="py-2 px-4">{OccasionalFWRequest.address}</td>
                <td className="py-2 px-4">{OccasionalFWRequest.mobileNo}</td>
                <td className="py-2 px-4">{OccasionalFWRequest.email}</td>
                <td className="py-2 px-4">{OccasionalFWRequest.approxQuantity}</td>
                <td className="py-2 px-4">
                  <div className="flex">
                    <Button color='green' size='sm' className="me-2" onClick={() => handleUpdate(OccasionalFWRequest)}> Edit</Button>
                    <Button color='light-blue' size='sm' onClick={() => handleDelete(OccasionalFWRequest)}> Delete</Button>
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
};

export default ViewOccasionalFWRequest;
