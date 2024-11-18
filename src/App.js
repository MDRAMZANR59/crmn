import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from './pages/Dashboard';

import AddUser from './pages/User/User';
import UserList from './pages/User/UserList';
import UserProfile from './pages/User/Profile';

import CustomerList from './pages/Customer/CustomerList'
import CustomerAdd from './pages/Customer/CustomerAdd'

import CuatomerNote from './pages/CustomerNote/AddNote/Index';
import NoteList from './pages/CustomerNote/NoteList';

import MailBox from './pages/Mail/Mailbox'
import Compose from './pages/Mail/Compose';
import ComSug from './pages/Mail/ComplainSggestion'

import ProjectAdd from './pages/Project/ProjectAdd'
import ProjectList from './pages/Project/ProjectList'
import Invoice from './pages/Project/Invoice/invoice';
import Review from './pages/Project/Review';

import ProjectTask from './pages/Project/ProjectTask';
import ProjectTaskList from './pages/Project/ProjectTaskList';

import MailStaff from './pages/Staff/StaffList/MailStaff'
import WarningStaffList from './pages/Staff/WarningStaff'
import WarningNotice from './pages/Staff/WarningStaff/warningNotice'

import RushMail from './pages/Project/RushMail';

import ServiceAdd from './pages/Service/ServiceAdd'
import AndroidAppDev from './pages/Service/ServiceList/AndroidAppDevelopment'
import WebAppDev from './pages/Service/ServiceList/WebApplicationDevolopment'
import PcAppDev from './pages/Service/ServiceList/PCAppDevolopment'

import ExpensesReport from './pages/Report/Expenses'
import IncomeReport from './pages/Report/Income'


import CancalingProject from './pages/Project/CancalingProject'
import DeliveryProject from './pages/Project/DeliveryProject';


import Register from './pages/Register';
import Login from './pages/Login';
import Protected from './components/protected'

function App() {
  const isSignedIn = localStorage.getItem("access_token") || false;
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />

            <Route path="/" element={ <Protected isSignedIn={isSignedIn}><Dashboard /> </Protected>} />
      
            <Route path="/user/addUser" element={<Protected isSignedIn={isSignedIn}><AddUser /></Protected>} />
            <Route path="/user/userList" element={<Protected isSignedIn={isSignedIn}><UserList /></Protected>} />
            <Route path="/user/userProfile" element={<Protected isSignedIn={isSignedIn}><UserProfile /></Protected>} />
            <Route path="/user/edit/:id" element={<Protected isSignedIn={isSignedIn}><AddUser /></Protected>} />

            <Route path="/mail/mailbox" element={<Protected isSignedIn={isSignedIn}><MailBox /></Protected>} />
            <Route path="/mail/mailbox/compose" element={<Protected isSignedIn={isSignedIn}><Compose /></Protected>} />
            <Route path="/mail/mailbox/compose/edit/:id" element={<Protected isSignedIn={isSignedIn}><Compose /></Protected>} />

            <Route path="/project/projectAdd" element={<Protected isSignedIn={isSignedIn}><ProjectAdd /></Protected>} />
            <Route path="/project/projectList" element={<Protected isSignedIn={isSignedIn}><ProjectList /></Protected>} />

            <Route path="/project/projectTask" element={<Protected isSignedIn={isSignedIn}><ProjectTask /></Protected>} />
            <Route path="/project/projectTaskList/:projectId" element={<Protected isSignedIn={isSignedIn}><ProjectTaskList /></Protected>} />
            <Route path="/project/edit/:id" element={<Protected isSignedIn={isSignedIn}><ProjectTask /></Protected>} />

            <Route path="/project/rushMail" element={<Protected isSignedIn={isSignedIn}><RushMail /></Protected>} />

            <Route path="/mail/mailbox/ComSug" element={<Protected isSignedIn={isSignedIn}><ComSug /></Protected>} />

            <Route path="/customer/customerAdd" element={<Protected isSignedIn={isSignedIn}><CustomerAdd /></Protected>} />
            <Route path="/customer/customerList" element={<Protected isSignedIn={isSignedIn}><CustomerList /></Protected>} />
            <Route path="/customer/edit/:id" element={<Protected isSignedIn={isSignedIn}><CustomerAdd /></Protected>} />

            <Route path="/customerNote/addNote" element={<Protected isSignedIn={isSignedIn}><CuatomerNote /></Protected>} />
            <Route path="/customerNote/noteList" element={<Protected isSignedIn={isSignedIn}><NoteList /></Protected>} />
            <Route path="/customerNote/edit/:id" element={<Protected isSignedIn={isSignedIn}><CuatomerNote /></Protected>} />

            <Route path="/staff/warningStaffList" element={<Protected isSignedIn={isSignedIn}><WarningStaffList /></Protected>} />
            <Route path="/staff/warningStaff/WarningNotice" element={<Protected isSignedIn={isSignedIn}><WarningNotice /></Protected>} />

            <Route path="/service/serviceAdd" element={<Protected isSignedIn={isSignedIn}><ServiceAdd /></Protected>} />
            <Route path="/service/serviceList/AndroidAppDevolopment" element={<Protected isSignedIn={isSignedIn}><AndroidAppDev /></Protected>} />
            <Route path="/service/serviceList/WebAppDevolopment" element={<Protected isSignedIn={isSignedIn}><WebAppDev /></Protected>} />
            <Route path="/service/serviceList/PcAppDevolopment" element={<Protected isSignedIn={isSignedIn}><PcAppDev /></Protected>} />

            <Route path="/report/ExpensesReport" element={<Protected isSignedIn={isSignedIn}><ExpensesReport /></Protected>} />
            <Route path="/report/IncomeReport" element={<Protected isSignedIn={isSignedIn}><IncomeReport /></Protected>} />

            <Route path="/project/CancalingProject" element={<Protected isSignedIn={isSignedIn}><CancalingProject /></Protected>} />
            <Route path="/project/DeliveryProject" element={<Protected isSignedIn={isSignedIn}><DeliveryProject /></Protected>} />
            <Route path="/project/invoice" element={<Protected isSignedIn={isSignedIn}><Invoice /></Protected>} />

            <Route path="/project/review" element={<Protected isSignedIn={isSignedIn}><Review /></Protected>} />
            <Route path="/project/review/:projectId" element={<Protected isSignedIn={isSignedIn}><Review /></Protected>} />

        </Routes>
    </BrowserRouter>
  );
}

export default App;
