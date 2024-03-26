import  { useState } from 'react';
import Axios from 'axios';

const FRegularFWRequest = () => {
  const [formData, setFormData] = useState({
    requestId: '',
    description: '',
    requesterName:'',
    address: '',
   
    email: '',
    mobileNo: '',
    date: '', // New field for Date of Birth
    approxQuantity: '',
  });

 
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
        const response = await Axios.post('http://localhost:5000/api/Occasional-fw', formData);
        alert(response.data.message);

        setFormData({
          requestId: '',
          description:'',
          requesterName: '',
          address: '',
          
          mobileNo: '',
          email:'',
          date: '',
          approximateQuantity: ''
        });
  



      } catch (error) {
        console.error('Error submitting form:', error);
        alert('Registration failed. Please try again.');
      }
    }


  return { formData, handleInputChange, handleSubmit };
};

export default FRegularFWRequest;
