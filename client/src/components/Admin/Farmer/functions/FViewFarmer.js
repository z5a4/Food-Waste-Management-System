import { useState, useEffect } from 'react';
import axios from 'axios';

const FViewMember = () => {
  const [farmers, setfarmers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchfarmers();
  }, []);

  const fetchfarmers = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/Farmers');
      setfarmers(response.data);
    } catch (error) {
      setError('Error fetching Farmers');
    }
  };

  return { farmers, error };
};

export default FViewMember;
