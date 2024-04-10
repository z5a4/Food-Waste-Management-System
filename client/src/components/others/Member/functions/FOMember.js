import  { useState } from 'react';
import Axios from 'axios';

const FOMember = () => {
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    address: '',
    email: '',
    mobileNo: '',
    username: '',
    password: '',
    dateOfBirth: '', 
    BeVolunteer:'',// New field for Date of Birth
    securityQuestion: '',
    answer: '',
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    setErrors({
      ...errors,
      [name]: '',
    });
  };

  const validateForm = () => {
    let isValid = true;
    let newErrors = {};

    if (!formData.name) {
      newErrors.name = 'Name is required';
      isValid = false;
    }

    if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Valid email is required';
      isValid = false;
    }

    if (!formData.mobileNo || !/^\d{10}$/.test(formData.mobileNo)) {
      newErrors.mobileNo = 'Valid 10-digit mobile number is required';
      isValid = false;
    }

    if (!formData.dateOfBirth) {
      newErrors.dateOfBirth = 'Date of Birth is required';
      isValid = false;
    }

    if (!formData.securityQuestion) {
      newErrors.securityQuestion = 'Security question is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        const response = await Axios.post('http://localhost:5000/api/member-table', formData);
        alert(response.data.message);
      } catch (error) {
        console.error('Error submitting form:', error);
        alert('Registration failed. Please try again.');
      }
    }
  };

  return { formData, errors, handleInputChange, handleSubmit };
};

export default FOMember;
