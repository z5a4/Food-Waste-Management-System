import { useState } from 'react';
import Axios from 'axios';

const UserFVolunteer = () => {
  const [formData, setFormData] = useState({
    volunteerId: '',
    volunteerName: '',
    dateOfBirth: '', // New field for Date of Birth
    volunteeraddress: '',
    email: '',
   volunteermobileNo: '',
    username: '',
    password: '',
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

 
  const handleSubmit = async (e) => {
    e.preventDefault();

   
      try {
        const response = await Axios.post('http://localhost:5000/api/volunteer-table', formData);
        alert(response.data.message);
      } catch (error) {
        console.error('Error submitting form:', error);
        alert('Registration failed. Please try again.');
      }
    }
  

  return { formData, errors, handleInputChange, handleSubmit };

};

export default UserFVolunteer;
