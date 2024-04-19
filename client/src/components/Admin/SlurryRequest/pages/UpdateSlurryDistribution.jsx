import React from 'react';
import { Button, Typography, Input } from '@material-tailwind/react';
import { useUpdateSlurryDistribution } from '../functions/useUpdateSlurryDistribution'; // Import the custom hook

const UpdateSlurryDistribution = () => {
  const { formData, handleChange, handleSubmit, loading, navigate } = useUpdateSlurryDistribution();

  return (
    <div className="container mt-5 pt-5">
      <Typography color="blueGray" variant="h1" className="text-center">Update Slurry Distribution</Typography>
      {loading ? (
        <p>Loading slurry distribution data...</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <table className="table table-bordered w-3/4 mx-auto">
            <tbody className='text-center'>
              <tr>
                <th className="w-1/4"><label className="font-bold">Farmer Name:</label></th>
                <th className="w-3/4"><Input variant='standard' type="text" name="farmerName" value={formData.farmerName} onChange={handleChange} /></th>
              </tr>
              <tr>
                <th><label className="font-bold">Phone Number:</label></th>
                <th><Input variant='standard' type="text" name="mobileNo" value={formData.mobileNo} onChange={handleChange} /> {/* Removed readOnly */}</th>
              </tr>
              <tr>
                <th><label className="font-bold">Address:</label></th>
                <th><Input variant='standard' type="text" name="address" value={formData.address} onChange={handleChange} /> {/* Removed readOnly */}</th>
              </tr>
              <tr>
                <th><label className="font-bold">Date:</label></th>
                <th><Input variant='standard' type="date" name="date" value={formData.date.split('T')[0]} readOnly /> {/* Made date editable */}</th>
              </tr>
              <tr>
                <th><label className="font-bold">Quantity:</label></th>
                <th><Input variant='standard' type="number" name="quantity" value={formData.quantity} onChange={handleChange} /> {/* Removed readOnly */}</th>
              </tr>
              <tr>
                <th><label className="font-bold">Submission Date:</label></th>
                <th><Input variant='standard' type="date" name="submissionDate" value={formData.submissionDate.split('T')[0]} readOnly/> {/* Submission Date remains readOnly */}</th>
              </tr>
              <tr>
                <th colSpan="2" className="text-center">
                  <Button color="green" size="lg" type="submit">Update</Button>
                </th>
              </tr>
              <tr>
                <th colSpan="2" className="text-center">
                  <Button color="black" className="mt-3" onClick={() => navigate(-1)}>Back</Button>
                </th>
              </tr>
            </tbody>
          </table>
        </form>
      )}
    </div>
  );
};

export default UpdateSlurryDistribution;
