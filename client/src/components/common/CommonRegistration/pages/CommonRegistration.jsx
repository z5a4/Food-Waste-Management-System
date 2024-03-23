import React from 'react';
import { useNavigate } from 'react-router-dom';
import FCommonRegistrationForm from '../functions/FCommonRegistration';
import 'bootstrap/dist/css/bootstrap.min.css';

const CommonRegistrationForm = () => {
  const { formData, handleChange, handleSubmit } = FCommonRegistrationForm();
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/adminviewfarmer');
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Register..</h1>
      <form onSubmit={handleSubmit} className="container mt-4">
        <table className="table border-only-outside rounded">
          <tbody>
          <tr>
                        <td><label htmlFor="category">Category:</label></td>
                        <td>
                            <select id="category" name="category" value={formData.category} onChange={handleChange} required>
                                <option value="">Select Category</option>
                                <option value="Hotel">Hotel</option>
                                <option value="Hostel">Hostel</option>
                                <option value="Farmer">Farmer</option>
                                <option value="Others">Others</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td><label htmlFor="organisationName">Organisation Name:</label></td>
                        <td><input type="text" id="organisationName" name="organisationName" value={formData.organisationName} onChange={handleChange} /></td>
                    </tr>
                    <tr>
                        <td><label htmlFor="regid">Registration ID:</label></td>
                        <td><input type="text" id="regid" name="regid" value={formData.regid} onChange={handleChange} required /></td>
                    </tr>
                    <tr>
                        <td><label htmlFor="name">Name:</label></td>
                        <td><input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required /></td>
                    </tr>
                    <tr>
                        <td><label htmlFor="address">Address:</label></td>
                        <td><input type="text" id="address" name="address" value={formData.address} onChange={handleChange} required /></td>
                    </tr>
                    <tr>
                        <td><label htmlFor="dateOfBirth">Date of Birth:</label></td>
                        <td><input type="date" id="dateOfBirth" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} required /></td>
                    </tr>
                    <tr>
                        <td><label htmlFor="email">Email:</label></td>
                        <td><input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required /></td>
                    </tr>
                    <tr>
                        <td><label htmlFor="mobileNo">Mobile Number:</label></td>
                        <td><input type="tel" id="mobileNo" name="mobileNo" value={formData.mobileNo} onChange={handleChange} required /></td>
                    </tr>
                    <tr>
                        <td><label htmlFor="username">Username:</label></td>
                        <td><input type="text" id="username" name="username" value={formData.username} onChange={handleChange} required /></td>
                    </tr>
                    <tr>
                        <td><label htmlFor="password">Password:</label></td>
                        <td><input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required /></td>
                    </tr>
            <tr>
              <th>
                <label htmlFor="securityQuestion" className="form-label">Security Question:</label>
                <select name="securityQuestion" value={formData.securityQuestion} onChange={handleChange} className="form-select">
                  <option value="">Select Security Question</option>
                  <option value="favFood">Favorite Food</option>
                  <option value="favHobby">Favorite Hobby</option>
                  <option value="favSport">Favorite Sport</option>
                </select>
                </th>
              <th>
                <label htmlFor="answer" className="form-label">Answer:</label>
                <input type="text" name="answer" value={formData.answer} onChange={handleChange} className="form-control" />
                </th>
            </tr>
                    </tbody>
        </table>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CommonRegistrationForm;
