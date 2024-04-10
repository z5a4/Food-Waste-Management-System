import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Input, Button, Typography } from "@material-tailwind/react";
import Footer from '../Footer/Footer';

const FarmerRequest = () => {
    const [farmerRequest, setFarmerRequest] = useState({
        farmerName: '',
        mobileNo: '',
        address: '',
        date: ''
    });
    const [errorMessage, setErrorMessage] = useState(null);
    const [eligibleDate, setEligibleDate] = useState('');
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        fetchUserData();
    }, []);

    const fetchUserData = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/user', { withCredentials: true });

            if (response.status === 200) {
                setUserData(response.data);
            } else {
                throw new Error('Failed to fetch user data');
            }
        } catch (error) {
            console.error('Error fetching user data:', error);
            setErrorMessage('Failed to fetch user data');
        }
    };

    useEffect(() => {
        if (userData) {
            setFarmerRequest({
                farmerName: userData.name || '',
                mobileNo: userData.mobileNo || '',
                address: userData.address || '',
                date: ''
            });
        }
    }, [userData]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFarmerRequest((prevRequest) => ({
            ...prevRequest,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:5000/api/slurryRequest', farmerRequest);

            if (response.data.message) {
                setErrorMessage(null);
                console.log(response.data.message);
            } else {
                throw new Error('Request submission failed.');
            }
        } catch (error) {
            if (error.response && error.response.status === 400) {
                alert(error.response.data.message);
            } else {
                console.error(error);
                alert('An error occurred. Please try again.');
            }
        }
    };

    const calculateEligibleDate = () => {
        const currentDate = new Date();
        const requestDate = new Date(farmerRequest.date);

        const daysSinceRequest = Math.floor((currentDate - requestDate) / (1000 * 60 * 60 * 24));
        if (daysSinceRequest < 15) {
            const nextEligibleDate = new Date(requestDate.setDate(requestDate.getDate() + 15));
            const formattedDate = nextEligibleDate.toLocaleDateString('en-US');
            setEligibleDate(formattedDate);
            return;
        }

        const nextEligibleDate = new Date(currentDate.setDate(currentDate.getDate() + 15));
        const formattedDate = nextEligibleDate.toLocaleDateString('en-US');
        setEligibleDate(formattedDate);
    };

    return (
        <>
        <div className="container mt-4 border border-gray-400 rounded p-4 pl-6 pr-6">
            <Typography variant="h3" className="text-center mb-4">Slurry Request Form</Typography>
            <form onSubmit={handleSubmit} className="mt-4">
                <table className="table table-bordered">
                    <tbody>
                        <tr>
                            <td>
                                <Typography className="form-label font-bold">Farmer Name:</Typography>
                            </td>
                            <td>
                                <Input variant='standard' type="text" name="farmerName" value={farmerRequest.farmerName} onChange={handleChange} placeholder="Enter Farmer Name" />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <Typography className="form-label font-bold">Phone Number:</Typography>
                            </td>
                            <td>
                                <Input variant='standard' type="text" name="mobileNo" value={farmerRequest.mobileNo} onChange={handleChange} placeholder="Enter Phone Number" />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <Typography className="form-label font-bold">Address:</Typography>
                            </td>
                            <td>
                                <Input variant='standard' type="text" name="address" value={farmerRequest.address} onChange={handleChange} placeholder="Enter Address" />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <Typography className="form-label font-bold">Date:</Typography>
                            </td>
                            <td>
                                <Input variant='standard' type="date" name="date" value={farmerRequest.date} onChange={handleChange} placeholder="Select Date" />
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div className="mt-4">
                    <Button type="button" color="green" onClick={calculateEligibleDate}>Check Eligible Date</Button>
                    <Button type="submit" color="blue" className="ml-2">Submit Request</Button>
                    <Button color="green" size="lg" className="ms-2" onClick={() => window.history.back()}>Back</Button>
                </div>
            </form>
            <br></br>
            {eligibleDate && <p>Next eligible date for request: {eligibleDate}</p>}
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        </div>
        <Footer/>
        </>
    );
};

export default FarmerRequest;
