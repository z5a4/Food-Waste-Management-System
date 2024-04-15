import React, { useState } from 'react';
import Axios from 'axios';

const FCommonRegistrationForm = () => {
    const [regid, setRegid] = useState('');
    const [formData, setFormData] = useState({
        category: '',
        organisationName: '',
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
        const { dateOfBirth, email, mobileNo, organisationName, password } = formData;
        const currentDate = new Date().toISOString().split('T')[0];
        const mobileNoRegex = /^[6-9]\d{9}$/;
        const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;

        if (new Date(dateOfBirth) > new Date(currentDate)) {
            setErrorMessage('Date of Birth cannot be after the current date.');
            return;
        }

        if (!email.includes('@')) {
            setErrorMessage('Invalid email format.');
            return;
        }

        if (!mobileNo.match(mobileNoRegex)) {
            setErrorMessage('Invalid mobile number format.');
            return;
        }

        if (organisationName.match(/[0-9!@#$%^&*]/)) {
            setErrorMessage('Organisation Name should not contain any digits or special characters.');
            return;
        }

        if (!password.match(passwordRegex)) {
            setErrorMessage('Password should contain at least one digit, one special character, and have a minimum length of 8 characters.');
            return;
        }

        try {
            // Send the form data to the server
            const response = await Axios.post('http://localhost:5000/api/register', formData);
    
            // Display a success message
            window.alert(response.data.message);
            setRegid(response.data.regid);
            setFormData({
                category: '',
                organisationName: '',
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
            // Redirect to login page after successful registration
            window.location.href = '/login';
        
        } catch (error) {
            console.error('Error submitting form:', error);
            // Display an error message
            setErrorMessage('Registration failed. Please try again.');
        }
    };

    return { formData, handleChange, handleSubmit, errorMessage, showAlert, regid };
};

export default FCommonRegistrationForm;
