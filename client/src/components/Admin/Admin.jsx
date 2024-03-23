// Admin.js
import AdminNavbar from './AdminNavbar'
import AdminCarousel from './AdminCarousel'
import AdminCard from './AdminCard'
import AdminCard1 from './AdminCard1'
import Footer1 from '../Footer/Footer1'
import Footer from '../Footer/Footer'
import LineChart from './LineChart'
import BarChart from './BarChart'

function Admin()  {

  return (
    <>
    
       <AdminNavbar/>
<div className='space'><br></br></div>
<LineChart/>
<div className='space'><br></br></div>
<BarChart/>
<div className='space'><br></br></div>

<Footer1/>
<div className='space'><br></br></div>
<Footer/>

     
    
    </>
  );
};

export default Admin;
