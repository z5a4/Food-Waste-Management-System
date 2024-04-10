import { useState } from 'react';
import Axios from 'axios';

const UserFBioGasForm = () => {
  const [formData, setFormData] = useState({
    biogasId: '',
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
  };

  const [errorMessage, setErrorMessage] = useState('');
  const [showAlert, setShowAlert] = useState(false); // State for controlling alert visibility

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation checks
    const { biogasEmail, biogasMobileNo, biogasAddress, biogasName, biogasSlurryLimit } = formData;
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

    if (biogasAddress.trim() === '') {
      setShowAlert(true);
      setErrorMessage('Provide Address Properly!');
      return;
    }

    if (biogasName.trim() === '' || biogasName.match(/[0-9!@#$%^&*]/)) {
      setShowAlert(true);
      setErrorMessage('Invalid Bio-Plant Name.');
      return;
    }
    if (biogasSlurryLimit.trim() === '') {
      setShowAlert(true);
      setErrorMessage('Enter Slurry Limit !');
      return;
    }

    // Check for blank fields
    for (const key in formData) {
      if (formData[key].trim() === '') {
        setShowAlert(true);
        setErrorMessage('Please fill out all fields.');
        return;
      }
    }

    try {
      // Send the form data to the server
      const response = await Axios.post('http://localhost:5000/api/bioWastes', formData);

      // Display a success message
      alert(response.data.message);
      setFormData({
        biogasId: '',
        biogasName: '',
        biogasAddress: '',
        biogasMobileNo: '',
        biogasEmail: '',
        biogasSlurryLimit: '',
      });
    } catch (error) {
      console.error('Error submitting BioGas Plant:', error);
      // Display an error message
      alert('Biogas creation failed. Please try again.');
    }
  };

  return { formData, handleInputChange, handleSubmit, errorMessage, showAlert };
};

export default UserFBioGasForm;
