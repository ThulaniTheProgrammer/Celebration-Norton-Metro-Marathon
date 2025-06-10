import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Welcome from './pages/Welcome';
import About from './pages/About';
import WelcomeMan from './pages/WelcomeMan';
import WelcomeFacilitator from './pages/WelcomeFacilitator';
import WelcomeAdmin from './pages/WelcomeAdmin';
import SignUp from './pages/SignUp';
import Register from './pages/Register';
import Registration from './pages/Registration';
import RegisteredFacilitator from './pages/Table/RegisteredFacilitator';
import RegisterMan from './pages/Table/RegisterMan';
import UploadButton from './pages/bucket';
import RegisterFacilitator from './pages/RegisterFacilitator';
import Managean from './pages/Table/ManageMan';
import RegisteredMan from './pages/Table/RegisteredMan';
import Mobile from './pages/Mobile';
import Thankyou from './pages/Thankyou';
import Terms from './pages/Terms';
import Search from  './pages/Search';
import Banking from './pages/Banking';
import Participants from './pages/Participant';
import RegisterCyclist from './pages/RegisterCyclist';


function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Welcome/>}></Route>
      <Route path="About" element={<About/>}></Route>
      <Route path="Welcome" element={<Welcome/>}></Route>
      <Route path="WelcomeMan" element={<WelcomeMan/>}></Route>
      <Route path="WelcomeFacilitator" element={<WelcomeFacilitator/>}></Route>
      <Route path="WelcomeAdmin" element={<WelcomeAdmin/>}></Route>
      <Route path="SignUp" element={<SignUp/>}></Route>
      <Route path="Register" element={<Register/>}></Route>
      <Route path="Registration" element={<Registration/>}></Route>
      <Route path="RegisteredFacilitator" element={<RegisteredFacilitator/>}></Route>
      <Route path="RegisterMan" element={<RegisterMan/>}></Route>

      <Route path="UploadButton" element={<UploadButton/>}></Route>
      <Route path="RegisterFacilitator" element={<RegisterFacilitator/>}></Route>
      <Route path="Managean" element={<Managean/>}></Route>
      <Route path="RegisteredMan" element={<RegisteredMan/>}></Route>
      <Route path="Mobile" element={<Mobile/>}></Route>
      <Route path="Thankyou" element={<Thankyou/>}></Route>
      <Route path="Terms" element={<Terms/>}></Route>
      <Route path="Search" element={<Search/>}></Route>
      <Route path="Banking" element={<Banking/>}></Route>
      <Route path="Participants" element={<Participants/>}></Route>
      <Route path="RegisterCyclist" element={<RegisterCyclist/>}></Route>


      

      </Routes>
    </Router>
  );
}

export default App;
