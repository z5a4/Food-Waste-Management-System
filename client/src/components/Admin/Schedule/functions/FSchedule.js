import axios from 'axios';
import { useState,useEffect } from 'react';

const FSchedule = () => {
    const [totalRequestCount, setTotalRequestCount] = useState(0);
    const [formData, setFormData] = useState({
        requestId: '',
        organisationName: '',
        description: '',
        requesterName: '',
        date: '',
        mobileNo: '',
        email: '',
        address: '',
        approxQuantity: '',
    });


    useEffect(() => {
        const fetchTotalRequestCount = async () => {
          try {
            const response = await axios.get('http://localhost:5000/api/total-request-count');
            setTotalRequestCount(response.data.totalCount);
          } catch (error) {
            console.error('Error fetching total request count:', error);
          }
        };
    
        fetchTotalRequestCount();
      }, []);


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const fetchRegularRequest = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/Regular/schedule-datewise');
            return response.data;
        } catch (error) {
            console.error('Error fetching Regular:', error);
            throw new Error('Failed to fetch Regular');
        }
    };

    const fetchOccasionalRequest = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/Occasional/schedule-datewise');
            return response.data;
        } catch (error) {
            console.error('Error fetching Occasional:', error);
            throw new Error('Failed to fetch Occasional');
        }
    };

    const fetchCombinedRequests = async () => {
        try {
            const regularResponse = await fetchRegularRequest();
            const occasionalResponse = await fetchOccasionalRequest();
            const combinedRequests = [...regularResponse, ...occasionalResponse];
            return combinedRequests;
        } catch (error) {
            console.error('Error fetching combined requests:', error);
            throw new Error('Failed to fetch combined requests');
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Send the form data to the server
            const response = await axios.post('http://localhost:5000/api/schedule', formData);

            // Display a success message
            alert(response.data.message);
        } catch (error) {
            console.error('Error submitting form:', error);
            // Display an error message
            alert('Transporter creation failed. Please try again.');
        }
    };

    return {
        handleInputChange,
        handleSubmit,
        fetchCombinedRequests,
        totalRequestCount,
    };
};

export default FSchedule;
