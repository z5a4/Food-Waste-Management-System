import { useState } from 'react';
import axios from 'axios';

const FUpdateVolunteer = (volunteer, navigate) => {
  const [formData, setFormData] = useState({
    id: volunteer.id || '',
    name: volunteer.name || '',
    dateOfBirth: volunteer.dateOfBirth || '',
    address: volunteer.address || '',
    email: volunteer.email || '',
    mobileNo: volunteer.mobileNo || '',
    username: volunteer.username || '',
    password: volunteer.password || '',
    securityQuestion: volunteer.securityQuestion || '',
    answer: volunteer.answer || '',
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
      await axios.put(`http://localhost:5000/api/volunteer/${volunteer._id}`, formData);
      // Redirect to the registrations list after successful update
      navigate('/admin');
    } catch (error) {
      console.error('Error updating volunteer:', error);
    }
  };

  return { formData, handleChange, handleSubmit };
};

export default FUpdateVolunteer;
