import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import FUpdateBiogas from '../functions/FUpdateBiogas';
import 'bootstrap/dist/css/bootstrap.min.css';

function UpdateBiogas() {
  const location = useLocation();
  const navigate = useNavigate();
  const { biogas } = location.state;
  const { formData, handleChange, handleSubmit } = FUpdateBiogas(biogas, navigate);

  return (
    <div className="container mt-5"> 
      <h1 className="text-center mb-4">Update Biogas</h1>
      <form onSubmit={handleSubmit}>
        <table className="table table-bordered">
          <tbody className='text-center'>
            <tr>
              <th><label>Biogas ID:</label></th>
              <th><input type="text" name="biogasId" value={formData.biogasId} onChange={handleChange} className="form-control" /></th> {/* Add Bootstrap form-control class */}
            </tr>
            <tr>
              <th><label>Biogas Name:</label></th>
              <th><input type="text" name="biogasName" value={formData.biogasName} onChange={handleChange} className="form-control" /></th>
            </tr>
            <tr>
              <th><label>Email:</label></th>
              <th><input type="email" name="biogasEmail" value={formData.biogasEmail} onChange={handleChange} className="form-control" /></th>
            </tr>
            <tr>
              <th><label>Mobile No:</label></th>
              <th><input type="text" name="biogasMobileNo" value={formData.biogasMobileNo} onChange={handleChange} className="form-control" /></th>
            </tr>
            <tr>
              <th><label>Address:</label></th>
              <th><input type="text" name="biogasAddress" value={formData.biogasAddress} onChange={handleChange} className="form-control" /></th>
            </tr>
            <tr>
              <th><label>Slurry Limit :</label></th>
              <th><input type="text" name="biogasSlurryLimit" value={formData.biogasSlurryLimit} onChange={handleChange} className="form-control" /></th>
            </tr>
            <tr>
              <th colSpan="2" className="text-center">
                <button type="submit" className="btn btn-danger btn-lg">Confirm</button>
              </th>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
}

export default UpdateBiogas;
