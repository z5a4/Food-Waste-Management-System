import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Input, Button, Typography } from '@material-tailwind/react';
import UserFMember from '../functions/UserFMember';
import UserNavbar from '../../UserNavbar';
import Footer from '../../../Footer/Footer';

const UserMember = () => {
  const { formData, errors, handleInputChange, handleSubmit } = UserFMember();
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/userviewmember');
  };

  return (
    <>
      <UserNavbar />
      <div className="container mt-4 border border-gray-400 rounded p-4 pl-6 pr-6">
        <Typography variant='h3' className="text-center mb-4">Register Member</Typography>
        <form onSubmit={handleSubmit}>
          <table className="table table-bordered">
            <tbody>
              <tr>
                <td className="form-label font-bold">Name:</td>
                <td>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    size="md"
                    placeholder="Name"
                    error={!!errors.name}
                    variant="standard"
                  />
                </td>
              </tr>
              <tr>
                <td className="form-label font-bold">Date of Birth:</td>
                <td>
                  <Input
                    type="date"
                    name="dateOfBirth"
                    value={formData.dateOfBirth}
                    onChange={handleInputChange}
                    size="md"
                    error={!!errors.dateOfBirth}
                    variant="standard"
                  />
                </td>
              </tr>
              <tr>
                <td className="form-label font-bold">Address:</td>
                <td>
                  <Input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    size="md"
                    placeholder="Address"
                    error={!!errors.address}
                    variant="standard"
                  />
                </td>
              </tr>
              <tr>
                <td className="form-label font-bold">Email:</td>
                <td>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    size="md"
                    placeholder="Email"
                    error={!!errors.email}
                    variant="standard"
                  />
                </td>
              </tr>
              <tr>
                <td className="form-label font-bold">Mobile No:</td>
                <td>
                  <Input
                    type="tel"
                    name="mobileNo"
                    value={formData.mobileNo}
                    onChange={handleInputChange}
                    size="md"
                    placeholder="Mobile No"
                    error={!!errors.mobileNo}
                    variant="standard"
                  />
                </td>
              </tr>
              <tr>
                <td className="form-label font-bold">Username:</td>
                <td>
                  <Input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleInputChange}
                    size="md"
                    placeholder="Username"
                    error={!!errors.username}
                    variant="standard"
                  />
                </td>
              </tr>
              <tr>
                <td className="form-label font-bold">Password:</td>
                <td>
                  <Input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    size="md"
                    placeholder="Password"
                    error={!!errors.password}
                    variant="standard"
                  />
                </td>
              </tr>
              <tr>
                <td className="form-label font-bold">Security Question:</td>
                <td>
                  <select
                    name="securityQuestion"
                    value={formData.securityQuestion}
                    onChange={handleInputChange}
                    className="select w-full border mt-1"
                  >
                    <option value="">Select Security Question</option>
                    <option value="favFood">Favorite Food</option>
                    <option value="favHobby">Favorite Hobby</option>
                    <option value="favSport">Favorite Sport</option>
                  </select>
                  {errors.securityQuestion && <span className="text-red-500">{errors.securityQuestion}</span>}
                </td>
              </tr>
              <tr>
                <td className="form-label font-bold">Answer:</td>
                <td>
                  <Input
                    type="text"
                    name="answer"
                    value={formData.answer}
                    onChange={handleInputChange}
                    size="md"
                    placeholder="Answer"
                    error={!!errors.answer}
                    variant="standard"
                  />
                </td>
              </tr>
            </tbody>
          </table>
          <div className="text-center mt-4">
            <Button type="submit" color="green" size="md" className="me-2" onClick={handleSubmit}>
              Register Member
            </Button>
            <Button type="button" color="blue" size="md" onClick={handleBack}>
              Back
            </Button>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default UserMember;
