import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import UserFViewRegularFWRequest from '../functions/UserFViewRegularFWRequest';
import UserNavbar from '../../UserNavbar';
import Footer from '../../../Footer/Footer';
import { Typography, Button } from '@material-tailwind/react';

const UserViewRegularFWRequest = () => {
  const [regularFWRequests, setRegularFWRequests] = useState([]);
  const [error, setError] = useState(null);
  const { fetchRegularRequest, handleUpdate, handleDelete } = UserFViewRegularFWRequest();
  
  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchRegularRequest();
        setRegularFWRequests(data);
      } catch (error) {
        setError(error.message);
      }
    }
    fetchData();
  }, [fetchRegularRequest]);

  return (
    <>
      <UserNavbar />
      <div className="container mt-4 pt-4">
        <Typography variant='h3' className="text-center mb-4">Regular FW Request Table</Typography>
        <div className="flex justify-center mb-3">
        <Link to="/others/regularfwrequest">
          <Button color="green" className="mr-2">
            Add New
          </Button>
        </Link>
        <Link to="/user">
          <Button color="light-blue">
            Back
          </Button>
        </Link>
        </div>
        {error && <p className="text-danger">{error}</p>}
        <table className="table table-striped border rounded">
          <thead className="table-dark text-center">
            <tr>
              <th>Request ID</th>
              <th>Organisation Name</th>
              <th>Requester Name</th>
              <th>Date</th>
              <th>Address</th>
              <th>Mobile No</th>
              <th>Email</th>
              <th>approxQuantity</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {regularFWRequests.map(regularFWRequest => (
              <tr key={regularFWRequest._id}>
                <td>{regularFWRequest.requestId}</td>
                <td>{regularFWRequest.organisationName}</td>
                <td>{regularFWRequest.requesterName}</td>
                <td>{regularFWRequest.date}</td>
                <td>{regularFWRequest.address}</td>
                <td>{regularFWRequest.mobileNo}</td>
                <td>{regularFWRequest.email}</td>
                <td>{regularFWRequest.approxQuantity}</td>
                <td>
                  <div className="d-flex">
                    <Button color='green' size='sm' className=" me-2" onClick={() => handleUpdate(regularFWRequest)}>Edit</Button>
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
};

export default UserViewRegularFWRequest;
