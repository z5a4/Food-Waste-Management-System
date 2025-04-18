import React,{useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import ScheduleTransporter from '../../Schedule/pages/ScheduleTransporter';
import ScheduleVolunteer from '../../Schedule/pages/ScheduleVolunteer';
import { Typography, Button } from '@material-tailwind/react';


import FRouteForm from '../functions/FRouteForm';


const RouteForm = () => {
  const { formData, handleChange } = FRouteForm();
  const navigate = useNavigate();
  const [routeId, setRouteId] = useState('');
  const [showVolunteer, setShowVolunteer] = useState(false);
    const [showTransporter, setShowTransporter] = useState(false);
    

  const handleBack = () => {
    navigate('/admin');
  };

  const handleViewVolunteer = () => {
    setShowVolunteer(true);
    setShowTransporter(false);
};

const handleViewTransporter = () => {
    setShowTransporter(true);
    setShowVolunteer(false);
};



  const handleSubmit = async (e) => {
    e.preventDefault(); // Corrected spelling


    try {
        const response = await axios.post('http://localhost:5000/api/routee', formData);
        alert(response.data.message);
        setRouteId(response.data.routeId);
        navigate('/admin');
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
              <th>
                <label htmlFor="routeId" className="form-label">Route ID:</label>
                <input
                  type="text"
                  name="routeId"
                  value={routeId}
                  onChange={handleChange}
                  className="form-control"
                  readOnly
                />
              </th>
              <th>
                <label htmlFor="date" className="form-label">Date:</label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="form-control"
                />
              </th>
            </tr>
            <tr>
              <th>
                <label htmlFor="routename" className="form-label">Route Name:</label>
                <input
                  type="text"
                  name="routeName"
                  value={formData.routeName}
                  onChange={handleChange}
                  className="form-control"
                />
              </th>

              <th>
                <label htmlFor="routelandmark" className="form-label">Route Landmark :</label>
                <input
                  type="text"
                  name="routeLandmark"
                  value={formData.routeLandmark}
                  onChange={handleChange}
                  className="form-control"
                />
              </th>
              
            </tr>
            <tr>
              <th>
                <label htmlFor="transporterId" className="form-label">Transporter ID:</label>
                <input
                  type="text"
                  name="transporterId"
                  value={formData.transporterId}
                  onChange={handleChange}
                  className="form-control"
                />
              </th>
              <th>
                <label htmlFor="drivername" className="form-label">Driver Name:</label>
                <input
                  type="text"
                  name="transporterdriveName"
                  value={formData.transporterdriveName}
                  onChange={handleChange}
                  className="form-control"
                />
              </th>
              <th>
                <label htmlFor="vehicleno" className="form-label">Vehicle No :</label>
                <input
                  type="text"
                  name="transportervehicleNo"
                  value={formData.transportervehicleNo}
                  onChange={handleChange}
                  className="form-control"
                />
              </th>
            
              <th>
                <label htmlFor="lisenceno" className="form-label">Lisence No :</label>
                <input
                  type="text"
                  name="transporterlicenseNo"
                  value={formData.transporterlicenseNo}
                  onChange={handleChange}
                  className="form-control"
                />
              </th>
              <th>
                <label htmlFor="rentrate" className="form-label">Rent Rate :</label>
                <input
                  type="text"
                  name="transporterrentRate"
                  value={formData.transporterrentRate}
                  onChange={handleChange}
                  className="form-control"
                />
              </th>
            </tr>
            <tr>
              <th>
                <label htmlFor="mobileNo" className="form-label">Mobile No:</label>
                <input
                  type="text"
                  name="transportermobileNo"
                  value={formData.transportermobileNo}
                  onChange={handleChange}
                  className="form-control"
                />
              </th>
              <th>
                <label htmlFor="address" className="form-label">Address:</label>
                <input
                  type="text"
                  name="transporteraddress"
                  value={formData.transporteraddress}
                  onChange={handleChange}
                  className="form-control"
                />
              </th>
              <th>
                <label htmlFor="volunteerID" className="form-label">Volunteer ID:</label>
                <input
                  type="text"
                  name="volunteerId"
                  value={formData.volunteerId}
                  onChange={handleChange}
                  className="form-control"
                />
              </th>
              <th>
                <label htmlFor="volunteername" className="form-label">Volunteer Name :</label>
                <input
                  type="text"
                  name="volunteerName"
                  value={formData.volunteerName}
                  onChange={handleChange}
                  className="form-control"
                />
              </th>
              <th>
                <label htmlFor="volunteerAddress" className="form-label">Volunteer Address:</label>
                <input
                  type="text"
                  name="volunteeraddress"
                  value={formData.volunteeraddress}
                  onChange={handleChange}
                  className="form-control"
                />
              </th>
              <th>
                <label htmlFor="volunteermobileno" className="form-label">Volunteer Mobile No :</label>
                <input
                  type="text"
                  name="volunteermobileNo"
                  value={formData.volunteermobileNo}
                  onChange={handleChange}
                  className="form-control"
                />
              </th>
              
              
            </tr>
            <tr>
            <th colSpan="2" className="text-center">
              <Button type="submit" size='lg' color='green' className=" me-2" >Submit</Button>
              <Button type="Button" size='lg' color='light-blue' onClick={handleBack}>Back</Button>
            </th>
          </tr>
          </tbody>
        </table>
      </form>




      <div className="text-center mt-3">
                    <Button onClick={handleViewVolunteer} size='lg' color='green' className=" me-2">View Volunteer</Button>
                    <Button onClick={handleViewTransporter} size='lg' color='light-blue' >View Transporter</Button>
                </div>

                {showVolunteer && <ScheduleVolunteer />}
                {showTransporter && <ScheduleTransporter />}


    </div>
  );
};

export default RouteForm;