import React from 'react';
import { useNavigate } from 'react-router-dom';
import FDonationForm from '../functions/FDonationForm';
import 'bootstrap/dist/css/bootstrap.min.css';

const DonationForm = () => {
  const { formData, errors, handleInputChange, handleSubmit } = FDonationForm();
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/adminviewDonation');
  };

  return (
    <div className="container mt-5">
    <h1 className="text-center mb-4">Donate Us..</h1>
    <form onSubmit={handleSubmit} className="container mt-4"></form>
      <table className="table border-only-outside rounded">
        <tbody>
          <tr>
            <th>
              <div className="mb-3">
                <label htmlFor="donationId" className="form-label">Donation ID:</label>
                <input
                  type="text"
                  className="form-control"
                  id="donationId"
                  name="donationId"
                  value={formData.donationId}
                  onChange={handleInputChange}
                />
                {errors.donationId && <span className="text-danger">{errors.donationId}</span>}
              </div>
            </th>
            <th>
              <div className="mb-3">
                <label htmlFor="donationType" className="form-label">Donation Type:</label>
                <select
                  className="form-select"
                  id="donationType"
                  name="donationType"
                  value={formData.donationType}
                  onChange={handleInputChange}
                >
                  <option value="">Select Donation Type</option>
                  <option value="Cash">Cash</option>
                  <option value="Kind">Kind</option>
                </select>
                {errors.donationType && <span className="text-danger">{errors.donationType}</span>}
              </div>
            </th>
          </tr>
          <tr>
            <th>
              <div className="mb-3">
                <label htmlFor="description" className="form-label">Description:</label>
                <input
                  type="text"
                  className="form-control"
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                />
                {errors.description && <span className="text-danger">{errors.description}</span>}
              </div>
            </th>
            <th>
              <div className="mb-3">
                <label htmlFor="donationDate" className="form-label">Donation Date:</label>
                <input
                  type="date"
                  className="form-control"
                  id="donationDate"
                  name="donationDate"
                  value={formData.donationDate}
                  onChange={handleInputChange}
                />
                {errors.donationDate && <span className="text-danger">{errors.donationDate}</span>}
              </div>
            </th>
          </tr>
          <tr>
            <th>
              <div className="mb-3">
                <label htmlFor="donorName" className="form-label">Donor Name:</label>
                <input
                  type="text"
                  className="form-control"
                  id="donorName"
                  name="donorName"
                  value={formData.donorName}
                  onChange={handleInputChange}
                />
                {errors.donorName && <span className="text-danger">{errors.donorName}</span>}
              </div>
            </th>
            <th>
              <div className="mb-3">
                <label htmlFor="donorMobileNo" className="form-label">Donor Mobile No:</label>
                <input
                  type="tel"
                  className="form-control"
                  id="donorMobileNo"
                  name="donorMobileNo"
                  value={formData.donorMobileNo}
                  onChange={handleInputChange}
                />
                {errors.donorMobileNo && <span className="text-danger">{errors.donorMobileNo}</span>}
              </div>
            </th>
          </tr>
          <tr>
            <th>
              <div className="mb-3">
                <label htmlFor="donorEmail" className="form-label">Donor Email:</label>
                <input
                  type="email"
                  className="form-control"
                  id="donorEmail"
                  name="donorEmail"
                  value={formData.donorEmail}
                  onChange={handleInputChange}
                />
                {errors.donorEmail && <span className="text-danger">{errors.donorEmail}</span>}
              </div>
            </th>
            <th>
              <div className="mb-3">
                <label htmlFor="donationPaymentMode" className="form-label">Donation Payment Mode:</label>
                <select
                  className="form-select"
                  id="donationPaymentMode"
                  name="donationPaymentMode"
                  value={formData.donationPaymentMode}
                  onChange={handleInputChange}
                >
                  <option value="">Select Payment Mode</option>
                  <option value="Credit Card">Credit Card</option>
                  <option value="Debit Card">Debit Card</option>
                  <option value="Net Banking">Net Banking</option>
                  <option value="UPI">UPI</option>
                  <option value="Other">Other</option>
                </select>
                {errors.donationPaymentMode && <span className="text-danger">{errors.donationPaymentMode}</span>}
              </div>
            </th>
          </tr>
          <tr>
            <th colSpan="2">
              <div className="mb-3">
                <label htmlFor="donationAmount" className="form-label">Donation Amount:</label>
                <input
                  type="number"
                  className="form-control"
                  id="donationAmount"
                  name="donationAmount"
                  value={formData.donationAmount}
                  onChange={handleInputChange}
                />
                {errors.donationAmount && <span className="text-danger">{errors.donationAmount}</span>}
              </div>
            </th>
          </tr>
          <tr>
            <th colSpan="2" className="text-center">
              <button type="submit" className="btn btn-danger btn-lg me-2" onClick={handleSubmit}>Submit Donation</button>
              <button type="button" className="btn btn-secondary btn-lg" onClick={handleBack}>Back</button>
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DonationForm;
