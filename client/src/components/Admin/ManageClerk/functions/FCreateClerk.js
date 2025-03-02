import React, { useState } from 'react';
import Axios from 'axios';
import {Alert} from '@material-tailwind/react';

const FCreateClerk = () => {
    const [cid, setcid] = useState('');
    const [formData, setFormData] = useState({
        
        name: '',
        address: '',
        dateOfBirth: '',
        email: '',
        mobileNo: '',
        username: '',
        password: '',
        securityQuestion: '',
        answer: '',
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

        // Validation checks
        const { dateOfBirth, email, mobileNo, password } = formData;
        const currentDate = new Date().toISOString().split('T')[0];
        const mobileNoRegex = /^[6-9]\d{9}$/;
        const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;

        if (new Date(dateOfBirth) > new Date(currentDate)) {
            setShowAlert(true);
            setErrorMessage('Date of Birth cannot be after the current date.');
            return;
        }

        if (!email.includes('@')) {
            setShowAlert(true);
            setErrorMessage('Invalid email format.');
            return;
        }

        if (!mobileNo.match(mobileNoRegex)) {
            setShowAlert(true);
            setErrorMessage('Invalid mobile number format.');
            return;
        }

      

        if (!password.match(passwordRegex)) {
            setShowAlert(true);
            setErrorMessage('Password should contain at least one digit, one special character, and have a minimum length of 8 characters.');
            return;
        }

        try {
            // Send the form data to the server
            const response = await Axios.post('http://localhost:5000/api/createClerk', formData);
    
            // Display a success message
            alert(response.data.message);
            setcid(response.data.cid);
            
            setFormData({
           
            name: '',
            address: '',
            dateOfBirth: '',
            email: '',
            mobileNo: '',
            username: '',
            password: '',
            securityQuestion: '',
            answer: '',
                });
        
          } catch (error) {
            console.error('Error submitting form:', error);
            // Display an error message
            alert('Clerk failed. Please try again.');
          } // Handle form submission logic here
    };
    return { formData, handleChange, handleSubmit ,errorMessage,showAlert,cid};
}
export default FCreateClerk;

