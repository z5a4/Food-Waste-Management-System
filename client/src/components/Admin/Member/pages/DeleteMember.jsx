import React from 'react';
import FDeleteMember from '../functions/FDeleteMember';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

function DeleteMember() {
  const { member, handleDelete } = FDeleteMember();

  if (!member) {
    return <p>Member not found</p>;
  }

  return (
    <div className="container mt-5">
      <h1 className="text-center">Delete Member</h1>
      <form onSubmit={handleDelete} className="mt-4">
        <table className="table table-bordered">
          <tbody className='text-center'>
            <tr>
              <th>Name:</th>
              <td><input type="text" value={member.name} disabled className="form-control" /></td>
            </tr>
            <tr>
              <th>Email:</th>
              <td><input type="email" value={member.email} disabled className="form-control" /></td>
            </tr>
            <tr>
              <th>Mobile No:</th>
              <td><input type="text" value={member.mobileNo} disabled className="form-control" /></td>
            </tr>
            <tr>
              <th>Address:</th>
              <td><input type="text" value={member.address} disabled className="form-control" /></td>
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

export default DeleteMember;
