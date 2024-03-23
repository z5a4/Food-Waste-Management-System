import React from 'react';
import FDeleteFarmer from '../functions/FDeleteFarmer';
import 'bootstrap/dist/css/bootstrap.min.css';

function DeleteFarmer() {
  const { farmer, handleDelete } = FDeleteFarmer();

  if (!farmer) {
    return <p>Farmer not found</p>;
  }

  return (
    <div className="container mt-4">
      <h1 className="text-center">Delete Farmer</h1>
      <form onSubmit={handleDelete} className="mt-4">
        <table className="table table-bordered">
          <tbody className='text-center'>
            <tr>
              <th>Farmer ID:</th>
              <td>
                <input type="text" value={farmer.farmerId} disabled className="form-control" />
              </td>
            </tr>
            <tr>
              <th>Farmer Name:</th>
              <td>
                <input type="text" value={farmer.farmerName} disabled className="form-control" />
              </td>
            </tr>
            <tr>
              <th>Email:</th>
              <td>
                <input type="email" value={farmer.farmerEmail} disabled className="form-control" />
              </td>
            </tr>
            <tr>
              <th>Mobile No:</th>
              <td>
                <input type="text" value={farmer.farmerMobileNo} disabled className="form-control" />
              </td>
            </tr>
            <tr>
              <th>Address:</th>
              <td>
                <input type="text" value={farmer.farmerAddress} disabled className="form-control" />
              </td>
            </tr>
            <tr>
              <th>Username:</th>
              <td>
                <input type="text" value={farmer.farmerUsername} disabled className="form-control" />
              </td>
            </tr>
            <tr>
              <th>Password:</th>
              <td>
                <input type="password" value={farmer.farmerPassword} disabled className="form-control" />
              </td>
            </tr>
            <tr>
              <th>Security Question:</th>
              <td>
                <input type="text" value={farmer.farmerSecurityQuestion} disabled className="form-control" />
              </td>
            </tr>
            <tr>
              <th>Answer:</th>
              <td>
                <input type="text" value={farmer.farmerAnswer} disabled className="form-control" />
              </td>
            </tr>
            <tr>
              <td colSpan="2" className="text-center">
                <button type="submit" className="btn btn-danger btn-lg">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
}

export default DeleteFarmer;
