import { useState } from 'react';
import axios from 'axios';

const FUpdateBiogas = (biogas, navigate) => {
  const [formData, setFormData] = useState({
    biogasId:biogas.biogasId,
    biogasName: biogas.biogasName,
    biogasEmail: biogas.biogasEmail,
    biogasMobileNo: biogas.biogasMobileNo,
    biogasAddress: biogas.biogasAddress,
    biogasSlurryLimit: biogas.biogasSlurryLimit
   
  });

  const [errors, setErrors] = useState({});


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
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
    try {
      await axios.put(`http://localhost:5000/api/biogas/${biogas._id}`, formData);
      // Redirect to the biogass list after successful update
      navigate('/adminviewbiogas');
    } catch (error) {
      console.error('Error updating biogas:', error);
    }
  };

  return { formData, handleChange, handleSubmit };
};

export default FUpdateBiogas;
