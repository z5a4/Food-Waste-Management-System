import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 
import waste from "../Images/waste.jpg";
import { Input, Select, Option } from "@material-tailwind/react";

import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
  } from "@material-tailwind/react";
// Import useNavigate from react-router-dom

const LoginForm = () => {
    const navigate = useNavigate(); // Initialize useNavigate hook
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        category: '',
    });
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:5000/api/login', formData, { withCredentials: true });

            if (response.status === 200) {
                // Successful login
                console.log(response.data.message);
                // Redirect to /others
                navigate('/others');
            } else {
                // Login failed
                setErrorMessage(response.data.message);
            }
        } catch (error) {
            console.error('Error during login:', error);
            setErrorMessage('Internal server error');
        }
    };

    return (
        <div className="container mt-5">
            <Card className="w-full flex-row mt-6 mb-6 shadow-xl shadow-blue-gray-900/50">
        <CardHeader
          shadow={false}
          floated={false}
          className="m-0 w-2/5 shrink-0 rounded-r-none"
          color="green"
        >
          <img
            src={waste}
            alt="card-image"
            className="max-h-[22rem] w-full object-cover"
          />
        </CardHeader>
        <CardBody>
          <Typography variant="h3" color="blue" className="mt-8 mb-2">
            Want to give your food waste.. ?
          </Typography>
          <Typography color="gray" className="mb-8 font-normal">
            Click below to make your food waste request...
          </Typography>
          <a className="inline-block">
          <Typography variant="h1" className="text-center mb-4 font-bold">Sign-In</Typography>
      <form onSubmit={handleSubmit}>
                
                <div className="grid grid-cols-2 gap-4">
                <div>
                    <label htmlFor="username" className="block text-sm font-medium text-gray-700 font-bold">Username:</label>
                    <input type="text" variant='standard' id="username" name="username" value={formData.username} onChange={handleChange} required />
                </div>
                <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700 font-bold">Password:</label>
                    <input type="password" variant='standard' id="password" name="password" value={formData.password} onChange={handleChange} required />
                </div>
                <div>
                    <label htmlFor="category" className="block text-sm font-medium text-gray-700 font-bold">Category:</label>
                    <select id="category" variant='standard' name="category" value={formData.category} onChange={handleChange} required>
                        <option value="">Select Category</option>
                        <option value="Hotel">Hotel</option>
                        <option value="Hostel">Hostel</option>
                        <option value="Farmer">Farmer</option>
                        <option value="Others">Others</option>
                    </select>
                </div>
                <div className="text-center mt-6">
          <Button type="submit" color="green" size="lg" className='mr-2'>Login</Button>
</div>
                </div>
            </form>
            {errorMessage && <p>{errorMessage}</p>}
            </a>
        </CardBody>
        </Card>
           
        </div>
    );
};

export default LoginForm;
