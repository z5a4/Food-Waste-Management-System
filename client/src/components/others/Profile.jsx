import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
} from "@material-tailwind/react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faEnvelope, faPhone, faBuilding, faUser, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';



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
    {userData && (
                <div>
    
    <Card className="mx-auto" style={{ maxWidth: '600px' }}>
      <CardBody className="text-center">
        <FontAwesomeIcon icon={faUserCircle} className="mr-2"/> 
        
        <Typography variant="h4" color="blue-gray" className="mb-2">
        {userData.username}
        </Typography>
        <br></br>
        <Typography variant="h6" color="green" className="mb-2">Personal Information
        </Typography>
        
        <Typography color="blue-gray" className="font-medium" textGradient>
        <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                {userData.email}
        </Typography>
        <br></br>
        <Typography color="blue-gray" className="font-medium" textGradient>
                <FontAwesomeIcon icon={faPhone} className="mr-2" /> {userData.mobileNo}
              </Typography>
              <br />
              <Typography color="blue-gray" className="font-medium" textGradient>
                <FontAwesomeIcon icon={faBuilding} className="mr-2" /> {userData.organisationName}
              </Typography>
              <br />
              <Typography color="blue-gray" className="font-medium" textGradient>
                <FontAwesomeIcon icon={faUser} className="mr-2" /> {userData.name}
              </Typography>
              <br />
              <Typography color="blue-gray" className="font-medium" textGradient>
                <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" /> {userData.address}
              </Typography>
      


      </CardBody>
      <CardFooter className="flex justify-center gap-7 pt-2">
        <Tooltip content="Like">
          <Typography
            as="a"
            href="#facebook"
            variant="lead"
            color="blue"
            textGradient
          >
            <i className="fab fa-facebook" />
          </Typography>
        </Tooltip>
        <Tooltip content="Follow">
          <Typography
            as="a"
            href="#twitter"
            variant="lead"
            color="light-blue"
            textGradient
          >
            <i className="fab fa-twitter" />
          </Typography>
        </Tooltip>
        <Tooltip content="Follow">
          <Typography
            as="a"
            href="#instagram"
            variant="lead"
            color="purple"
            textGradient
          >
            <i className="fab fa-instagram" />
          </Typography>
        </Tooltip>
      </CardFooter>
    </Card>
      </div>
            )}



   <div className='space'><br></br></div>
       
<div className='space'><br></br></div>
<button type='submit' onClick={handleLogout}>Logout</button>


     
    
    </>
  );
};

export default Profile;


 