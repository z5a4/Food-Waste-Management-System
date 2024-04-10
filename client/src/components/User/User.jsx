// Admin.js
import UserNavbar from "./UserNavbar";
import AdminCarousel from './UserCarousel'
import AdminCard from './UserCard'
import AdminCard1 from './UserCard1'
import Footer1 from '../Footer/Footer1'
import Footer from '../Footer/Footer'
import LineChart from './LineChart'
import BarChart from './BarChart'

function User()  {
  return (
    <>
    
       <UserNavbar/>
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

export default User;
