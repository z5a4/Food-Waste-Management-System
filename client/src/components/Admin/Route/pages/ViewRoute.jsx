import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import FViewRoute from '../functions/FViewRoute';
import 'bootstrap/dist/css/bootstrap.min.css';

const ViewRoute = () => {
  const [routes, setRoutes] = useState([]);
  const [error, setError] = useState(null);
  const { fetchRoutes, handleUpdate, handleDelete } = FViewRoute();

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchRoutes();
        setRoutes(data);
      } catch (error) {
        setError(error.message);
      }
    }
    fetchData();
  }, [fetchRoutes]);

  return (
    <div className="container mt-5 pt-5">
      <h1 className="text-center">Routes</h1>
      <div className="d-flex justify-content-center mb-3">
        <Link to="/routeform" className="btn btn-danger btn-lg me-2">Add New</Link>
        <Link to="/admin" className="btn btn-danger btn-lg">Back</Link>
      </div>
      {error && <p className="text-danger">{error}</p>}
      <table className="table table-striped border rounded">
        <thead className="table-dark text-center">
          <tr>
            <th>Route ID</th>
            <th>Date</th>
            <th>Route Name</th>
            <th>Route Landmark</th>
            <th>Transporter ID</th>
            <th>Driver Name</th>
            <th>Vehicle No</th>
            <th>License No</th>
            <th>Rent Rate</th>
            <th>Mobile No</th>
            <th>Address</th>
            <th>Volunteer ID</th>
            <th>Volunteer Name</th>
            <th>Volunteer Address</th>
            <th>Volunteer Mobile No</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {routes.map(route => (
            <tr key={route._id}>
              <td>{route.routeId}</td>
              <td>{route.date}</td>
              <td>{route.routeName}</td>
              <td>{route.routeLandmark}</td>
              <td>{route.transporterId}</td>
              <td>{route.transporterdriveName}</td>
              <td>{route.transportervehicleNo}</td>
              <td>{route.transporterlicenseNo}</td>
              <td>{route.transporterrentRate}</td>
              <td>{route.transportermobileNo}</td>
              <td>{route.transporteraddress}</td>
              <td>{route.volunteerId}</td>
              <td>{route.volunteerName}</td>
              <td>{route.volunteeraddress}</td>
              <td>{route.volunteermobileNo}</td>
              <td>
                <div className="d-flex">
                  <button type="button" className="btn btn-danger me-2" onClick={() => handleUpdate(route)}>Edit</button>
                  <button type="button" className="btn btn-secondary" onClick={() => handleDelete(route)}>Delete</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewRoute;
