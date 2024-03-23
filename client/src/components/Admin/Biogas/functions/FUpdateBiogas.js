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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
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
