import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 
import { Input, Button } from '@material-tailwind/react';
import loginimg from "../Images/login.png";

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
        </div>
    );
};

export default LoginForm;
