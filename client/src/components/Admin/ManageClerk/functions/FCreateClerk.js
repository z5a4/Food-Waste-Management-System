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
            const response = await Axios.post('http://localhost:5000/api/createClerk', formData);
            if (response.data.success) {
           
            // Display a success message
            alert(response.data.message);
            setcid(response.data.cid);
            
            // Reset form fields
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
        
            // Redirect to login page
            window.location.href = '/viewadmin';
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
            console.error('Error submitting form:', error);
            // Display an error message
            alert('Clerk failed. Please try again.');
          } // Handle form submission logic here
    };
    return { formData, handleChange, handleSubmit ,errorMessage,cid};
}
export default FCreateClerk;

