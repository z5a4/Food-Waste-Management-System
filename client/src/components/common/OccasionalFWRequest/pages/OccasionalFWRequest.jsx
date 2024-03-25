import React,{useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import FOccasionalFWFWRequest from '../functions/FOccasionalFWRequest';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const OccasionalFWRequest = () => {
  const { formData, handleInputChange, handleSubmit } = FOccasionalFWFWRequest();
  const navigate = useNavigate();


  const getCurrentDate = () => {
    const now = new Date();
    now.setDate(now.getDate() - 1); // Subtract one day from the current date

   
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };


  const handleBack = () => {
    navigate('/');
  };


  useEffect(() => {
    // Set formData.date to the current date when the component mounts
    const currentDate = getCurrentDate();
    handleInputChange({ target: { name: 'date', value: currentDate } });
  }, []); // Empty dependency array ensures this useEffect runs only once on mount




  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Regular Food Waste Request</h1>
      <form onSubmit={handleSubmit}>
        <table className="table border-only-outside">
          <tbody>
            <tr>
            <th>
                <label htmlFor="reqID" className="form-label">Request ID:</label>
                <input type="text" name="requestId" value={formData.requestId} onChange={handleInputChange} className="form-control" />
                
              </th>
             </tr>
             <tr> 
              <th>
                <label htmlFor="desc" className="form-label">Description</label>
                <input type="text" name="description" value={formData.description} onChange={handleInputChange} className="form-control" />
                
              </th>
              </tr>

              <tr> 
              <th>
                <label htmlFor="Rname" className="form-label">Requester Name:</label>
                <input type="text" name="requesterName" value={formData.requesterName} onChange={handleInputChange} className="form-control" />
                
              </th>
              </tr>
             

              <tr>
              <th>
                <label htmlFor="Tdate" className="form-label">Date :</label>
                <input type="date" name="date" value={formData.date} readOnly onChange={handleInputChange} className="form-control" />
                              </th>
            </tr>
            <tr>
              <th colSpan="2">
                <label htmlFor="address" className="form-label">Address:</label>
                <input type="text" name="address" value={formData.address} onChange={handleInputChange} className="form-control" style={{ width: '100%' }} />
                              </th>
            </tr>
            <tr>
              <th colSpan="2">
                <label htmlFor="landmark" className="form-label">landmark:</label>
                <input type="text" name="landmark" value={formData.landmark} onChange={handleInputChange} className="form-control" style={{ width: '100%' }} />
                              </th>
            </tr>
           
            <tr>
              <th>
                <label htmlFor="email" className="form-label">Email:</label>
                <input type="email" name="email" value={formData.email} onChange={handleInputChange} className="form-control" />
                
              </th>
              </tr>
              <tr>
              <th>
                <label htmlFor="mobileNo" className="form-label">Mobile No:</label>
                <input type="tel" name="mobileNo" value={formData.mobileNo} onChange={handleInputChange} className="form-control" />
                 </th>
            </tr>
            <tr>
              <th>
                <label htmlFor="aaproxqty" className="form-label">Approx Quantity : </label>
                <input type="text" name="approxQuantity" value={formData.approxQuantity} onChange={handleInputChange} className="form-control" />
                </th>
            </tr>
            <tr>
              <th colSpan="2" className="text-center">
                <button type="submit" className="btn btn-danger btn-lg me-2">Request</button>
                <button type="button" className="btn btn-secondary btn-lg" onClick={handleBack}>Back</button>
              </th>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
};

export default OccasionalFWRequest;
