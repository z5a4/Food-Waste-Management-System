import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import FUpdateReg from '../functions/FUpdateReg';
import { Input, Button, Typography } from '@material-tailwind/react';
import AdminNavbar from '../../AdminNavbar';
import Footer from '../../../Footer/Footer';

function UpdateReg() {
  const location = useLocation();
  const navigate = useNavigate();
  const { registration } = location.state;
  const { formData, handleChange, handleSubmit } = FUpdateReg(registration, navigate);

  return (
    <>
      <AdminNavbar />
      <div className="container mt-5">
        <Typography variant='h3' className="text-center">Update Registration</Typography>
        <form onSubmit={handleSubmit} className="mt-4">
          <table className="table table-bordered">
            <tbody className='text-center'>
            <tr>
                <th>ID:</th>
                <td>
                  <Input variant='standard' type="text" name="regid" value={formData.regid} onChange={handleChange} />
                </td>
              </tr>
              <tr>
                <th>Category:</th>
                <td>
                  <Input variant='standard' type="text" name="category" value={formData.category} onChange={handleChange} />
                </td>
              </tr>
              <tr>
                <th>Organisation Name:</th>
                <td>
                  <Input variant='standard' type="text" name="organisationName" value={formData.organisationName} onChange={handleChange} />
                </td>
              </tr>
              
              <tr>
                <th>Name:</th>
                <td>
                  <Input variant='standard' type="text" name="name" value={formData.name} onChange={handleChange} />
                </td>
              </tr>
              <tr>
                <th>Email:</th>
                <td>
                  <Input variant='standard' type="email" name="email" value={formData.email} onChange={handleChange} />
                </td>
              </tr>
              <tr>
                <th>Mobile No:</th>
                <td>
                  <Input variant='standard' type="text" name="mobileNo" value={formData.mobileNo} onChange={handleChange} />
                </td>
              </tr>
              <tr>
                <th>Address:</th>
                <td>
                  <Input variant='standard' type="text" name="address" value={formData.address} onChange={handleChange} />
                </td>
              </tr>
              <tr>
                <th>Date of Birth:</th>
                <td>
                  <Input variant='standard' type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} />
                </td>
              </tr>
              <tr>
                <th>Username:</th>
                <td>
                  <Input variant='standard' type="text" name="username" value={formData.username} onChange={handleChange} />
                </td>
              </tr>
              <tr>
                <th>Password:</th>
                <td>
                  <Input variant='standard' type="password" name="password" value={formData.password} onChange={handleChange} />
                </td>
              </tr>
              <tr>
                <th>Security Question:</th>
                <td>
                  <Input variant='standard' type="text" name="securityQuestion" value={formData.securityQuestion} onChange={handleChange} />
                </td>
              </tr>
              <tr>
                <th>Answer:</th>
                <td>
                  <Input variant='standard' type="text" name="answer" value={formData.answer} onChange={handleChange} />
                </td>
              </tr>
            </tbody>
          </table>
          <div className="text-center">
            <Button type="submit" color="green" size="lg">Update</Button>
            <Button color="light-blue" size="lg" className="ms-2" onClick={() => window.history.back()}>Back</Button>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default UpdateReg;
