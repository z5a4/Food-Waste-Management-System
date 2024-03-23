import  { useState } from 'react';
import Axios from 'axios';

const FBioGasForm = () => {
  const [formData, setFormData] = useState({
    biogasId: '',
    biogasName: '',
    biogasAddress: '',
    biogasMobileNo: '',
    biogasEmail: '',
    biogasSlurryLimit: '',
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

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    // Example validation rules, adjust as needed
    if (!formData.biogasId) {
      newErrors.biogasId = 'Biogas ID is required';
      isValid = false;
    }

    if (!formData.biogasName) {
      newErrors.biogasName = 'Biogas Name is required';
      isValid = false;
    }

    if (!formData.biogasAddress) {
      newErrors.biogasAddress = 'Biogas Address is required';
      isValid = false;
    }

    if (!formData.biogasMobileNo || !/^\d{10}$/.test(formData.biogasMobileNo)) {
      newErrors.biogasMobileNo = 'Valid 10-digit Biogas Mobile No is required';
      isValid = false;
    }

    if (!formData.biogasEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.biogasEmail)) {
      newErrors.biogasEmail = 'Valid email is required';
      isValid = false;
    }

    if (!formData.biogasSlurryLimit || isNaN(formData.biogasSlurryLimit) || formData.biogasSlurryLimit <= 0) {
      newErrors.biogasSlurryLimit = 'Valid Biogas Slurry Limit is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        // Send the form data to the server
        const response = await Axios.post('http://localhost:5000/api/bioWastes', formData);

        // Display a success message
        alert(response.data.message);
        
      } catch (error) {
        console.error('Error submitting form:', error);
        // Display an error message
        alert('Biogas creation failed. Please try again.');
      }
    } else {
      alert('Form validation failed. Please check the fields.');
    }
  };

  return { formData, errors, handleInputChange, handleSubmit };
};

export default FBioGasForm;
