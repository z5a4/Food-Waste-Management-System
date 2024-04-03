import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Input, Button, Typography } from '@material-tailwind/react';
import FOMember from '../functions/FOMember';

const OMember = () => {
  const { formData, errors, handleInputChange, handleSubmit } = FOMember();
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/adminviewmember');
  };

  return (
    <div className="container mx-auto mt-10">
      <Typography variant='h1' className="text-center mb-4 font-bold">Register Member</Typography>
      <form onSubmit={handleSubmit} className="mt-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Typography tag="label" className="block text-sm font-bold text-gray-700">Name:</Typography>
            <Input variant="standard" type="text" name="name" value={formData.name} onChange={handleInputChange}  />
            {errors.name && <span className="text-red-500">{errors.name}</span>}
          </div>
          <div>
            <Typography tag="label" className="block text-sm font-bold text-gray-700">Date of Birth:</Typography>
            <Input variant="standard" type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleInputChange}  />
            {errors.dateOfBirth && <span className="text-red-500">{errors.dateOfBirth}</span>}
          </div>
          <div>
            <Typography tag="label" className="block text-sm font-bold text-gray-700">Address:</Typography>
            <Input variant="standard" type="text" name="address" value={formData.address} onChange={handleInputChange}  />
            {errors.address && <span className="text-red-500">{errors.address}</span>}
          </div>
          <div>
            <Typography tag="label" className="block text-sm font-bold text-gray-700">Email:</Typography>
            <Input variant="standard" type="email" name="email" value={formData.email} onChange={handleInputChange}  />
            {errors.email && <span className="text-red-500">{errors.email}</span>}
          </div>
          <div>
            <Typography tag="label" className="block text-sm font-bold text-gray-700">Mobile No:</Typography>
            <Input variant="standard" type="tel" name="mobileNo" value={formData.mobileNo} onChange={handleInputChange}  />
            {errors.mobileNo && <span className="text-red-500">{errors.mobileNo}</span>}
          </div>
          <div>
            <Typography tag="label" className="block text-sm font-bold text-gray-700">Username:</Typography>
            <Input variant="standard" type="text" name="username" value={formData.username} onChange={handleInputChange}  />
            {errors.username && <span className="text-red-500">{errors.username}</span>}
          </div>
          <div>
            <Typography tag="label" className="block text-sm font-bold text-gray-700">Password:</Typography>
            <Input variant="standard" type="password" name="password" value={formData.password} onChange={handleInputChange}  />
            {errors.password && <span className="text-red-500">{errors.password}</span>}
          </div>
          <div>
            <Typography tag="label" className="block text-sm font-bold text-gray-700">Security Question:</Typography>
            <select name="securityQuestion" value={formData.securityQuestion} onChange={handleInputChange} className="form-select">
              <option value="">Select Security Question</option>
              <option value="favFood">Favorite Food</option>
              <option value="favHobby">Favorite Hobby</option>
              <option value="favSport">Favorite Sport</option>
            </select>
            {errors.securityQuestion && <span className="text-red-500">{errors.securityQuestion}</span>}
          </div>
          <div>
            <Typography tag="label" className="block text-sm font-bold text-gray-700">Answer:</Typography>
            <Input variant="standard" type="text" name="answer" value={formData.answer} onChange={handleInputChange}  />
            {errors.answer && <span className="text-red-500">{errors.answer}</span>}
          </div>
        </div>
        <div className="text-center mt-4">
          <Button type="submit" color="green"  size="lg" className="me-2">Register Member</Button>
          <Button type="button" color="blue"  size="lg" onClick={handleBack}>Back</Button>
        </div>
      </form>
    </div>
  );
};

export default OMember;
