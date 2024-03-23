import React from 'react';
import { useNavigate } from 'react-router-dom';
import FTransporterForm from '../functions/FTransporterForm';
import 'bootstrap/dist/css/bootstrap.min.css';

const TransporterForm = () => {
  const { formData, errors, handleInputChange, handleSubmit } = FTransporterForm();
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/adminviewtransporter');
  };


  return (
    <div className="container mt-4">
    <h1 className="text-center mb-4">Become our transporter..</h1>
    <form onSubmit={handleSubmit} className="container mt-4">
      <table className="table border-only-outside rounded">
        <tbody>
          <tr>
            <th>
              <label htmlFor="transporterId" className="form-label">Transporter ID:</label>
              <input
                type="text"
                className="form-control"
                id="transporterId"
                name="transporterId"
                value={formData.transporterId}
                onChange={handleInputChange}
              />
              {errors.transporterId && <span className="text-danger">{errors.transporterId}</span>}
            </th>
            <th>
              <label htmlFor="vehicleNo" className="form-label">Vehicle No:</label>
              <input
                type="text"
                className="form-control"
                id="vehicleNo"
                name="vehicleNo"
                value={formData.vehicleNo}
                onChange={handleInputChange}
              />
              {errors.vehicleNo && <span className="text-danger">{errors.vehicleNo}</span>}
            </th>
          </tr>
          <tr>
            <th>
              <label htmlFor="vehicleType" className="form-label">Vehicle Type:</label>
              <input
                type="text"
                className="form-control"
                id="vehicleType"
                name="vehicleType"
                value={formData.vehicleType}
                onChange={handleInputChange}
              />
              {errors.vehicleType && <span className="text-danger">{errors.vehicleType}</span>}
            </th>
            <th>
              <label htmlFor="driverName" className="form-label">Driver Name:</label>
              <input
                type="text"
                className="form-control"
                id="driverName"
                name="driverName"
                value={formData.driverName}
                onChange={handleInputChange}
              />
              {errors.driverName && <span className="text-danger">{errors.driverName}</span>}
            </th>
          </tr>
          <tr>
            <th>
              <label htmlFor="licenseNo" className="form-label">License No:</label>
              <input
                type="text"
                className="form-control"
                id="licenseNo"
                name="licenseNo"
                value={formData.licenseNo}
                onChange={handleInputChange}
              />
              {errors.licenseNo && <span className="text-danger">{errors.licenseNo}</span>}
            </th>
            <th>
              <label htmlFor="mobileNo" className="form-label">Mobile No:</label>
              <input
                type="text"
                className="form-control"
                id="mobileNo"
                name="mobileNo"
                value={formData.mobileNo}
                onChange={handleInputChange}
              />
              {errors.mobileNo && <span className="text-danger">{errors.mobileNo}</span>}
            </th>
          </tr>
          <tr>
            <th>
              <label htmlFor="email" className="form-label">Email:</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
              {errors.email && <span className="text-danger">{errors.email}</span>}
            </th>
            <th>
              <label htmlFor="rentRate" className="form-label">Rent Rate:</label>
              <input
                type="text"
                className="form-control"
                id="rentRate"
                name="rentRate"
                value={formData.rentRate}
                onChange={handleInputChange}
              />
              {errors.rentRate && <span className="text-danger">{errors.rentRate}</span>}
            </th>
          </tr>
          <tr>
            <th colSpan="2" className="text-center">
              <button type="submit" className="btn btn-danger btn-lg me-2" onClick={handleSubmit}>Create Transporter</button>
              <button type="button" className="btn btn-secondary btn-lg" onClick={handleBack}>Back</button>
            </th>
          </tr>
        </tbody>
      </table>
    </form>
    </div>
  );
};

export default TransporterForm;
