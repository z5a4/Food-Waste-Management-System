import React from 'react';
import FDeleteReg from '../functions/FDeleteReg';
import 'bootstrap/dist/css/bootstrap.min.css';

function DeleteReg() {
  const { registration, handleDelete } = FDeleteReg();

  if (!registration) {
    return <p>Farmer not found</p>;
  }

  return (
    <div className="container mt-5">
      <h1 className="text-center">Delete Registration</h1>
      <form onSubmit={handleDelete} className="mt-4">
        <table className="table table-bordered">
          <tbody className='text-center'>
            <tr>
              <th>Name:</th>
              <td><input type="text" value={registration.name} disabled className="form-control" /></td>
            </tr>
            <tr>
              <th>Email:</th>
              <td><input type="email" value={registration.email} disabled className="form-control" /></td>
            </tr>
            <tr>
              <th>Mobile No:</th>
              <td><input type="text" value={registration.mobileNo} disabled className="form-control" /></td>
            </tr>
            <tr>
              <th>Address:</th>
              <td><input type="text" value={registration.address} disabled className="form-control" /></td>
            </tr>
            <tr>
              <th>Date of Birth:</th>
              <td><input type="text" value={registration.dateOfBirth} disabled className="form-control" /></td>
            </tr>
            <tr>
              <th>Username:</th>
              <td><input type="text" value={registration.username} disabled className="form-control" /></td>
            </tr>
            <tr>
              <th>Password:</th>
              <td><input type="password" value={registration.password} disabled className="form-control" /></td>
            </tr>
            <tr>
              <th>Security Question:</th>
              <td><input type="text" value={registration.securityQuestion} disabled className="form-control" /></td>
            </tr>
            <tr>
              <th>Answer:</th>
              <td><input type="text" value={registration.answer} disabled className="form-control" /></td>
            </tr>
          </tbody>
        </table>
        <div className="text-center">
          <button type="submit" className="btn btn-danger btn-lg">Delete</button>
        </div>
      </form>
    </div>
  );
}

export default DeleteReg;
