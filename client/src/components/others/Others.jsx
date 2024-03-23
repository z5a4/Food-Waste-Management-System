import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


import RegularFWRequest from "../others/RegularFWRequest/pages/RegularFWRequest";
import OthersNavbar from "./OthersNavbar";


function Others()  {
  const navigate = useNavigate();
  
  

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
    <OthersNavbar/>
    <div className='space'><br></br></div>
    


   <div className='space'><br></br></div>
    <RegularFWRequest/>
       
<div className='space'><br></br></div>
<button type='submit' onClick={handleLogout}>Logout</button>


     
    
    </>
  );
};

export default Others;
