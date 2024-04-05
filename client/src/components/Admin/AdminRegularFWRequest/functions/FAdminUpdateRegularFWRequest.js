import { useState } from 'react';
import axios from 'axios';

const FUpdateRegularFWRequest = (RegularFWRequest, navigate) => {
  const [formData, setFormData] = useState({
    requestId: RegularFWRequest.requestId || '',
    description: RegularFWRequest.description || '',
    date: RegularFWRequest.date || '',
    address: RegularFWRequest.address || '',
    email: RegularFWRequest.email || '',
    mobileNo: RegularFWRequest.mobileNo || '',
    requesterName: RegularFWRequest.requesterName || '',
    approxQuantity: RegularFWRequest.approxQuantity || '',
    
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
      await axios.put(`http://localhost:5000/api/Regular/${RegularFWRequest._id}`, formData);
      // Redirect to the registrations list after successful update
      navigate('/admin');
    } catch (error) {
      console.error('Error updating RegularFWRequest:', error);
    }
  };

  return { formData, handleChange, handleSubmit };
};

export default FUpdateRegularFWRequest;
