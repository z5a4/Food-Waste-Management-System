// Admin.js
import AdminNavbar from './AdminNavbar'
import { AdminReportCard, AdminReportCard1 } from './AdminReportCard'
import Footer1 from '../Footer/Footer1'
import Footer from '../Footer/Footer'


import { Typography } from '@material-tailwind/react';

function Admin()  {

  return (
    <>
    
       <AdminNavbar/>
       <div className='space'><br></br></div>
       <Typography variant='h3' className="text-center mb-2">Reports</Typography>
       <div className='space'><br></br></div>
       <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
      <AdminReportCard/>
      <AdminReportCard1/>
      </div>
      <div className='space'><br></br></div>

      <div className='space'><br></br></div>

<Footer1/>
<div className='space'><br></br></div>
<Footer/>

     
    
    </>
  );
};

export default Admin;
