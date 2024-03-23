import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import FUpdateFarmer from '../functions/FUpdateFarmer';
import 'bootstrap/dist/css/bootstrap.min.css';

function UpdateFarmer() {
  const location = useLocation();
  const navigate = useNavigate();
  const { farmer } = location.state;
  const { formData, handleChange, handleSubmit } = FUpdateFarmer(farmer, navigate);

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Edit Farmer Details..</h1>
      <form onSubmit={handleSubmit}>
        <table className="table table-bordered">
          <tbody className='text-center'>
            <tr>
              <th scope="row">Farmer Name:</th>
              <td>
                <input
                  type="text"
                  name="farmerName"
                  value={formData.farmerName}
                  onChange={handleChange}
                  className="form-control"
                />
              </td>
            </tr>
            <tr>
              <th scope="row">Email:</th>
              <td>
                <input
                  type="email"
                  name="farmerEmail"
                  value={formData.farmerEmail}
                  onChange={handleChange}
                  className="form-control"
                />
              </td>
            </tr>
            <tr>
              <th scope="row">Mobile No:</th>
              <td>
                <input
                  type="text"
                  name="farmerMobileNo"
                  value={formData.farmerMobileNo}
                  onChange={handleChange}
                  className="form-control"
                />
              </td>
            </tr>
            <tr>
              <th scope="row">Address:</th>
              <td>
                <input
                  type="text"
                  name="farmerAddress"
                  value={formData.farmerAddress}
                  onChange={handleChange}
                  className="form-control"
                />
              </td>
            </tr>
            <tr>
              <th scope="row">Username:</th>
              <td>
                <input
                  type="text"
                  name="farmerUsername"
                  value={formData.farmerUsername}
                  onChange={handleChange}
                  className="form-control"
                />
              </td>
            </tr>
            <tr>
              <th scope="row">Password:</th>
              <td>
                <input
                  type="password"
                  name="farmerPassword"
                  value={formData.farmerPassword}
                  onChange={handleChange}
                  className="form-control"
                />
              </td>
            </tr>
            <tr>
              <th scope="row">Security Question:</th>
              <td>
                <input
                  type="text"
                  name="farmerSecurityQuestion"
                  value={formData.farmerSecurityQuestion}
                  onChange={handleChange}
                  className="form-control"
                />
              </td>
            </tr>
            <tr>
              <th scope="row">Answer:</th>
              <td>
                <input
                  type="text"
                  name="farmerAnswer"
                  value={formData.farmerAnswer}
                  onChange={handleChange}
                  className="form-control"
                />
              </td>
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

export default UpdateFarmer;
