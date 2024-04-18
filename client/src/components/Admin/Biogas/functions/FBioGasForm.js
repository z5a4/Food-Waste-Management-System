import  { useState } from 'react';
import Axios from 'axios';

const FBioGasForm = () => {
  const [biogasId, setbiogasId] = useState('');
  const [formData, setFormData] = useState({
    biogasName: '',
    biogasAddress: '',
    biogasMobileNo: '',
    biogasEmail: '',
    biogasSlurryLimit: '',
  });

  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }
  

  const handleSubmit = async (e) => {
    e.preventDefault();


      try {
        // Send the form data to the server
        const response = await Axios.post('http://localhost:5000/api/bioWastes', formData);
        if (response.data.success) {
           
        // Display a success message
        alert(response.data.message);
        setbiogasId(response.data.biogasId);
        // Reset form fields
        setFormData({
          biogasName: '',
          biogasAddress: '',
          biogasMobileNo: '',
          biogasEmail: '',
          biogasSlurryLimit: '',
      });
  
      // Redirect to login page
      window.location.href = '/admin';
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
        console.error('Error submitting BioGas Plant:', error);
        // Display an error message
        alert('Biogas creation failed. Please try again.');
      }
   
  };

  return { formData,handleInputChange, handleSubmit,biogasId };
};

export default FBioGasForm;
