import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 
<<<<<<< HEAD
import { Input, Button } from '@material-tailwind/react';
import loginimg from "../Images/login.png";
=======
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
>>>>>>> e2f477cf2dd8e1334a001a6cb32fa66f8a04f3b3

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
<<<<<<< HEAD
        <div className="container mx-auto mt-8 mr-4 ml-4">
            <div className="flex flex-col md:flex-row border border-gray-300 rounded-md">
                <div className="md:w-1/2 p-4 border-r border-gray-300">
                    <img src={loginimg} 
                    alt="Login Image" 
                    className="w-full h-auto" />
                </div>
                <div className="md:w-1/2 p-4 mt-12">
                    <h1 className="text-3xl font-semibold mb-4">Login</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="username" className="block mb-1">Username:</label>
                            <Input variant='standard' type="text" id="username" name="username" value={formData.username} onChange={handleChange} required />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password" className="block mb-1">Password:</label>
                            <Input variant='standard' type="password" id="password" name="password" value={formData.password} onChange={handleChange} required />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="category" className="block mb-1">Category:</label>
                            <select id="category" name="category" value={formData.category} onChange={handleChange} required className="w-full p-2 border border-gray-300 rounded">
                                <option value="">Select Category</option>
                                <option value="Hotel">Hotel</option>
                                <option value="Hostel">Hostel</option>
                                <option value="Farmer">Farmer</option>
                                <option value="Others">Others</option>
                            </select>
                        </div>
                        <Button type="submit" color="blue" size="lg">Login</Button>
                    </form>
                    {errorMessage && <p className="text-red-500 mt-4">{errorMessage}</p>}
                </div>
            </div>
=======
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
           
>>>>>>> e2f477cf2dd8e1334a001a6cb32fa66f8a04f3b3
        </div>
    );
};

export default LoginForm;
