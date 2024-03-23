import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import FUpdateVolunteer from '../functions/FUpdateVolunteer';
import 'bootstrap/dist/css/bootstrap.min.css';

function UpdateVolunteer() {
  const location = useLocation();
  const navigate = useNavigate();
  const { volunteer } = location.state;
  const { formData, handleChange, handleSubmit } = FUpdateVolunteer(volunteer, navigate);

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Edit Volunteer</h1>
      <form onSubmit={handleSubmit}>
        <table className="table table-bordered">
          <tbody className='text-center'>
            <tr>
              <th scope="row">ID:</th>
              <td><input type="text" name="id" value={formData.id} onChange={handleChange} className="form-control" /></td>
            </tr>
            <tr>
              <th scope="row">Name:</th>
              <td><input type="text" name="name" value={formData.name} onChange={handleChange} className="form-control" /></td>
            </tr>
            <tr>
              <th scope="row">Date of Birth:</th>
              <td><input type="text" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} className="form-control" /></td>
            </tr>
            <tr>
              <th scope="row">Address:</th>
              <td><input type="text" name="address" value={formData.address} onChange={handleChange} className="form-control" /></td>
            </tr>
            <tr>
              <th scope="row">Email:</th>
              <td><input type="text" name="email" value={formData.email} onChange={handleChange} className="form-control" /></td>
            </tr>
            <tr>
              <th scope="row">Mobile No:</th>
              <td><input type="text" name="mobileNo" value={formData.mobileNo} onChange={handleChange} className="form-control" /></td>
            </tr>
            <tr>
              <th scope="row">Username:</th>
              <td><input type="text" name="username" value={formData.username} onChange={handleChange} className="form-control" /></td>
            </tr>
            <tr>
              <th scope="row">Password:</th>
              <td><input type="password" name="password" value={formData.password} onChange={handleChange} className="form-control" /></td>
            </tr>
            <tr>
              <th scope="row">Security Question:</th>
              <td><input type="text" name="securityQuestion" value={formData.securityQuestion} onChange={handleChange} className="form-control" /></td>
            </tr>
            <tr>
              <th scope="row">Answer:</th>
              <td><input type="text" name="answer" value={formData.answer} onChange={handleChange} className="form-control" /></td>
            </tr>
            <tr>
              <td colSpan="2" className="text-center">
                <button type="submit" className="btn btn-danger btn-lg" onClick={handleSubmit}>Confirm</button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
}

export default UpdateVolunteer;
