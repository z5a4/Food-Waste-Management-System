import { useState } from 'react';
import Axios from 'axios';

const FRegularFWRequest = () => {
  const [formData, setFormData] = useState({
    organisationName: '',
    requesterName:'',
    date: '',
    address: '',
    email: '',
    mobileNo: '',
    approxQuantity: '',
  });
  const [requestId, setRequestId] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await Axios.post('http://localhost:5000/api/regular-fw', formData);
      alert(response.data.message);
      setRequestId(response.data.requestId);
      setFormData({
        organisationName: '',
        requesterName:'',
        date: '',
        address: '',
        email:'',
        mobileNo: '',
        approxQuantity: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Registration failed. Please try again.');
    }
  };

  return { formData, requestId, handleInputChange, handleSubmit };
};

export default FRegularFWRequest;
