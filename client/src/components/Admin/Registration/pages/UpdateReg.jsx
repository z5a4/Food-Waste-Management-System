import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import FUpdateReg from '../functions/FUpdateReg';
import 'bootstrap/dist/css/bootstrap.min.css';

function UpdateReg() {
  const location = useLocation();
  const navigate = useNavigate();
  const { registration } = location.state;
  const { formData, handleChange, handleSubmit } = FUpdateReg(registration, navigate);

  return (
    <div className="container mt-5">
      <h1 className="text-center">Update Registration</h1>
      <form onSubmit={handleSubmit} className="mt-4">
        <table className="table table-bordered">
          <tbody className='text-center'>
            <tr>
              <th>Name:</th>
              <td>
                <input type="text" name="name" value={formData.name} onChange={handleChange} className="form-control" />
              </td>
            </tr>
            <tr>
              <th>Email:</th>
              <td>
                <input type="email" name="email" value={formData.email} onChange={handleChange} className="form-control" />
              </td>
            </tr>
            <tr>
              <th>Mobile No:</th>
              <td>
                <input type="text" name="mobileNo" value={formData.mobileNo} onChange={handleChange} className="form-control" />
              </td>
            </tr>
            <tr>
              <th>Address:</th>
              <td>
                <input type="text" name="address" value={formData.address} onChange={handleChange} className="form-control" />
              </td>
            </tr>
            <tr>
              <th>Date of Birth:</th>
              <td>
                <input type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} className="form-control" />
              </td>
            </tr>
            <tr>
              <th>Username:</th>
              <td>
                <input type="text" name="username" value={formData.username} onChange={handleChange} className="form-control" />
              </td>
            </tr>
            <tr>
              <th>Password:</th>
              <td>
                <input type="password" name="password" value={formData.password} onChange={handleChange} className="form-control" />
              </td>
            </tr>
            <tr>
              <th>Security Question:</th>
              <td>
                <input type="text" name="securityQuestion" value={formData.securityQuestion} onChange={handleChange} className="form-control" />
              </td>
            </tr>
            <tr>
              <th>Answer:</th>
              <td>
                <input type="text" name="answer" value={formData.answer} onChange={handleChange} className="form-control" />
              </td>
            </tr>
          </tbody>
        </table>
        <div className="text-center">
          <button type="submit" className="btn btn-danger btn-lg">Update</button>
        </div>
      </form>
    </div>
  );
}

export default UpdateReg;
