import React from 'react';
import FDeleteBiogas from '../functions/FDeleteBiogas';
import 'bootstrap/dist/css/bootstrap.min.css';

function DeleteBiogas() {
  const { biogas, handleDelete } = FDeleteBiogas();

  if (!biogas) {
    return <p>Biogas not found or missing information.</p>;
  }

  return (
    <div className="container mt-5"> 
      <h1 className="text-center">Delete biogas</h1>
      <form onSubmit={handleDelete} className='mt-4'>
        <table className="table table-bordered">
          <tbody className='text-center'>
            <tr>
              <th><label>Biogas ID :</label></th>
              <th><input type="text" value={biogas.biogasId} disabled className="form-control" /></th>
            </tr>
            <tr>
              <th><label>Name:</label></th>
              <th><input type="text" value={biogas.biogasName} disabled className="form-control" /></th>
            </tr>
            <tr>
              <th><label>Email:</label></th>
              <th><input type="text" value={biogas.biogasEmail} disabled className="form-control" /></th>
            </tr>
            <tr>
              <th><label>Mobile No:</label></th>
              <th><input type="text" value={biogas.biogasMobileNo} disabled className="form-control" /></th>
            </tr>
            <tr>
              <th><label>Address:</label></th>
              <th><input type="text" value={biogas.biogasAddress} disabled className="form-control" /></th>
            </tr>
            <tr>
              <th><label>Slurry Limit :</label></th>
              <th><input type="text" value={biogas.biogasSlurryLimit} disabled className="form-control" /></th>
            </tr>
            <tr>
              <th colSpan="2" className="text-center">
                <button type="submit" className="btn btn-danger btn-lg">Delete</button>
              </th>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
}

export default DeleteBiogas;
