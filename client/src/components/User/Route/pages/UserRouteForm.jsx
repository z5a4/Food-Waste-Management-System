import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import ScheduleTransporter from '../../Schedule/pages/ScheduleTransporter';
import ScheduleVolunteer from '../../Schedule/pages/ScheduleVolunteer';
import { Typography, Button, Input } from '@material-tailwind/react';
import UserFRouteForm from '../functions/UserFRouteForm';

const UserRouteForm = () => {
  const { formData, handleChange } = UserFRouteForm();
  const navigate = useNavigate();
  const [routeId, setRouteId] = useState('');
  const [showVolunteer, setShowVolunteer] = useState(false);
  const [showTransporter, setShowTransporter] = useState(false);

  const handleViewVolunteer = () => {
    setShowVolunteer(true);
    setShowTransporter(false);
  };

  const handleViewTransporter = () => {
    setShowTransporter(true);
    setShowVolunteer(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/routee', formData);
      alert(response.data.message);
      setRouteId(response.data.routeId);
      navigate('/user');
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Registration failed. Please try again.');
    }
  };

  return (
    <div className="container mt-4 border border-gray-400 rounded p-4 pl-6 pr-6">
      <Typography variant='h3' className="text-center">Food Waste Request Form</Typography>
      <form onSubmit={handleSubmit} className="mt-4">
        <table className="table table-bordered">
          <tbody>
            <tr>
              <td>
                <label htmlFor="routeId" className="form-label font-bold">Route ID:</label>
              </td>
              <td>
                <Input
                  variant='standard'
                  type="text"
                  name="routeId"
                  value={routeId}
                  onChange={handleChange}
                  readOnly
                  placeholder="Route ID"
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="date" className="form-label font-bold">Date:</label>
              </td>
              <td>
                <Input
                  variant='standard'
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  placeholder="Date"
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="routename" className="form-label font-bold">Route Name:</label>
              </td>
              <td>
                <Input
                  variant='standard'
                  type="text"
                  name="routeName"
                  value={formData.routeName}
                  onChange={handleChange}
                  placeholder="Route Name"
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="routelandmark" className="form-label font-bold">Route Landmark :</label>
              </td>
              <td>
                <Input
                  variant='standard'
                  type="text"
                  name="routeLandmark"
                  value={formData.routeLandmark}
                  onChange={handleChange}
                  placeholder="Route Landmark"
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="transporterId" className="form-label font-bold">Transporter ID:</label>
              </td>
              <td>
                <Input
                  variant='standard'
                  type="text"
                  name="transporterId"
                  value={formData.transporterId}
                  onChange={handleChange}
                  placeholder="Transporter ID"
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="drivername" className="form-label font-bold">Driver Name:</label>
              </td>
              <td>
                <Input
                  variant='standard'
                  type="text"
                  name="transporterdriveName"
                  value={formData.transporterdriveName}
                  onChange={handleChange}
                  placeholder="Driver Name"
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="vehicleno" className="form-label font-bold">Vehicle No :</label>
              </td>
              <td>
                <Input
                  variant='standard'
                  type="text"
                  name="transportervehicleNo"
                  value={formData.transportervehicleNo}
                  onChange={handleChange}
                  placeholder="Vehicle No"
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="lisenceno" className="form-label font-bold">License No :</label>
              </td>
              <td>
                <Input
                  variant='standard'
                  type="text"
                  name="transporterlicenseNo"
                  value={formData.transporterlicenseNo}
                  onChange={handleChange}
                  placeholder="License No"
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="rentrate" className="form-label font-bold">Rent Rate :</label>
              </td>
              <td>
                <Input
                  variant='standard'
                  type="text"
                  name="transporterrentRate"
                  value={formData.transporterrentRate}
                  onChange={handleChange}
                  placeholder="Rent Rate"
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="mobileNo" className="form-label font-bold">Mobile No:</label>
              </td>
              <td>
                <Input
                  variant='standard'
                  type="text"
                  name="transportermobileNo"
                  value={formData.transportermobileNo}
                  onChange={handleChange}
                  placeholder="Mobile No"
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="address" className="form-label font-bold">Address:</label>
              </td>
              <td>
                <textarea
                  id='transporteraddress'
                  type="text"
                  name="transporteraddress"
                  value={formData.transporteraddress}
                  onChange={handleChange}
                  placeholder="Address"
                  rows={4}
                  className="border border-gray-300 p-2 rounded-md w-full"
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="volunteerID" className="form-label font-bold">Volunteer ID:</label>
              </td>
              <td>
                <Input
                  variant='standard'
                  type="text"
                  name="volunteerId"
                  value={formData.volunteerId}
                  onChange={handleChange}
                  placeholder="Volunteer ID"
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="volunteername" className="form-label font-bold">Volunteer Name :</label>
              </td>
              <td>
                <Input
                  variant='standard'
                  type="text"
                  name="volunteerName"
                  value={formData.volunteerName}
                  onChange={handleChange}
                  placeholder="Volunteer Name"
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="volunteerAddress" className="form-label font-bold">Volunteer Address:</label>
              </td>
              <td>
                <textarea
                  id='volunteeraddress'
                  type="text"
                  name="volunteeraddress"
                  value={formData.volunteeraddress}
                  onChange={handleChange}
                  placeholder="Volunteer Address"
                  rows={4}
                  className="border border-gray-300 p-2 rounded-md w-full"
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="volunteermobileno" className="form-label font-bold">Volunteer Mobile No :</label>
              </td>
              <td>
                <Input
                  variant='standard'
                  type="text"
                  name="volunteermobileNo"
                  value={formData.volunteermobileNo}
                  onChange={handleChange}
                  placeholder="Volunteer Mobile No"
                />
              </td>
            </tr>
            <tr>
              <td colSpan="2" className="text-center">
                <Button type="submit" size='lg' color='green' className=" me-2" >Submit</Button>
                <Button color="light-blue" size="lg" className="ms-2" onClick={() => window.history.back()}>Back</Button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>

      <div className="text-center mt-3">
        <Button onClick={handleViewVolunteer} size='lg' color='green' className=" me-2">View Volunteer</Button>
        <Button onClick={handleViewTransporter} size='lg' color='light-blue'>View Transporter</Button>
      </div>

      {showVolunteer && <ScheduleVolunteer />}
      {showTransporter && <ScheduleTransporter />}
    </div>
  );
};

export default UserRouteForm;
