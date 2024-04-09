import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import FSchedule from '../functions/FSchedule';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import ViewRoute from '../../Route/pages/ViewRoute'; // Import ViewRoute component
//import RouteSelect from './RouteSelect'; // Import RouteSelect component

const Schedule = () => {
    const [combinedRequests, setCombinedRequests] = useState([]);
    const [routes, setRoutes] = useState([]);
    const [selectedRoutes, setSelectedRoutes] = useState('');  
    const [showRoute, setShowRoute] = useState(false);
   const [error, setError] = useState(null);
    const { fetchCombinedRequests, handleInputChange} = FSchedule();
    
 
    useEffect(() => {
        
        async function fetchData() {
            try {
                const combinedData = await fetchCombinedRequests();
                setCombinedRequests(combinedData);
            } catch (error) {
                setError(error.message);
            }
        }
    
       
    
        fetchData();
        
    
        const intervalId = setInterval(() => {
            fetchData();
        }, 60000); // Fetch data every minute
    
        return () => clearInterval(intervalId);


    },[fetchCombinedRequests]);


    // Fetch routes from the backend API
  useEffect(() => {
    async function fetchRoutes() {
      try {
        const response = await fetch('http://localhost:5000/api/routes/current'); // Assuming this is your backend route
        const data = await response.json();
        setRoutes(data.routeNames);
      } catch (error) {
        console.error('Error fetching routes:', error);
      }
    }

    fetchRoutes();
  }, []); // Empty dependency array to run the effect only once when the component mounts

    

    const handleViewRoute = () => {
        setShowRoute(true);
        setShowRoute(false);
    };

  // Update handleRouteChange to store selected route for each request ID
const handleRouteChange = (event, requestId) => {
    setSelectedRoutes(prevState => ({
      ...prevState,
      [requestId]: event.target.value
    }));
  };

  
  const handleAddToCurrentSchedule = async (requestData) => {
    try {
        // Include the selected route in the requestData
        const requestDataWithRoute = { ...requestData, routeName: selectedRoutes[requestData._id] };
         
// Update the status to "Approved"
requestDataWithRoute.status = 'Approved';
        // Send the updated requestData to the server
        const response = await axios.post('http://localhost:5000/api/currentschedule', requestDataWithRoute);

        // Display a success message or update UI as needed
        alert(response.data.message);
    } catch (error) {
        console.error('Error adding to current schedule:', error);
        // Display an error message or update UI as needed
        alert('Failed to add request to current schedule. Please try again.');
    }
};


   
    return (
        <>
            <div className="container mt-5 pt-5">
                <h1 className="text-center">Regular And Occasional FW Request Table</h1>
                <div className="d-flex justify-content-center mb-3">
                    <Link to="/adminRegularFWRequestform" className="btn btn-danger btn-lg me-2">Add New</Link>
                    <Link to="/admin" className="btn btn-danger btn-lg">Back</Link>
                </div>
                {error && <p className="text-danger">{error}</p>}
                <table className="table table-striped border rounded">
                    <thead className="table-dark text-center">
                        <tr>
                            <th>Request ID</th>
                            <th>Organisation Name</th>
                            <th>Description</th>
                            <th>Requester Name</th>
                            <th>Date</th>
                            <th>Address</th>
                            <th>Mobile No</th>
                            <th>Email</th>
                            <th>approxQuantity</th>
                            <th>Add Route</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {combinedRequests.map(request => (
                            <tr key={request._id}>
                                <td>{request.requestId}</td>
                                <td>{request.organisationName || '-'}</td>
                                <td>{request.description || '-'}</td>
                                <td>{request.requesterName}</td>
                                <td>{request.date}</td>
                                <td>{request.address}</td>
                                <td>{request.mobileNo}</td>
                                <td>{request.email}</td>
                                <td>{request.approxQuantity}</td>
                                <td>
                                <label htmlFor={`routeSelect-${request._id}`}>Select Route:</label>
      <select id={`routeSelect-${request._id}`} value={selectedRoutes[request._id] || ''} onChange={(e) => handleRouteChange(e, request._id)}>
        <option value="">Select a route</option>
        {routes.map((route, index) => (
          <option key={index} value={route}>{route}</option>
        ))}
      </select>
      {selectedRoutes[request._id] && <p>Selected Route: {selectedRoutes[request._id]}</p>}
                            
                              </td>
                              <td>
                                {request.status}
                              </td>
                              <td>
                              <button type='button' onClick={() => handleAddToCurrentSchedule(request)}>Add</button>
                                </td>
                             </tr>
                        ))}
                    </tbody>
                </table>
                <div className="text-center mt-3">
                    <button onClick={handleViewRoute} className="btn btn-primary me-2">View Route</button>
                    </div>

                {showRoute && <ViewRoute />}
               
              
            </div>
           
        </>
    );
};

export default Schedule;
