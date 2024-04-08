import React from 'react';
import { useNavigate } from 'react-router-dom';
import FVolunteer from '../functions/FVolunteer';
import { Button, Input, Typography } from '@material-tailwind/react'; 
import AdminNavbar from '../../AdminNavbar';
import Footer from '../../../Footer/Footer';


const Volunteer = () => {
  const { formData, errors, handleInputChange, handleSubmit } = FVolunteer();
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/adminviewvolunteer');
  };

  return (
    <>
    <AdminNavbar/>
    <div className="container mt-4 border border-gray-400 rounded p-4 pl-6 pr-6">
      <Typography variant='h3' className="text-center mb-4">Register Volunteer</Typography>
      <form onSubmit={handleSubmit}>
        <table className="table table-bordered">
          <tbody>
            <tr>
              <td>
                <div className="mb-3">
                  <label htmlFor="volunteerid" className="font-bold form-label">VolunteerId:</label>
                </div>
              </td>
              <td>
                <div className="mb-3">
                  <Input variant='standard' type="text" name="volunteerId" value={formData.volunteerId} onChange={handleInputChange} placeholder="Enter Volunteer ID" />
                  {errors.name && <span className="text-red-500">{errors.volunteerId}</span>}
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="mb-3">
                  <label htmlFor="name" className="font-bold form-label">Volunteer Name:</label>
                </div>
              </td>
              <td>
                <div className="mb-3">
                  <Input variant='standard' type="text" name="volunteerName" value={formData.volunteerName} onChange={handleInputChange} placeholder="Enter Volunteer Name" />
                  {errors.name && <span className="text-red-500">{errors.volunteerName}</span>}
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="mb-3">
                  <label htmlFor="dateOfBirth" className="font-bold form-label">Date of Birth:</label>
                </div>
              </td>
              <td>
                <div className="mb-3">
                  <Input variant='standard' type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleInputChange} placeholder="Select Date of Birth" />
                  {errors.dateOfBirth && <span className="text-red-500">{errors.dateOfBirth}</span>}
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="mb-3">
                  <label htmlFor="address" className="font-bold form-label">Address:</label>
                </div>
              </td>
              <td>
                <div className="mb-3">
                  <Input variant='standard' type="text" name="volunteeraddress" value={formData.volunteeraddress} onChange={handleInputChange} placeholder="Enter Address" />
                  {errors.address && <span className="text-red-500">{errors.address}</span>}
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="mb-3">
                  <label htmlFor="email" className="font-bold form-label">Email:</label>
                </div>
              </td>
              <td>
                <div className="mb-3">
                  <Input variant='standard' type="text" name="email" value={formData.email} onChange={handleInputChange} placeholder="Enter Email" />
                  {errors.email && <span className="text-red-500">{errors.email}</span>}
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="mb-3">
                  <label htmlFor="mobileNo" className="font-bold form-label">Mobile no:</label>
                </div>
              </td>
              <td>
                <div className="mb-3">
                  <Input variant='standard' type="text" name="volunteermobileNo" value={formData.volunteermobileNo} onChange={handleInputChange} placeholder="Enter Mobile No" />
                  {errors.mobileNo && <span className="text-red-500">{errors.volunteermobileNo}</span>}
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="mb-3">
                  <label htmlFor="username" className="font-bold form-label">Username:</label>
                </div>
              </td>
              <td>
                <div className="mb-3">
                  <Input variant='standard' type="text" name="username" value={formData.username} onChange={handleInputChange} placeholder="Enter Username" />
                  {errors.username && <span className="text-red-500">{errors.username}</span>}
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="mb-3">
                  <label htmlFor="password" className="font-bold form-label">Password:</label>
                </div>
              </td>
              <td>
                <div className="mb-3">
                  <Input variant='standard' type="password" name="password" value={formData.password} onChange={handleInputChange} placeholder="Enter Password" />
                  {errors.password && <span className="text-red-500">{errors.password}</span>}
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="mb-3">
                  <label htmlFor="securityQuestion" className="font-bold form-label">Security Question:</label>
                </div>
              </td>
              <td>
                <div className="mb-3">
                  <select name="securityQuestion" value={formData.securityQuestion} onChange={handleInputChange} className="form-select">
                    <option value="">Select Security Question</option>
                    <option value="favFood">Favorite Food</option>
                    <option value="favHobby">Favorite Hobby</option>
                    <option value="favSport">Favorite Sport</option>
                  </select>
                  {errors.securityQuestion && <span className="text-red-500">{errors.securityQuestion}</span>}
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="mb-3">
                  <label htmlFor="answer" className="font-bold form-label">Answer:</label>
                </div>
              </td>
              <td>
                <div className="mb-3">
                  <Input variant='standard' type="text" name="answer" value={formData.answer} onChange={handleInputChange} placeholder="Enter Answer" />
                  {errors.answer && <span className="text-red-500">{errors.answer}</span>}
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="text-center mt-4">
          <Button type="submit" color="green" size="lg" className="me-2">Register Volunteer</Button>
          <Button color="light-blue" size="lg" onClick={handleBack}>Back</Button>
        </div>
      </form>
    </div>
    <Footer/>
    </>
  );
};

export default Volunteer;
