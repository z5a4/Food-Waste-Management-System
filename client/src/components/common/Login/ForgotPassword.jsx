import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 
import { Input, Button, Typography } from '@material-tailwind/react';
import { Alert } from '@material-tailwind/react';
import Lottie from 'lottie-react';
import animationData from '../../../assets/Videos/forgotpsw.json';
import { CommonNavbar } from '../commonNavbar';
import Footer from '../../Footer/Footer';

const LoginForm = () => {
    const navigate = useNavigate(); // Initialize useNavigate hook
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        category: '',
    });
    const [errorMessage, setErrorMessage] = useState('');
    const [showAlert, setShowAlert] = useState(false); // State for controlling alert visibility

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
        if (!formData.username || !formData.password || !formData.category) {
            setShowAlert(true); // Show the alert
            return;
        }

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
           // console.error('Error during login:', error);
            setErrorMessage('Invalid Credentials. Please try again.');
        }
    };

    return (
        <>
        <CommonNavbar/>
        <div className="container mx-auto mt-8 mr-4 ml-4">
            <div className="flex flex-col md:flex-row border border-gray-300 rounded-md">
                <div className="md:w-1/2 p-4 border-r border-gray-300" style={{ backgroundColor: '#add8e6', paddingTop: '20px' }}>
                    <Lottie animationData={animationData} style={{ marginTop: '70px' }} />
                </div>
                <div className="md:w-1/2 p-4 mt-12">
                    <h1 className="text-3xl font-semibold mb-4">Forgot Password</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="username" className="block mb-1">Enter Email:</label>
                            <Input variant='standard' type="text" id="username" name="username" value={formData.username} onChange={handleChange} />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password" className="block mb-1">New Password:</label>
                            <Input variant='standard' type="password" id="password" name="password" value={formData.password} onChange={handleChange}  />
                        </div>
                        <Button className='mr-2' type="submit" color="green" size="lg">Send Email</Button>
                        <Button type="button" color="blue" size="lg">Submit</Button>
                    </form>
                    <br></br>
                    {errorMessage &&  <Alert className="rounded-none border-l-4 border-[#2ec946] bg-[#2ec946]/10 font-medium text-[#2ec946]">{errorMessage}</Alert>}
                    <br></br>
                    {showAlert &&  <Alert className="rounded-none border-l-4 border-[#2ec946] bg-[#2ec946]/10 font-medium text-[#2ec946]">Please fill in all fields</Alert>} {/* Conditionally render the alert */}
                </div>
            </div>
        </div>
        <Footer/>
        </>
    );
};

export default LoginForm;
