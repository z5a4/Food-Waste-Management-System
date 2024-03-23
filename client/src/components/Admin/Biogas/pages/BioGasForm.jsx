import React from 'react';
import { useNavigate } from 'react-router-dom';
import FBioGasForm from '../functions/FBioGasForm';
import 'bootstrap/dist/css/bootstrap.min.css';

const BioGasForm = () => {
  const { formData, errors, handleInputChange, handleSubmit } = FBioGasForm();
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/adminviewbiogas');
  };

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Create Biogas</h1>
      <form onSubmit={handleSubmit}>
        <table className="table border-only-outside">
          <tbody>
            <tr>
              <th>
                <label htmlFor="biogasId">Biogas ID:</label>
                <input
                  type="text"
                  name="biogasId"
                  id="biogasId"
                  className="form-control"
                  value={formData.biogasId}
                  onChange={handleInputChange}
                />
                {errors.biogasId && <span className="text-danger">{errors.biogasId}</span>}
                </th>
              <th>
                <label htmlFor="biogasName">Biogas Name:</label>
                <input
                  type="text"
                  name="biogasName"
                  id="biogasName"
                  className="form-control"
                  value={formData.biogasName}
                  onChange={handleInputChange}
                />
                {errors.biogasName && <span className="text-danger">{errors.biogasName}</span>}
              </th>
            </tr>
            <tr>
              <th>
                <label htmlFor="biogasAddress">Biogas Address:</label>
                <input
                  type="text"
                  name="biogasAddress"
                  id="biogasAddress"
                  className="form-control"
                  value={formData.biogasAddress}
                  onChange={handleInputChange}
                />
                {errors.biogasAddress && <span className="text-danger">{errors.biogasAddress}</span>}
              </th>
              <th>
                <label htmlFor="biogasMobileNo">Biogas Mobile No:</label>
                <input
                  type="text"
                  name="biogasMobileNo"
                  id="biogasMobileNo"
                  className="form-control"
                  value={formData.biogasMobileNo}
                  onChange={handleInputChange}
                />
                {errors.biogasMobileNo && <span className="text-danger">{errors.biogasMobileNo}</span>}
              </th>
            </tr>
            <tr>
              <th>
                <label htmlFor="biogasEmail">Biogas Email:</label>
                <input
                  type="email"
                  name="biogasEmail"
                  id="biogasEmail"
                  className="form-control"
                  value={formData.biogasEmail}
                  onChange={handleInputChange}
                />
                {errors.biogasEmail && <span className="text-danger">{errors.biogasEmail}</span>}
              </th>
              <th>
                <label htmlFor="biogasSlurryLimit">Biogas Slurry Limit:</label>
                <input
                  type="text"
                  name="biogasSlurryLimit"
                  id="biogasSlurryLimit"
                  className="form-control"
                  value={formData.biogasSlurryLimit}
                  onChange={handleInputChange}
                />
                {errors.biogasSlurryLimit && <span className="text-danger">{errors.biogasSlurryLimit}</span>}
              </th>
            </tr>
            <tr>
              <td colSpan="2" className="text-center">
                <button type="submit" className="btn btn-danger btn-lg me-2" onClick={handleSubmit}>Create Biogas</button>
                <button type="button" className="btn btn-secondary btn-lg" onClick={handleBack}>Back</button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
};

export default BioGasForm;
