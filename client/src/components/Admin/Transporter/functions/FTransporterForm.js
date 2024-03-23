import { useState } from 'react';
import Axios from 'axios';

const FTransporterForm = () => {
  const [formData, setFormData] = useState({
    transporterId: '',
    vehicleNo: '',
    vehicleType: '',
    driverName: '',
    licenseNo: '',
    mobileNo: '',
    email: '',
    rentRate: '',
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Clear the error for the current field when it's updated
    setErrors({
      ...errors,
      [name]: '',
    });
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    // Example validation rules, adjust as needed
    if (!formData.transporterId) {
      newErrors.transporterId = 'Transporter ID is required';
      isValid = false;
    }

    if (!formData.vehicleNo) {
      newErrors.vehicleNo = 'Vehicle No is required';
      isValid = false;
    }

    if (!formData.vehicleType) {
      newErrors.vehicleType = 'Vehicle Type is required';
      isValid = false;
    }

    if (!formData.driverName) {
      newErrors.driverName = 'Driver Name is required';
      isValid = false;
    }

    if (!formData.licenseNo) {
      newErrors.licenseNo = 'License No is required';
      isValid = false;
    }

    if (!formData.mobileNo || !/^\d{10}$/.test(formData.mobileNo)) {
      newErrors.mobileNo = 'Valid 10-digit Mobile No is required';
      isValid = false;
    }

    if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Valid email is required';
      isValid = false;
    }

    if (!formData.rentRate || isNaN(formData.rentRate) || formData.rentRate <= 0) {
      newErrors.rentRate = 'Valid Rent Rate is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        // Send the form data to the server
        const response = await Axios.post('http://localhost:5000/api/transporters', formData);

        // Display a success message
        alert(response.data.message);
      } catch (error) {
        console.error('Error submitting form:', error);
        // Display an error message
        alert('Transporter creation failed. Please try again.');
      }
    } else {
      alert('Form validation failed. Please check the fields.');
    }
  };

  return { formData, errors, handleInputChange, handleSubmit };
};

export default FTransporterForm;
