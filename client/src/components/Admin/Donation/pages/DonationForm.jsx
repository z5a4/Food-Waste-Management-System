import React from 'react';
import { useNavigate } from 'react-router-dom';
import FDonationForm from '../functions/FDonationForm';
import { Input, Button, Typography } from '@material-tailwind/react'; 
import { CommonNavbar } from '../../../common/commonNavbar';
import Footer from '../../../Footer/Footer';

const DonationForm = () => {
  const { formData, errors, handleInputChange, handleSubmit } = FDonationForm();
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/');
  };
  
  return (
    <>
      <CommonNavbar/>
      <div className="container mt-4 border border-gray-400 rounded p-4 pl-6 pr-6">
        <Typography variant='h3' className="text-center mb-4">Donate Us..</Typography>
        <form onSubmit={handleSubmit}>
          <table className="table table-bordered">
            <tbody>
              <tr>
                <td className="form-label font-bold">Donation ID:</td>
                <td>
                  <Input
                    variant='standard'
                    type="text"
                    name="donationId"
                    value={formData.donationId}
                    onChange={handleInputChange}
                    placeholder="Donation ID"
                    error={errors.donationId}
                  />
                </td>
              </tr>
              <tr>
                <td className="form-label font-bold">Donation Type:</td>
                <td>
                  <select
                    name="donationType"
                    value={formData.donationType}
                    onChange={handleInputChange}
                    error={errors.donationType}
                    className="form-select"
                  >
                    <option value="">select Donation Type</option>
                    <option value="Non-Monetary">Monetary</option>
                    <option value="Non-Monetary">Non-Monetary</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td className="form-label font-bold">Description:</td>
                <td>
                  <Input
                    variant='standard'
                    type="text"
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    placeholder="Description"
                    error={errors.description}
                  />
                </td>
              </tr>
              <tr>
                <td className="form-label font-bold">Donation Date:</td>
                <td>
                  <Input
                    variant='standard'
                    type="date"
                    name="donationDate"
                    value={formData.donationDate}
                    onChange={handleInputChange}
                    error={errors.donationDate}
                  />
                </td>
              </tr>
              <tr>
                <td className="form-label font-bold">Donor Name:</td>
                <td>
                  <Input
                    variant='standard'
                    type="text"
                    name="donorName"
                    value={formData.donorName}
                    onChange={handleInputChange}
                    placeholder="Donor Name"
                    error={errors.donorName}
                  />
                </td>
              </tr>
              <tr>
                <td className="form-label font-bold">Donor Mobile No:</td>
                <td>
                  <Input
                    variant='standard'
                    type="tel"
                    name="donorMobileNo"
                    value={formData.donorMobileNo}
                    onChange={handleInputChange}
                    placeholder="Donor Mobile No"
                    error={errors.donorMobileNo}
                  />
                </td>
              </tr>
              <tr>
                <td className="form-label font-bold">Donor Email:</td>
                <td>
                  <Input
                    variant='standard'
                    type="email"
                    name="donorEmail"
                    value={formData.donorEmail}
                    onChange={handleInputChange}
                    placeholder="Donor Email"
                    error={errors.donorEmail}
                  />
                </td>
              </tr>
              <Typography variant='h4' className="mb-2 mt-2">CARD-DETAILS</Typography>
       
              <tr>
                <td className="form-label font-bold">Card Number:</td>
                <td>
                  <Input
                    variant='standard'
                    type="text"
                    name="cardNumber"
                    value={formData.cardNumber}
                    onChange={handleInputChange}
                    placeholder="*********9786"
                    error={errors.cardNumber}
                  />
                </td>
              </tr>
              <tr><td className="form-label font-bold">Expiry:</td>
                <td>
                  <Input
                    variant='standard'
                    type="text"
                    name="expiry"
                    value={formData.expiry}
                    onChange={handleInputChange}
                    placeholder="MM/YY"
                    error={errors.expiry}
                  />
                </td>
              </tr>
              <tr>
                <td className="form-label font-bold">CVV</td>
                <td>
                  <Input
                    variant='standard'
                    type="text"
                    name="cvv"
                    value={formData.cvv}
                    onChange={handleInputChange}
                    placeholder="CVV"
                    error={errors.cvv}
                  />
                  </td>
              </tr>
              
              <tr>
                <td className="form-label font-bold">Donation Amount:</td>
                <td>
                  <Input
                    variant='standard'
                    type="number"
                    name="donationAmount"
                    value={formData.donationAmount}
                    onChange={handleInputChange}
                    placeholder="In Rupees."
                    error={errors.donationAmount}
                  />
                </td>
              </tr>
            </tbody>
          </table>
          <div className="text-center mt-4">
            <Button type="submit" color="green" size="lg" className="me-2">Submit Donation</Button>
            <Button type="button" color="light-blue" size="lg" onClick={handleBack}>Back</Button>
          </div>
        </form>
      </div>
      <Footer/>
    </>
  );
};

export default DonationForm;
