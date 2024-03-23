import React from 'react';
import FDeleteVolunteer from '../functions/FDeleteVolunteer';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

function DeleteVolunteer() {
  const { volunteer, handleDelete } = FDeleteVolunteer();

  if (!volunteer) {
    return <p>Volunteer not found</p>;
  }

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Delete Volunteer</h1>
      <form onSubmit={handleDelete}>
        <table className="table table-bordered">
          <tbody className='text-center'>
            <tr>
              <th>ID:</th>
              <td><input type="text" value={volunteer.id} disabled className="form-control" /></td>
            </tr>
            <tr>
              <th>Name:</th>
              <td><input type="text" value={volunteer.name} disabled className="form-control" /></td>
            </tr>
            <tr>
              <th>Date of Birth:</th>
              <td><input type="text" value={volunteer.dateOfBirth} disabled className="form-control" /></td>
            </tr>
            <tr>
              <th>Address:</th>
              <td><input type="text" value={volunteer.address} disabled className="form-control" /></td>
            </tr>
            <tr>
              <th>Email:</th>
              <td><input type="text" value={volunteer.email} disabled className="form-control" /></td>
            </tr>
            <tr>
              <th>Mobile No:</th>
              <td><input type="text" value={volunteer.mobileNo} disabled className="form-control" /></td>
            </tr>
            <tr>
              <th>Username:</th>
              <td><input type="text" value={volunteer.username} disabled className="form-control" /></td>
            </tr>
            <tr>
              <th>Password:</th>
              <td><input type="password" value={volunteer.password} disabled className="form-control" /></td>
            </tr>
            <tr>
              <th>Security Question:</th>
              <td><input type="text" value={volunteer.securityQuestion} disabled className="form-control" /></td>
            </tr>
            <tr>
              <th>Answer:</th>
              <td><input type="text" value={volunteer.answer} disabled className="form-control" /></td>
            </tr>
            <tr>
              <td colSpan="2" className="text-center">
                <button type="submit" className="btn btn-danger">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
}

export default DeleteVolunteer;
