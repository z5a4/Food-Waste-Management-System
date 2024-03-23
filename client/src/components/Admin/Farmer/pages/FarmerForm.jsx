import React from 'react';
import { useNavigate } from 'react-router-dom';
import FFarmerForm from '../functions/FFarmerForm';
import 'bootstrap/dist/css/bootstrap.min.css';

const FarmerForm = () => {
  const { formData, errors, handleInputChange, handleSubmit } = FFarmerForm();
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
              <th>
                <label htmlFor="farmerId" className="form-label">Farmer ID:</label>
                <input
                  type="text"
                  className="form-control"
                  id="farmerId"
                  name="farmerId"
                  value={formData.farmerId}
                  onChange={handleInputChange}
                />
                {errors.farmerId && <span className="text-danger">{errors.farmerId}</span>}
              </th>
              <th>
                <label htmlFor="farmerName" className="form-label">Farmer Name:</label>
                <input
                  type="text"
                  className="form-control"
                  id="farmerName"
                  name="farmerName"
                  value={formData.farmerName}
                  onChange={handleInputChange}
                />
                {errors.farmerName && <span className="text-danger">{errors.farmerName}</span>}
              </th>
            </tr>
            <tr>
              <th>
                <label htmlFor="farmerMobileNo" className="form-label">Farmer Mobile No:</label>
                <input
                  type="text"
                  className="form-control"
                  id="farmerMobileNo"
                  name="farmerMobileNo"
                  value={formData.farmerMobileNo}
                  onChange={handleInputChange}
                />
                {errors.farmerMobileNo && <span className="text-danger">{errors.farmerMobileNo}</span>}
              </th>
              <th>
                <label htmlFor="farmerEmail" className="form-label">Farmer Email:</label>
                <input
                  type="email"
                  className="form-control"
                  id="farmerEmail"
                  name="farmerEmail"
                  value={formData.farmerEmail}
                  onChange={handleInputChange}
                />
                {errors.farmerEmail && <span className="text-danger">{errors.farmerEmail}</span>}
              </th>
            </tr>
            <tr>
  <th colSpan="2">
    <label htmlFor="farmerAddress" className="form-label">Farmer Address:</label>
    <input
      type="text"
      className="form-control"
      id="farmerAddress"
      name="farmerAddress"
      value={formData.farmerAddress}
      onChange={handleInputChange}
      style={{ width: '100%' }}
    />
    {errors.farmerAddress && <span className="text-danger">{errors.farmerAddress}</span>}
  </th>
</tr>

            <tr>
              <th>
                <label htmlFor="farmerUsername" className="form-label">Farmer Username:</label>
                <input
                  type="text"
                  className="form-control"
                  id="farmerUsername"
                  name="farmerUsername"
                  value={formData.farmerUsername}
                  onChange={handleInputChange}
                />
                {errors.farmerUsername && <span className="text-danger">{errors.farmerUsername}</span>}
              </th>
              <th>
                <label htmlFor="farmerPassword" className="form-label">Farmer Password:</label>
                <input
                  type="password"
                  className="form-control"
                  id="farmerPassword"
                  name="farmerPassword"
                  value={formData.farmerPassword}
                  onChange={handleInputChange}
                />
                {errors.farmerPassword && <span className="text-danger">{errors.farmerPassword}</span>}
              </th>
            </tr>
            <tr>
              <th>
                <label htmlFor="farmerSecurityQuestion" className="form-label">Farmer Security Question:</label>
                <select
                  className="form-select"
                  id="farmerSecurityQuestion"
                  name="farmerSecurityQuestion"
                  value={formData.farmerSecurityQuestion}
                  onChange={handleInputChange}
                >
                  <option value="">Select Security Question</option>
                  <option value="favFood">Favorite Food</option>
                  <option value="favHobby">Favorite Hobby</option>
                  <option value="favSport">Favorite Sport</option>
                </select>
                {errors.farmerSecurityQuestion && <span className="text-danger">{errors.farmerSecurityQuestion}</span>}
              </th>
              <th>
                <label htmlFor="farmerAnswer" className="form-label">Farmer Answer:</label>
                <input
                  type="text"
                  className="form-control"
                  id="farmerAnswer"
                  name="farmerAnswer"
                  value={formData.farmerAnswer}
                  onChange={handleInputChange}
                />
                {errors.farmerAnswer && <span className="text-danger">{errors.farmerAnswer}</span>}
              </th>
            </tr>
            <tr>
              <td colSpan="2" className="text-center">
                <button type="submit" className="btn btn-danger btn-lg me-2" onClick={handleSubmit}>Confirm</button>
                <button type="button" className="btn btn-secondary btn-lg" onClick={handleBack}>Back</button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
};

export default FarmerForm;
