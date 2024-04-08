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
  } 
      
  const [errorMessage, setErrorMessage] = useState('');
  const [showAlert, setShowAlert] = useState(false); // State for controlling alert visibility


  

  const { biogasEmail, biogasMobileNo,biogasAddress,biogasName } = formData;
  const mobileNoRegex = /^[6-9]\d{9}$/;
 
  
  if (!biogasEmail.includes('@')) {
      setShowAlert(true);
      setErrorMessage('Invalid Email format.');
      return;
  }

  if (!biogasMobileNo.match(mobileNoRegex)) {
      setShowAlert(true);
      setErrorMessage('Invalid mobile number format.');
      return;
  }

  if (biogasAddress== '') {
      setShowAlert(true);
      setErrorMessage('Provide Address Properly !.');
      return;
  }

  if (biogasName.match(/[0-9!@#$%^&*]/)) {
    setShowAlert(true);
    setErrorMessage('Biogas Plant Name should not contain any digits or special characters.');
    return;
}


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/api/biogas/${biogas._id}`, formData);
      // Redirect to the biogass list after successful update
      setFormData({
        biogasId: '',
  biogasName: '',
  biogasAddress: '',
  biogasMobileNo: '',
  biogasEmail: '',
  biogasSlurryLimit: '',
      });

      navigate('/adminviewbiogas');
    } catch (error) {
      console.error('Error updating biogas:', error);
    }
  };

  return { formData, handleChange, handleSubmit,errorMessage,showAlert };
};

export default FUpdateBiogas;
