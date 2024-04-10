import React from 'react';
import { Input, Button, Typography } from '@material-tailwind/react';
import FOMember from '../functions/FOMember';
import Footer from '../../../Footer/Footer';

const OMember = () => {
  const { formData, errors, handleInputChange, handleSubmit } = FOMember();

  return (
    <>
    <div className="container mt-4 border border-gray-400 rounded p-4 pl-6 pr-6">
      <Typography variant='h3' className="text-center mb-4">Register Member</Typography>
      <form onSubmit={handleSubmit} className="mt-4">
        <table className="table table-bordered">
          <tbody>
            <tr>
              <td>
                <Typography className="form-label font-bold">Name:</Typography>
              </td>
              <td>
                <Input variant="standard" type="text" name="name" value={formData.name} onChange={handleInputChange} />
                {errors.name && <span className="text-red-500">{errors.name}</span>}
              </td>
            </tr>
            <tr>
              <td>
                <Typography className="form-label font-bold">Date of Birth:</Typography>
              </td>
              <td>
                <Input variant="standard" type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleInputChange} />
                {errors.dateOfBirth && <span className="text-red-500">{errors.dateOfBirth}</span>}
              </td>
            </tr>
            <tr>
              <td>
                <Typography className="form-label font-bold">Address:</Typography>
              </td>
              <td>
                <Input variant="standard" type="text" name="address" value={formData.address} onChange={handleInputChange} />
                {errors.address && <span className="text-red-500">{errors.address}</span>}
              </td>
            </tr>
            <tr>
              <td>
                <Typography className="form-label font-bold">Email:</Typography>
              </td>
              <td>
                <Input variant="standard" type="email" name="email" value={formData.email} onChange={handleInputChange} />
                {errors.email && <span className="text-red-500">{errors.email}</span>}
              </td>
            </tr>
            <tr>
              <td>
                <Typography className="form-label font-bold">Mobile No:</Typography>
              </td>
              <td>
                <Input variant="standard" type="tel" name="mobileNo" value={formData.mobileNo} onChange={handleInputChange} />
                {errors.mobileNo && <span className="text-red-500">{errors.mobileNo}</span>}
              </td>
            </tr>
            <tr>
              <td>
                <Typography className="form-label font-bold">Username:</Typography>
              </td>
              <td>
                <Input variant="standard" type="text" name="username" value={formData.username} onChange={handleInputChange} />
                {errors.username && <span className="text-red-500">{errors.username}</span>}
              </td>
            </tr>
            <tr>
              <td>
                <Typography className="form-label font-bold">Password:</Typography>
              </td>
              <td>
                <Input variant="standard" type="password" name="password" value={formData.password} onChange={handleInputChange} />
                {errors.password && <span className="text-red-500">{errors.password}</span>}
              </td>
            </tr>
            <tr>
              <td>
                <Typography className="form-label font-bold">Security Question:</Typography>
              </td>
              <td>
                <select name="securityQuestion" value={formData.securityQuestion} onChange={handleInputChange} className="form-select">
                  <option value="">Select Security Question</option>
                  <option value="favFood">Favorite Food</option>
                  <option value="favHobby">Favorite Hobby</option>
                  <option value="favSport">Favorite Sport</option>
                </select>
                {errors.securityQuestion && <span className="text-red-500">{errors.securityQuestion}</span>}
              </td>
            </tr>
            <tr>
              <td>
                <Typography className="form-label font-bold">Answer:</Typography>
              </td>
              <td>
                <Input variant="standard" type="text" name="answer" value={formData.answer} onChange={handleInputChange} />
                {errors.answer && <span className="text-red-500">{errors.answer}</span>}
              </td>
            </tr>
          </tbody>
        </table>
        <div className="text-center mt-4">
          <Button type="submit" color="green"  size="lg" className="me-2">Register Member</Button>
          <Button color="light-blue" size="lg" className="ms-2" onClick={() => window.history.back()}>Back</Button>
        </div>
      </form>
    </div>
    <Footer/>
    </>
  );
};

export default OMember;
