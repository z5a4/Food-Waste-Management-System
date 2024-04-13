import './App.css'
import {useState, useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


{/*Admin-BioGas-Import*/}
import Admin from './components/Admin/Admin'
import AdminViewBiogas from './components/Admin/Biogas/pages/ViewBiogas'
import AdminBiogasForm from './components/Admin/Biogas/pages/BioGasForm'
import AdminUpdateBiogasForm from './components/Admin/Biogas/pages/UpdateBiogas'
import AdminDeleteBiogasForm from './components/Admin/Biogas/pages/DeleteBiogas'

{/*User-BioGas-Import*/}
import User from './components/User/User';
import UserViewBiogas from './components/User/Biogas/pages/UserViewBiogas';
import UserBioGasForm from './components/User/Biogas/pages/UserBioGasForm';

{/*Admin-Donation-Import*/}
import AdminViewDonation from './components/Admin/Donation/pages/ViewDonation'
import AdminDonationForm from './components/Admin/Donation/pages/DonationForm'
import AdminUpdateDonationForm from './components/Admin/Donation/pages/UpdateDonation'
import AdminDeleteDonationForm from './components/Admin/Donation/pages/DeleteDonation'

{/*User-Donation-Import*/}
import UserViewDonation from './components/User/Donation/pages/UserViewDonation';
import UserDonationForm from './components/User/Donation/pages/UserDonationForm';


{/*Admin-Farmer-Import*/}
import AdminViewFarmer from './components/Admin/Farmer/pages/ViewFarmer'
import AdminFarmerForm from './components/Admin/Farmer/pages/FarmerForm'
import AdminUpdateFarmer from './components/Admin/Farmer/pages/UpdateFarmer'
import AdminDeleteFarmer from './components/Admin/Farmer/pages/DeleteFarmer'

{/*User-Farmer-Import*/}
import UserViewFarmer from './components/User/Farmer/pages/UserViewFarmer';
import UserFarmerForm from './components/User/Farmer/pages/UserFarmerForm';

{/*Admin-Member-Import*/}
import AdminViewMember from './components/Admin/Member/pages/ViewMember'
import AdminMemberForm from './components/Admin/Member/pages/Member'
import AdminUpdateMember from './components/Admin/Member/pages/UpdateMember'
import AdminDeleteMember from './components/Admin/Member/pages/DeleteMember'

{/*User-Member-Import*/}
import UserViewMember from './components/User/Member/pages/UserViewMember';
import UserMember from './components/User/Member/pages/UserMember';

{/*Admin-Registration-Import*/}
import AdminViewRegistration from './components/Admin/Registration/pages/ViewRegistration'
//import AdminRegistrationForm from './components/common/Registration/pages/Member'
import AdminUpdateRegistration from './components/Admin/Registration/pages/UpdateReg'
import AdminDeleteRegistration from './components/Admin/Registration/pages/DeleteReg'

{/*User-Registration-Import*/}
import UserViewRegistrations from './components/User/Registration/pages/UserViewRegistration';
import UserCommonRegistrationForm from './components/User/Registration/pages/UserCommonRegistration';


{/*Admin-Source-Import*/}
import AdminViewSource from './components/Admin/SourceTable/pages/ViewSourceTable'
import AdminSourceForm from './components/Admin/SourceTable/pages/SourceTable'
import AdminUpdateSource from './components/Admin/SourceTable/pages/UpdateSource'
import AdminDeleteSource from './components/Admin/SourceTable/pages/DeleteSource'

{/*Admin-Transporter-Import*/}
import AdminViewTransporter from './components/Admin/Transporter/pages/ViewTransporter'
import AdminTransporterForm from './components/Admin/Transporter/pages/TransporterForm'
import AdminUpdateTransporter from './components/Admin/Transporter/pages/UpdateTransporter'
import AdminDeleteTransporter from './components/Admin/Transporter/pages/DeleteTransporter'

{/*User-Transporter-Import*/}
import UserViewTransporter from './components/User/Transporter/pages/UserViewTransporter';
import UserTransporterForm from './components/User/Transporter/pages/UserTransporterForm';


{/*Admin-Volunteer-Import*/}
import AdminViewVolunteer from './components/Admin/Volunteer/pages/ViewVolunteer'
import AdminVolunteerForm from './components/Admin/Volunteer/pages/Volunteer'
import AdminUpdateVolunteer from './components/Admin/Volunteer/pages/UpdateVolunteer'
import AdminDeleteVolunteer from './components/Admin/Volunteer/pages/DeleteVolunteer'

{/*User-Volunteer-Import*/}
import UserViewVolunteer from './components/User/Volunteer/pages/UserViewVolunteer';
import UserVolunteer from './components/User/Volunteer/pages/UserVolunteer';

{/*Admin-Occasional FW Request */}
import AdminViewOccasionlFWRequest from './components/Admin/AdminOccasionalFWRequest/pages/ViewOccasionalFWRequest'
import AdminUpdateOccasionalFWRequest from './components/Admin/AdminOccasionalFWRequest/pages/UpdateOccasionalFWRequest'
import AdminDeleteOccasionalFWRequest from './components/Admin/AdminOccasionalFWRequest/pages/DeleteOccasionalFWRequest'

{/*User-Occasional FW Request */}
import UserViewOccasionalFWRequest from './components/User/AdminOccasionalFWRequest/pages/UserViewOccasionalFWRequest';


{/*Admin-Regular FW Request */}
import AdminViewRegularFWRequest from './components/Admin/AdminRegularFWRequest/pages/AdminViewRegularFWRequest';
import AdminUpdateRegularFWRequest from './components/Admin/AdminRegularFWRequest/pages/AdminUpdateRegularFWRequest';
import AdminDeleteRegularFWRequest from './components/Admin/AdminRegularFWRequest/pages/AdminDeleteRegularFWRequest';

{/*User-Regular FW Request */}
import UserViewRegularFWRequest from './components/User/AdminRegularFWRequest/pages/UserViewRegularFWRequest';

{/*Common.jsx Import*/}
import Common from './components/common/Common';
import CommonRegistrationForm from './components/common/CommonRegistration/pages/CommonRegistration';
import LoginForm from './components/common/Login/Login';
import Profile from './components/others/Profile';
import About from './components/common/About Us/About';


{/*Report Import*/}
import ReportViewVolunteer from './components/Reports/Volunteer/ReportViewVolunteer';
import ReportViewTransporter from './components/Reports/Transporter/ReportViewTransporter';




{/*Other Occasional Food Waste Request */}
import OccasionalFWRequest from './components/common/OccasionalFWRequest/pages/OccasionalFWRequest';

import Schedule from './components/Admin/Schedule/pages/Schedule';
import ScheduleTransporter from './components/Admin/Schedule/pages/ScheduleTransporter';
import ScheduleVolunteer from './components/Admin/Schedule/pages/ScheduleVolunteer';

{/*Others-Data Import */}
import Others from './components/others/Others';
import RegularFWRequest from './components/others/RegularFWRequest/pages/RegularFWRequest';

{/*Others Members Import */}
import OMember from './components/others/Member/pages/OMember';
import OViewMember from './components/others/Member/pages/OViewMember';
import OUpdateMember from './components/others/Member/pages/OUpdateMember';
import ODeleteMember from './components/others/Member/pages/ODeleteMember';


import { Typography } from '@material-tailwind/react'

import Skeleton from './Skeleton';

import RouteForm from './components/Admin/Route/pages/RouteForm';
import AdminViewRoute from './components/Admin/Route/pages/ViewRoute';
import RouteSelect from './components/Admin/Schedule/pages/RouteSelect';
import CurrentRoutes from './components/Admin/Route/pages/CurrentRoutes';

import FarmerRequest from './components/others/FarmerRequest';



import CreateAdmin from './components/Admin/ManageAdmin/pages/CreateAdmin'


function App() {
  
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Display skeleton for 3 seconds

    return () => clearTimeout(timer);
  }, []);


  return (
    <>
{loading ? (
        <Skeleton /> // Render the skeleton while loading
      ) : (
    <Router>
      <Routes>
        <Route path='/createadmin' element={<CreateAdmin/>}/>
      <Route path="/routeselect" element={<RouteSelect/>}/>
        <Route path='/adminrouteform' element={<RouteForm/>}/>
        <Route path='/adminviewroute' element={<AdminViewRoute/>}/>
        <Route path='/viewcurrentroutes' element={<CurrentRoutes/>}/>
        
        {/*Admin Bio-Gas Route*/}
        <Route path="/admin" element={<Admin/>} />
        <Route path="/adminviewbiogas" element={<AdminViewBiogas/>}/>
        <Route path="/adminbiogasform" element={<AdminBiogasForm/>}/>
        <Route path="/update/biogas/:id" element={<AdminUpdateBiogasForm/>}/>
        <Route path="/delete/biogas/:id" element={<AdminDeleteBiogasForm/>}/>

        {/*User Bio-Gas Route*/}
        <Route path="/user" element={<User/>}/>
        <Route path="/userviewbiogas" element={<UserViewBiogas/>}/>
        <Route path="/userbiogasform" element={<UserBioGasForm/>}/>

        {/*Admin Donation Route*/}
        <Route path="/adminviewdonation" element={<AdminViewDonation/>}/>
        <Route path="/donationform" element={<AdminDonationForm/>}/>
        <Route path="/update/Donation/:id" element={<AdminUpdateDonationForm/>}/>
        <Route path="/delete/Donation/:id" element={<AdminDeleteDonationForm/>}/>

        {/*User Donation Route*/}
        <Route path="/userviewdonation" element={<UserViewDonation/>}/>
        <Route path="/userdonationform" element={<UserDonationForm/>}/>


        {/*Admin Farmer Route*/}
        <Route path="/adminviewfarmer" element={<AdminViewFarmer/>}/>
        <Route path="/adminfarmerform" element={<AdminFarmerForm/>}/>
        <Route path="/update/farmers/:id" element={<AdminUpdateFarmer/>}/>
        <Route path="/delete/farmers/:id" element={<AdminDeleteFarmer/>}/>

        {/*User Farmer Route*/}
        <Route path="/userviewfarmer" element={<UserViewFarmer/>}/>
        <Route path="/userfarmerform" element={<UserFarmerForm/>}/>

        {/*Admin Member Route*/}
        <Route path="/adminviewmember" element={<AdminViewMember/>}/>
        <Route path="/adminmemberform" element={<AdminMemberForm/>}/>
        <Route path="/update/members/:id" element={<AdminUpdateMember/>}/>
        <Route path="/delete/members/:id" element={<AdminDeleteMember/>}/>

        {/*User Member Route*/}
        <Route path="/userviewmember" element={<UserViewMember/>}/>
        <Route path="/usermemberform" element={<UserMember/>}/>


        {/*Admin Registration Route*/}
        <Route path="/adminviewregistration" element={<AdminViewRegistration/>}/>
        {/*  <Route path="/adminmemberform" element={<AdminMemberForm/>}/>   */}
        <Route path="/update/:id" element={<AdminUpdateRegistration/>}/>
        <Route path="/delete/:id" element={<AdminDeleteRegistration/>}/>

         {/*User Registration Route*/}
         <Route path="/userviewregistration" element={<UserViewRegistrations/>}/>
         <Route path="/usercommonregistration" element={<UserCommonRegistrationForm/>}/>

      {/*Admin Source Route*/}
        <Route path="/adminviewsource" element={<AdminViewSource/>}/>
        <Route path="/adminsourceform" element={<AdminSourceForm/>}/>
        <Route path="/update/sources/:id" element={<AdminUpdateSource/>}/>
        <Route path="/delete/sources/:id" element={<AdminDeleteSource/>}/>

       {/*Admin Transporter Route*/}
       <Route path="/adminviewtransporter" element={<AdminViewTransporter/>}/>
        <Route path="/admintransporterform" element={<AdminTransporterForm/>}/>
        <Route path="/update/transporter/:id" element={<AdminUpdateTransporter/>}/>
        <Route path="/delete/transporter/:id" element={<AdminDeleteTransporter/>}/>

        {/*User Transporter Route*/}
        <Route path="/userviewtransporter" element={<UserViewTransporter/>}/>
        <Route path="/usertransporterform" element={<UserTransporterForm/>}/>


      {/*Admin Volunteer Route*/}
        <Route path="/adminviewvolunteer" element={<AdminViewVolunteer/>}/>
        <Route path="/adminvolunteerform" element={<AdminVolunteerForm/>}/>
        <Route path="/update/volunteer/:id" element={<AdminUpdateVolunteer/>}/>
        <Route path="/delete/volunteer/:id" element={<AdminDeleteVolunteer/>}/>

        {/*User Volunteer Route*/}
        <Route path="/userviewvolunteer" element={<UserViewVolunteer/>}/>
        <Route path="/uservolunteerform" element={<UserVolunteer/>}/>

      
      {/*Admin Occasional FW Request */}
      <Route path="/adminviewoccasionalFWrequest" element={<AdminViewOccasionlFWRequest/>}/>
      <Route path="/update/Occasional/:id" element={<AdminUpdateOccasionalFWRequest/>}/>
      <Route path="/delete/Occasional/:id" element={<AdminDeleteOccasionalFWRequest/>}/>

       {/*User Occasional FW Request */}
       <Route path="/userviewoccasionalFWrequest" element={<UserViewOccasionalFWRequest/>}/>

      {/*Admin View Regular FW Request */}
      <Route path="/adminviewregularFWRequest" element={<AdminViewRegularFWRequest/>}/>
      <Route path="/update/Regular/:id" element={<AdminUpdateRegularFWRequest/>}/>
      <Route path="/delete/Regular/:id" element={<AdminDeleteRegularFWRequest/>}/>

      {/*User View Regular FW Request */}
      <Route path="/userviewregularFWRequest" element={<UserViewRegularFWRequest/>}/>



      <Route path="/schedule" element={<Schedule/>}/>
      
    

      {/*Common.jsx Route*/}
      <Route path="/" element={<Common/>}/>
      <Route path="/commonregistration" element={<CommonRegistrationForm/>}/>
      <Route path="/login" element={<LoginForm/>}/>
      <Route path='/profile' element={<Profile/>}/>
      <Route path="/aboutUs" element={<About/>} />
      


      {/*Common Occasional Food Waste Request */}
      <Route path="/common/occasionalFWrequest" element={<OccasionalFWRequest/>}/>
      


      {/*Others-Data Route */}
      <Route path="/others" element={<Others/>}/>
      <Route path="/others/regularfwrequest" element={<RegularFWRequest/>}/> 

      {/*Others Members Route*/}
      <Route path="/others/omembersform" element={<OMember/>}/>
      <Route path="/others/oviewmembers" element={<OViewMember/>}/>
      <Route path="/others/oupdatememebers" element={<OUpdateMember/>}/>
      <Route path="/others/odeletemembers" element={<ODeleteMember/>}/>

      <Route path='/request' element={<FarmerRequest/>}/>

      {/*Report Route*/}
      <Route path="/reportvolunteer" element={<ReportViewVolunteer/>}/>
      <Route path="/reporttransporter" element={<ReportViewTransporter/>}/>




      </Routes>
    </Router>
    )}  



<div className='details'>

</div>

    </>
  )
}

export default App
