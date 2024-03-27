import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Input, Button } from '@material-tailwind/react';
import FOMember from '../functions/FOMember';

const OMember = () => {
  const { formData, errors, handleInputChange, handleSubmit } = FOMember();
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/adminviewmember');
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Register Member</h1>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="form-label">Name:</label>
            <Input type="text" name="name" value={formData.name} onChange={handleInputChange} color="light-blue" />
            {errors.name && <span className="text-danger">{errors.name}</span>}
          </div>
          <div>
            <label htmlFor="dateOfBirth" className="form-label">Date of Birth:</label>
            <Input type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleInputChange} color="light-blue" />
            {errors.dateOfBirth && <span className="text-danger">{errors.dateOfBirth}</span>}
          </div>
          <div>
            <label htmlFor="address" className="form-label">Address:</label>
            <Input type="text" name="address" value={formData.address} onChange={handleInputChange} color="light-blue" />
            {errors.address && <span className="text-danger">{errors.address}</span>}
          </div>
          <div>
            <label htmlFor="email" className="form-label">Email:</label>
            <Input type="email" name="email" value={formData.email} onChange={handleInputChange} color="light-blue" />
            {errors.email && <span className="text-danger">{errors.email}</span>}
          </div>
          <div>
            <label htmlFor="mobileNo" className="form-label">Mobile No:</label>
            <Input type="tel" name="mobileNo" value={formData.mobileNo} onChange={handleInputChange} color="light-blue" />
            {errors.mobileNo && <span className="text-danger">{errors.mobileNo}</span>}
          </div>
          <div>
            <label htmlFor="username" className="form-label">Username:</label>
            <Input type="text" name="username" value={formData.username} onChange={handleInputChange} color="light-blue" />
            {errors.username && <span className="text-danger">{errors.username}</span>}
          </div>
          <div>
            <label htmlFor="password" className="form-label">Password:</label>
            <Input type="password" name="password" value={formData.password} onChange={handleInputChange} color="light-blue" />
            {errors.password && <span className="text-danger">{errors.password}</span>}
          </div>
          <div>
            <label htmlFor="securityQuestion" className="form-label">Security Question:</label>
            <select name="securityQuestion" value={formData.securityQuestion} onChange={handleInputChange} className="form-select">
              <option value="">Select Security Question</option>
              <option value="favFood">Favorite Food</option>
              <option value="favHobby">Favorite Hobby</option>
              <option value="favSport">Favorite Sport</option>
            </select>
            {errors.securityQuestion && <span className="text-danger">{errors.securityQuestion}</span>}
          </div>
          <div>
            <label htmlFor="answer" className="form-label">Answer:</label>
            <Input type="text" name="answer" value={formData.answer} onChange={handleInputChange} color="light-blue" />
            {errors.answer && <span className="text-danger">{errors.answer}</span>}
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
