import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import FViewDonation from '../functions/FViewDonation';
import 'bootstrap/dist/css/bootstrap.min.css';

const ViewDonation = () => {
  const [donations, setDonations] = useState([]);
  const [error, setError] = useState(null);
  const { fetchDonation, handleUpdate, handleDelete } = FViewDonation();

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchDonation();
        setDonations(data);
      } catch (error) {
        setError(error.message);
      }
    }
    fetchData();
  }, [fetchDonation]);

  return (
    <>
    <div className="container mt-5 pt-5">
      
      <h1 className="text-center mb-1">Donations</h1>
      <div className="d-flex justify-content-center mb-3">
  <Link to="/admindonationform" className="btn btn-danger btn-lg me-2">Add New</Link>
  <Link to="/admin" className="btn btn-danger btn-lg">Back</Link>
</div>
      {error && <p className="text-danger">{error}</p>}
      <table className="table table-striped border rounded">
        <thead className='table-dark text-center'>
          <tr>
            <th>Donation ID</th>
            <th>Donation Type</th>
            <th>Description</th>
            <th>Donation Date</th>
            <th>Donor Name</th>
            <th>Donor Mobile No</th>
            <th>Donor Email</th>
            <th>Donation Payment Mode</th>
            <th>Donation Amount</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {donations.map((donation) => (
            <tr key={donation._id}>
              <td>{donation.donationId}</td>
              <td>{donation.donationType}</td>
              <td>{donation.description}</td>
              <td>{donation.donationDate}</td>
              <td>{donation.donorName}</td>
              <td>{donation.donorMobileNo}</td>
              <td>{donation.donorEmail}</td>
              <td>{donation.donationPaymentMode}</td>
              <td>{donation.donationAmount}</td>
              <td>
                <div className="d-flex">
                  <button type="button" className="btn btn-danger me-2" onClick={() => handleUpdate(donation)}>Edit</button>
                  <button type="button" className="btn btn-secondary" onClick={() => handleDelete(donation)}>Delete</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    
    </>
  );
};

export default ViewDonation;
