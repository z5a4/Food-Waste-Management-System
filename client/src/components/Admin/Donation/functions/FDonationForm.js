import { useState } from 'react';
import Axios from 'axios';

const FDonationForm = () => {
  const [donationId, setdonationId] = useState('');
  const [formData, setFormData] = useState({
    donationType: '',
    description: '',
    donorName: '',
    donorMobileNo: '',
    donorEmail: '',
    cardNumber: '',
    expiry: '',
    cvv: '',
    donationAmount: '',
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Clear the error for the current field when it's updated
    setErrors({
      ...errors,
      [name]: '',
    });
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();

      try {
        // Send the form data to the server
        const response = await Axios.post('http://localhost:5000/api/donations', formData);
        if (response.data.success) {
           
        // Display a success message
        alert(response.data.message);
        setdonationId(response.data.donationId);
        setFormData({
          donationType: '',
    description: '',
    donationDate: '',
    donorName: '',
    donorMobileNo: '',
    donorEmail: '',
    cardNumber: '',
    expiry: '',
    cvv: '',
    donationAmount: '',
              });

              // Redirect to login page
            window.location.href = '/';
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
        console.error('Error submitting donation form:', error);
        // Display an error message
        alert('Donation submission failed. Please try again.');
      }
     
  };

  return { formData, errors, handleInputChange, handleSubmit,donationId };
};

export default FDonationForm;
