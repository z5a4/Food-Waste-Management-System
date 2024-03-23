import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


{/*Admin-BioGas-Import*/}
import Admin from './components/Admin/Admin'
import AdminViewBiogas from './components/Admin/Biogas/pages/ViewBiogas'
import AdminBiogasForm from './components/Admin/Biogas/pages/BioGasForm'
import AdminUpdateBiogasForm from './components/Admin/Biogas/pages/UpdateBiogas'
import AdminDeleteBiogasForm from './components/Admin/Biogas/pages/DeleteBiogas'

{/*Admin-Donation-Import*/}
import AdminViewDonation from './components/Admin/Donation/pages/ViewDonation'
import AdminDonationForm from './components/Admin/Donation/pages/DonationForm'
import AdminUpdateDonationForm from './components/Admin/Donation/pages/UpdateDonation'
import AdminDeleteDonationForm from './components/Admin/Donation/pages/DeleteDonation'

{/*Admin-Farmer-Import*/}
import AdminViewFarmer from './components/Admin/Farmer/pages/ViewFarmer'
import AdminFarmerForm from './components/Admin/Farmer/pages/FarmerForm'
import AdminUpdateFarmer from './components/Admin/Farmer/pages/UpdateFarmer'
import AdminDeleteFarmer from './components/Admin/Farmer/pages/DeleteFarmer'

{/*Admin-Member-Import*/}
import AdminViewMember from './components/Admin/Member/pages/ViewMember'
import AdminMemberForm from './components/Admin/Member/pages/Member'
import AdminUpdateMember from './components/Admin/Member/pages/UpdateMember'
import AdminDeleteMember from './components/Admin/Member/pages/DeleteMember'

{/*Admin-Registration-Import*/}
import AdminViewRegistration from './components/Admin/Registration/pages/ViewRegistration'
//import AdminRegistrationForm from './components/common/Registration/pages/Member'
import AdminUpdateRegistration from './components/Admin/Registration/pages/UpdateReg'
import AdminDeleteRegistration from './components/Admin/Registration/pages/DeleteReg'


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


{/*Admin-Volunteer-Import*/}
import AdminViewVolunteer from './components/Admin/Volunteer/pages/ViewVolunteer'
import AdminVolunteerForm from './components/Admin/Volunteer/pages/Volunteer'
import AdminUpdateVolunteer from './components/Admin/Volunteer/pages/UpdateVolunteer'
import AdminDeleteVolunteer from './components/Admin/Volunteer/pages/DeleteVolunteer'


{/*Admin-Occasional FW Request */}
import AdminViewOccasionlFWRequest from './components/Admin/AdminOccasionalFWRequest/pages/ViewOccasionalFWRequest'
 
{/*Admin-Regular FW Request */}
import AdminViewRegularFWRequest from './components/Admin/AdminRegularFWRequest/pages/AdminViewRegularFWRequest';


{/*Common.jsx Import*/}
import Common from './components/common/Common';
import CommonRegistrationForm from './components/common/CommonRegistration/pages/CommonRegistration';
import LoginForm from './components/common/Login/Login';
import Profile from './components/others/Profile';
import About from './components/common/About Us/About';




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




function App() {
  

  return (
    <>
    <Router>
      <Routes>

        {/*Admin Bio-Gas Route*/}
        <Route path="/admin" element={<Admin/>} />
        <Route path="/adminviewbiogas" element={<AdminViewBiogas/>}/>
        <Route path="/adminbiogasform" element={<AdminBiogasForm/>}/>
        <Route path="/update/biogas/:id" element={<AdminUpdateBiogasForm/>}/>
        <Route path="/delete/biogas/:id" element={<AdminDeleteBiogasForm/>}/>


        {/*Admin Donation Route*/}
        <Route path="/adminviewdonation" element={<AdminViewDonation/>}/>
        <Route path="/admindonationform" element={<AdminDonationForm/>}/>
        <Route path="/update/Donation/:id" element={<AdminUpdateDonationForm/>}/>
        <Route path="/delete/Donation/:id" element={<AdminDeleteDonationForm/>}/>


        {/*Admin Farmer Route*/}
        <Route path="/adminviewfarmer" element={<AdminViewFarmer/>}/>
        <Route path="/adminfarmerform" element={<AdminFarmerForm/>}/>
        <Route path="/update/farmers/:id" element={<AdminUpdateFarmer/>}/>
        <Route path="/delete/farmers/:id" element={<AdminDeleteFarmer/>}/>

        {/*Admin Member Route*/}
        <Route path="/adminviewmember" element={<AdminViewMember/>}/>
        <Route path="/adminmemberform" element={<AdminMemberForm/>}/>
        <Route path="/update/members/:id" element={<AdminUpdateMember/>}/>
        <Route path="/delete/members/:id" element={<AdminDeleteMember/>}/>

        {/*Admin Registration Route*/}
        <Route path="/adminviewregistration" element={<AdminViewRegistration/>}/>
        {/*  <Route path="/adminmemberform" element={<AdminMemberForm/>}/>   */}
        <Route path="/update/:id" element={<AdminUpdateRegistration/>}/>
        <Route path="/delete/:id" element={<AdminDeleteRegistration/>}/>

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


      {/*Admin Volunteer Route*/}
        <Route path="/adminviewvolunteer" element={<AdminViewVolunteer/>}/>
        <Route path="/adminvolunteerform" element={<AdminVolunteerForm/>}/>
        <Route path="/update/volunteer/:id" element={<AdminUpdateVolunteer/>}/>
        <Route path="/delete/volunteer/:id" element={<AdminDeleteVolunteer/>}/>
      
      {/*Admin Occasional FW Request */}
      <Route path="/adminviewoccasionalFWrequest" element={<AdminViewOccasionlFWRequest/>}/>
      
      {/*Admin View Regular FW Request */}
      <Route path="/adminviewregularFWRequest" element={<AdminViewRegularFWRequest/>}/>



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





      </Routes>
    </Router>
     



<div className='details'>

</div>
    </>
  )
}

export default App
