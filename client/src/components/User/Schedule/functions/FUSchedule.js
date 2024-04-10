import { useState } from 'react';
import axios from 'axios';

const FUSchedule = (RegularFWRequest,OccasionalFWRequest, navigate) => {
  const [formData, setFormData] = useState({
    requestId: RegularFWRequest.requestId || '',
    organisationName: RegularFWRequest.requestName || '',
    requesterName: RegularFWRequest.requesterName || '',
    date: RegularFWRequest.date|| '',
    email: RegularFWRequest.email || '',
    mobileNo: RegularFWRequest.mobileNo || '',
    address: RegularFWRequest.address || '',
    approxQuantity: RegularFWRequest.approxQuantity || '',

    requestId: OccasionalFWRequest.requestId || '',
    description: OccasionalFWRequest.description || '',
    requesterName: OccasionalFWRequest.requesterName || '',
    date: OccasionalFWRequest.date|| '',
    email: OccasionalFWRequest.email || '',
    mobileNo: OccasionalFWRequest.mobileNo || '',
    address: OccasionalFWRequest.address || '',
    approxQuantity: OccasionalFWRequest.approxQuantity || '',

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
      await axios.put(`http://localhost:5000/api/RegularFWRequests/${RegularFWRequest._id}`, formData);
      // Redirect to the registrations list after successful update
      navigate('/admin');
    } catch (error) {
      console.error('Error making schedule', error);
    }
  };

  return { formData, handleChange, handleSubmit };
};

export default FUSchedule;
