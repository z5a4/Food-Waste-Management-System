import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import FSchedule from '../functions/FSchedule';
import ScheduleTransporter from './ScheduleTransporter';
import ScheduleVolunteer from './ScheduleVolunteer';
import 'bootstrap/dist/css/bootstrap.min.css';

const Schedule = () => {
    const [combinedRequests, setCombinedRequests] = useState([]);
    const [error, setError] = useState(null);
    const { fetchCombinedRequests, handleInputChange, handleSubmit , totalRequestCount} = FSchedule();
    const [showVolunteer, setShowVolunteer] = useState(false);
    const [showTransporter, setShowTransporter] = useState(false);

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
        const intervalId = setInterval(fetchData, 60000); // Fetch data every minute
        return () => clearInterval(intervalId);
    }, [fetchCombinedRequests]);

    const handleViewVolunteer = () => {
        setShowVolunteer(true);
        setShowTransporter(false);
    };

    const handleViewTransporter = () => {
        setShowTransporter(true);
        setShowVolunteer(false);
    };

    return (
        <>
            <div className="container mt-5 pt-5">
                <h1 className="text-center">Regular And Occasional FW Request Table</h1>
                <div className="d-flex justify-content-center mb-3">
                    <Link to="/adminRegularFWRequestform" className="btn btn-danger btn-lg me-2">Add New</Link>
                    <Link to="/admin" className="btn btn-danger btn-lg">Back</Link>
                </div>
                <h1>Total Requests: {totalRequestCount}</h1>
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
                                <td> <td>
                                    <select onChange={(e) => window.location.href=e.target.value}>
                                        <option value="">Select</option>
                                        <option value="/route1">Route 1</option>
                                        <option value="/route2">Route2</option>
                                    </select>
                                </td></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
              
                <div className="text-center mt-3">
                    <button onClick={handleViewVolunteer} className="btn btn-primary me-2">View Volunteer</button>
                    <button onClick={handleViewTransporter} className="btn btn-primary">View Transporter</button>
                </div>

                {showVolunteer && <ScheduleVolunteer />}
                {showTransporter && <ScheduleTransporter />}
            </div>
           
        </>
    );
};

export default Schedule;
