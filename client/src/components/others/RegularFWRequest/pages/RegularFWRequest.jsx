import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Typography, Input, Button } from "@material-tailwind/react";
import FRegularFWRequest from '../functions/FRegularFWRequest';

const RegularFWRequest = () => {
  const { formData, requestId, handleInputChange, handleSubmit } = FRegularFWRequest();
  const navigate = useNavigate();

  const getCurrentDate = () => {
    const now = new Date();
    now.setDate(now.getDate() - 1); // Subtract one day from the current date

    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const handleBack = () => {
    navigate('/');
  };

  useEffect(() => {
    const currentDate = getCurrentDate();
    handleInputChange({ target: { name: 'date', value: currentDate } });
  }, []);

  return (
    <div className="container mt-5">
      <Typography variant="h1" className="text-center mb-4 font-bold">Regular Food Waste Request</Typography>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="reqID" className="block text-sm font-medium text-gray-700 font-bold">Request ID:</label>
            <Input variant='standard' type="text" name="requestId" value={requestId} readOnly />
          </div>
          <div>
            <label htmlFor="Oname" className="block text-sm font-medium text-gray-700 font-bold">Organisation Name:</label>
            <Input variant='standard' type="text" name="organisationName" value={formData.organisationName} onChange={handleInputChange} />
          </div>
          <div>
            <label htmlFor="Rname" className="block text-sm font-medium text-gray-700 font-bold">Requester Name:</label>
            <Input variant='standard' type="text" name="requesterName" value={formData.requesterName} onChange={handleInputChange} />
          </div>
          <div>
            <label htmlFor="Tdate" className="block text-sm font-medium text-gray-700 font-bold">Date :</label>
            <Input variant='standard' type="date" name="date" value={formData.date} readOnly />
          </div>
          <div>
            <label htmlFor="address" className="block text-sm font-medium text-gray-700 font-bold">Address:</label>
            <Input variant='standard' type="text" name="address" value={formData.address} onChange={handleInputChange} />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 font-bold">Email:</label>
            <Input variant='standard' type="email" name="email" value={formData.email} onChange={handleInputChange} />
          </div>
          <div>
            <label htmlFor="mobileNo" className="block text-sm font-medium text-gray-700 font-bold">Mobile No:</label>
            <Input variant='standard' type="tel" name="mobileNo" value={formData.mobileNo} onChange={handleInputChange} />
          </div>
          <div>
            <label htmlFor="aaproxqty" className="block text-sm font-medium text-gray-700 font-bold">Approx Quantity:</label>
            <Input variant='standard' type="text" name="approxQuantity" value={formData.approxQuantity} onChange={handleInputChange} />
          </div>
        </div>
        <div className="text-center mt-6">
          <Button type="submit" color="green" size="lg" className='mr-2'>Request</Button>
          <Button type="button" color="blue" size="lg" onClick={handleBack}>Back</Button>
        </div>
      </form>
    </div>
  )
};

export default RegularFWRequest;
