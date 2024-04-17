import React, { useState } from 'react';
import Axios from 'axios';
import {Alert} from '@material-tailwind/react';

const CreateAdmin = () => {
    const [aid, setaid] = useState('');
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
            const response = await Axios.post('http://localhost:5000/api/createadmin', formData);
            if (!response.data.success && response.data.focus) {
                const field = document.getElementById(response.data.focus);
                if (field) {
                    field.focus();
                }
            }
            // Display a success message
            alert(response.data.message);
            setaid(response.data.aid);


             // Redirect to login page after successful registration
             if (response.data.message === 'Registration successful') {
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
            }
           
               
            
            
          } catch (error) {
            console.error('Error submitting form:', error);
            // Display an error message
            alert('Registration failed. Please try again.');
          } // Handle form submission logic here
    };
    return { formData, handleChange, handleSubmit ,aid};
}
export default CreateAdmin;

