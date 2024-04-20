import React,{useEffect,useState} from 'react';
import { useNavigate } from 'react-router-dom';
import FCommonRegistrationForm from '../functions/FCommonRegistration';
import { Button, Input, Alert, Typography } from '@material-tailwind/react';
import Footer from '../../../Footer/Footer';


const CommonRegistrationForm = () => {
  const { formData, handleChange, handleSubmit, errorMessage, showAlert, handleCloseAlert,regid } = FCommonRegistrationForm();
  


  return (
    <>
      <div className='mt-2'>
    
            
      <div className="container mt-4 border border-gray-400 rounded p-4 pl-6 pr-6">
        <Typography variant='h3' className="text-center mb-4">Register..</Typography>
        <form onSubmit={handleSubmit}>
          <table className="table table-bordered">
            <tbody>
              <tr>
                <td className="form-label font-bold">Category: </td>
                <td>
                  <select 
                  id="category" 
                  name="category" 
                  value={formData.category} 
                  onChange={handleChange} 
                  className='form-select' >

                    <option value="">Select Category</option>
                    <option value="Hotel">Hotel</option>
                    <option value="Hostel">Hostel</option>
                    <option value="Farmer">Farmer</option>
                    <option value="Others">Others</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td className="form-label font-bold">Organisation Name:</td>
                <td>
                  <Input
                  variant='standard' 
                  type="text" 
                  id="organisationName" 
                  name="organisationName" 
                  value={formData.organisationName} 
                  onChange={handleChange} 
                  placeholder="Organisation Name" />
                </td>
              </tr>
              <tr>
                <td  className="form-label font-bold"> Name: </td>
                <td>
                  <Input 
                  variant='standard' 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleChange} 
                  placeholder="Name" />
                </td>
              </tr>
              <tr>
                <td  className="form-label font-bold">Address: </td>
                <td>
                  <textarea
                   rows={4}
                   className="border border-gray-300 p-2 rounded-md w-full" 
                   id="address" 
                   name="address"
                  value={formData.address} 
                  onChange={handleChange} 
                  placeholder="Address" />
                </td>
              </tr>
              <tr>
                <td  className="form-label font-bold">Date of Birth: </td>
                <td>
                  <Input 
                  variant='standard' 
                  type="date" 
                  id="dateOfBirth" 
                  name="dateOfBirth"
                   value={formData.dateOfBirth}
                    onChange={handleChange} 
                    placeholder="Date of Birth" />
                </td>
              </tr>
              <tr>
                <td  className="form-label font-bold">Email: </td>
                <td>
                  <Input 
                  variant='standard' 
                  type="email" 
                  id="email" 
                  name="email"
                   value={formData.email} 
                   onChange={handleChange} 
                   placeholder="Email" />
                </td>
              </tr>
              <tr>
                <td  className="form-label font-bold">Mobile No: </td>
                <td>
                  <Input 
                  variant='standard' 
                  type="tel" 
                  id="mobileNo" 
                  name="mobileNo" 
                  value={formData.mobileNo} 
                  onChange={handleChange} 
                  placeholder="Mobile No" />
                </td>
              </tr>
              <tr>
                <td  className="form-label font-bold">Username: </td>
                <td>
                  <Input 
                  variant='standard'
                   type="text" 
                   id="username" 
                   name="username" 
                   value={formData.username}
                    onChange={handleChange} 
                    placeholder="Username" />
                </td>
              </tr>
              <tr>
                <td  className="form-label font-bold">Password: </td>
                <td>
                  <Input 
                  variant='standard' 
                  type="password" 
                  id="password" 
                  name="password" 
                  value={formData.password} 
                  onChange={handleChange} 
                  placeholder="Password" />
                </td>
              </tr>
              <tr>
                <td  className="form-label font-bold">Security Question: </td>
                <td>
                  <select 
                  name="securityQuestion" 
                  value={formData.securityQuestion}
                   onChange={handleChange} 
                   className="form-select">

                    <option value="">Select Security Question</option>
                    <option value="favFood">Favorite Food</option>
                    <option value="favHobby">Favorite Hobby</option>
                    <option value="favSport">Favorite Sport</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td  className="form-label font-bold">Answer: </td>
                <td>
                  <Input 
                  variant='standard' 
                  type="text" name="answer" 
                  value={formData.answer}
                   onChange={handleChange} 
                   placeholder="Answer" />
                </td>
              </tr>
            </tbody>
          </table>
          <Button type="submit" color='green' size='lg' className='me-2'>Submit</Button>
          <Button color="light-blue" size="lg" className="ms-2" onClick={() => window.history.back()}>Back</Button>
        </form>
        <Typography color="blue-gray" className="mt-4">Already have an account ? <a href='/login' className="font-medium text-gray-600">Sign-In</a></Typography>
                    <br></br>
       
      </div>
      </div>
      
      <Footer />
    </>
  );
};

export default CommonRegistrationForm;


        
        