import React from 'react';
import { useNavigate } from 'react-router-dom';
import FVolunteer from '../functions/FVolunteer';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const Volunteer = () => {
  const { formData, errors, handleInputChange, handleSubmit } = FVolunteer();
  const navigate = useNavigate();

  const handleBack  = () => {
    navigate('/adminviewvolunteers');
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Register Volunteer</h1>
      <form onSubmit={handleSubmit}>
        <table className="table border-only-outside">
          <tbody>
            <tr>
              <th>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Name:</label>
                  <input type="text" name="name" value={formData.name} onChange={handleInputChange} className="form-control" />
                  {errors.name && <span className="text-danger">{errors.name}</span>}
                </div>
              </th>
              <th>
                <div className="mb-3">
                  <label htmlFor="dateOfBirth" className="form-label">Date of Birth:</label>
                  <input type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleInputChange} className="form-control" />
                  {errors.dateOfBirth && <span className="text-danger">{errors.dateOfBirth}</span>}
                </div>
              </th>
            </tr>
            <tr>
              <th colSpan="2">
                <div className="mb-3">
                  <label htmlFor="address" className="form-label">Address:</label>
                  <input type="text" name="address" value={formData.address} onChange={handleInputChange} className="form-control" />
                  {errors.address && <span className="text-danger">{errors.address}</span>}
                </div>
              </th>
            </tr>
            <tr>
            <th>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email:</label>
                  <input type="text" name="email" value={formData.email} onChange={handleInputChange} className="form-control" />
                  {errors.email && <span className="text-danger">{errors.email}</span>}
                </div>
            </th>
            <th>
                <div className="mb-3">
                  <label htmlFor="mobileNo" className="form-label">Mobile no:</label>
                  <input type="text" name="mobileNo" value={formData.mobileNo} onChange={handleInputChange} className="form-control" />
                  {errors.mobileNo && <span className="text-danger">{errors.mobileNo}</span>}
                </div>
            </th>
            </tr>
            <tr>
              <th>
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">Username:</label>
                  <input type="text" name="username" value={formData.username} onChange={handleInputChange} className="form-control" />
                  {errors.username && <span className="text-danger">{errors.username}</span>}
                </div>
              </th>
              <th>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password:</label>
                  <input type="password" name="password" value={formData.password} onChange={handleInputChange} className="form-control" />
                  {errors.password && <span className="text-danger">{errors.password}</span>}
                </div>
              </th>
            </tr>
            <tr>
              <th>
                <div className="mb-3">
                  <label htmlFor="securityQuestion" className="form-label">Security Question:</label>
                  <select name="securityQuestion" value={formData.securityQuestion} onChange={handleInputChange} className="form-select">
                    <option value="">Select Security Question</option>
                    <option value="favFood">Favorite Food</option>
                    <option value="favHobby">Favorite Hobby</option>
                    <option value="favSport">Favorite Sport</option>
                  </select>
                  {errors.securityQuestion && <span className="text-danger">{errors.securityQuestion}</span>}
                </div>
              </th>
              <th>
                <div className="mb-3">
                  <label htmlFor="answer" className="form-label">Answer:</label>
                  <input type="text" name="answer" value={formData.answer} onChange={handleInputChange} className="form-control" />
                  {errors.answer && <span className="text-danger">{errors.answer}</span>}
                </div>
              </th>
            </tr>
          </tbody>
        </table>
        <div className="text-center">
          <button type="submit" className="btn btn-danger btn-lg me-2">Register Volunteer</button>
          <button type="button" className="btn btn-secondary btn-lg" onClick={handleBack}>Back</button>
        </div>
      </form>
    </div>
  );
};

export default Volunteer;