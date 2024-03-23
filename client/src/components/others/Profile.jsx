import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';




function Profile()  {
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();
  
  useEffect(() => {
    const fetchUserData = async () => {
        try {
           // Log the document.cookie to see all cookies
           console.log(document.cookie);
           console.log("sessioncookie stored");
            const response = await axios.get('http://localhost:5000/api/user', { withCredentials: true });
            setUserData(response.data);
        } catch (error) {
            console.error(error.response.data.error);
        }
    };
    fetchUserData();
}, []);


const handleLogout = async () => {
  try {
    // Disable back navigation
    window.history.pushState(null, null, window.location.pathname);
    window.addEventListener('popstate', () => {
      window.history.pushState(null, null, window.location.pathname);
    });

    const response = await axios.post('http://localhost:5000/api/logout');
    if (response.status === 200) {
      // Redirect to login page after successful logout
      navigate('/');
    } else {
      console.error('Logout failed:', response.data.error);
    }
  } catch (error) {
    console.error('Error during logout:', error);
  } finally {
    // Re-enable back navigation
    window.removeEventListener('popstate', () => {
      window.history.pushState(null, null, window.location.pathname);
    });
  }
};

  return (
    <>
    <div className='space'><br></br></div>
    {userData && (
                <div>
                    <p>Username: {userData.username}</p>
                    <p>Email: {userData.email}</p>
                    <p>Mobile No: {userData.mobileNo}</p>
                    <p>Orgnaisation Name:{userData.organisationName} </p>
                    <p>Requester Name:{userData.name} </p>
                    <p>Address:{userData.address} </p>
                </div>
            )}



   <div className='space'><br></br></div>
       
<div className='space'><br></br></div>
<button type='submit' onClick={handleLogout}>Logout</button>


     
    
    </>
  );
};

export default Profile;
