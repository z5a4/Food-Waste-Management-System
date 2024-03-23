import React, { useState } from 'react';
import Axios from 'axios';

const FCommonRegistrationForm = () => {
    const [formData, setFormData] = useState({
        category: '',
        organisationName: '',
        regid: '',
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
            // Send the form data to the server
            const response = await Axios.post('http://localhost:5000/api/register', formData);
    
            // Display a success message
            alert(response.data.message);
          } catch (error) {
            console.error('Error submitting form:', error);
            // Display an error message
            alert('Registration failed. Please try again.');
          } // Handle form submission logic here
    };
    return { formData, handleChange, handleSubmit };
}
export default FCommonRegistrationForm;

