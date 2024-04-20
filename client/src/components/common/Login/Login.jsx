import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 
import { Input, Button,Typography} from '@material-tailwind/react';
import {Alert} from '@material-tailwind/react'
import loginimg from "../Images/login.png";
import { CommonNavbar } from '../commonNavbar';
import Footer from '../../Footer/Footer';

const LoginForm = () => {
    const navigate = useNavigate(); // Initialize useNavigate hook
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        category: '',
    });
   
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Basic client-side validation
      
        try {
            const response = await axios.post('http://localhost:5000/api/login', formData, { withCredentials: true });

            if (response.status === 200 && response.data.success) {
                // Successful login
                alert(response.data.message);
                setFormData({
                    category: '',
                    username: '',
                    password: '',
                   
                });
            
                // Redirect to login page
                window.location.href = '/others';
            } else {
                // If registration failed and there's a field to focus on
                if (response.data.focus) {
                    const field = document.getElementById(response.data.focus);
                    if (field) {
                        field.focus();
                    }
                }
                
                // Display error message
                window.alert(response.data.message);
            }  
            
        } catch (error) {
           // console.error('Error during login:', error);
            alert('Invalid Credentials. Please try again.');
        }
    };

    return (
        <>
        <CommonNavbar/>
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
                            <Input variant='standard' type="text" id="username" name="username" value={formData.username} onChange={handleChange} />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password" className="block mb-1">Password:</label>
                            <Input variant='standard' type="password" id="password" name="password" value={formData.password} onChange={handleChange}  />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="category" className="block mb-1">Category:</label>
                            <select id="category" name="category" value={formData.category} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded">
                                <option value="">Select Category</option>
                                <option value="Hotel">Hotel</option>
                                <option value="Hostel">Hostel</option>
                                <option value="Farmer">Farmer</option>
                                <option value="Member">Member</option>
                                <option value="Others">Others</option>
                            </select>
                        </div>
                        <Button className='mr-2' type="submit" color="green" size="lg">Login</Button>
                        <a href='/forgotpassword'> <Button type="button" color="blue" size="lg">Forgot Password</Button></a>
                    </form>
                    <Typography color="blue-gray" className="mt-4">Don't have an account ? <a href='/commonregistration' className="font-medium text-gray-600">Sign-Up</a></Typography>
                    <br></br>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    );
};

export default LoginForm;
