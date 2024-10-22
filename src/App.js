import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from './pages/Dashboard';
import MakeSecondaryUser from './pages/User/MakeSecondaryUser';
import UserList from './pages/User/UserList';
import UserProfile from './pages/User/Profile';
import EditSecondaryUser from './pages/User/EditSecondaryUser';
import CustomerList from './pages/Customer/CustomerList'
import CustomerAdd from './pages/Customer/CustomerAdd'
import CuatomerNote from './pages/CustomerNote/AddNote/Index';
import MailBox from './pages/Mail/Mailbox'
import Compose from './pages/Mail/Compose'
import ComSug from './pages/Mail/ComplainSggestion'
import ProjectAdd from './pages/Project/ProjectAdd'
import ProjectList from './pages/Project/ProjectList'
import ProjectTask from './pages/Project/ProjectTask';
import ProjectTaskList from './pages/Project/ProjectTaskList';
import StaffAdd from './pages/Staff/AddStaff'
import StaffList from './pages/Staff/StaffList'
import MailStaff from './pages/Staff/StaffList/MailStaff'
import WarningStaffList from './pages/Staff/WarningStaff'
import WarningNotice from './pages/Staff/WarningStaff/warningNotice'
import RushMail from './pages/Project/RushMail';
import ServiceAdd from './pages/Service/ServiceAdd'
import AndroidAppDev from './pages/Service/ServiceList/AndroidAppDevelopment'
import WebAppDev from './pages/Service/ServiceList/WebApplicationDevolopment'
import PcAppDev from './pages/Service/ServiceList/PCAppDevolopment'
import DailyIncome from './pages/Income/DailyIncome'
import DailyExpense from './pages/Expense/DailyExpense'
import CapitalOut from './pages/Expense/CapitalOut'
import ExpensesReport from './pages/Report/Expenses'
import IncomeReport from './pages/Report/Income'
import CashTransfer from './pages/Report/BalanceTransfer'
import TransfaringProject from './pages/Project/TransfarinProject'
import CancalingProject from './pages/Project/CancalingProject'
import Invoice from './pages/Project/Invoice/invoice';
import Review from './pages/Project/Review';

// import Register from './pages/Register';
import Login from './pages/Login';
import Protected from './components/protected';

function App() {
  const isSignedIn = localStorage.getItem("access_token") || false;
  return (
    <BrowserRouter>
        <Routes>
        {/* <Route path="/register" element={<Register />} /> */}
        <Route path="/login" element={<Login />} />
          <Route path="/" element={<Dashboard />} />
          <Route path="/makeSecondaryUser" element={<MakeSecondaryUser />} />
          <Route path="/user/userList" element={<UserList />} />
          <Route path="/user/userProfile" element={<UserProfile />} />
          <Route path="/user/editSecondaryUser" element={<EditSecondaryUser/>} />
          <Route path="/mail/mailbox" element={<MailBox/>} />
          <Route path="/mail/mailbox/compose" element={<Compose/>} />
          <Route path="/project/projectAdd" element={<ProjectAdd/>} />
          <Route path="/project/projectList" element={<ProjectList/>} />
          <Route path="/project/projectTask" element={<ProjectTask/>} />
          <Route path="/project/projectTaskList" element={<ProjectTaskList/>} />
          <Route path="/project/rushMail" element={<RushMail/>} />
          <Route path="/mail/mailbox/ComSug" element={<ComSug/>} />
          <Route path="/customer/customerAdd" element={<CustomerAdd />} />
          <Route path="/customer/customerList" element={<CustomerList />} />
          <Route path="/customer/edit/:id" element={<CustomerAdd />} />
          <Route path="/customerNote/addNote" element={<CuatomerNote />} />
          <Route path="/staff/staffAdd" element={<StaffAdd/>} />
          <Route path="/staff/edit/:id" element={<StaffAdd/>} />
          <Route path="/staff/staffList" element={<StaffList/>} />
          <Route path="/staff/staffList/MailStaff" element={<MailStaff/>} />
          <Route path="/staff/warningStaffList" element={<WarningStaffList/>} />
          <Route path="/staff/warningStaff/WarningNotice" element={<WarningNotice/>} />
          <Route path="/service/serviceAdd" element={<ServiceAdd/>} />
          <Route path="/service/serviceList/AndroidAppDevolopment" element={<AndroidAppDev/>}/>
          <Route path="/service/serviceList/WebAppDevolopment" element={<WebAppDev/>} />
          <Route path="/service/serviceList/PcAppDevolopment" element={<PcAppDev/>} />
          <Route path="/income/DailyIncome" element={<DailyIncome/>} />
          <Route path="/expense/DailyExpense" element={<DailyExpense/>} />
          <Route path="/expense/CapitalOut" element={<CapitalOut/>} />
          <Route path="/report/ExpensesReport" element={<ExpensesReport/>} />
          <Route path="/report/IncomeReport" element={<IncomeReport/>} />
          <Route path="/report/CashTransfer" element={<CashTransfer/>} />
          <Route path="/project/TransfaringProject" element={<TransfaringProject/>} />
          <Route path="/project/CancalingProject" element={<CancalingProject/>} />
          <Route path="/project/invoice" element={<Invoice/>} />
          <Route path="/project/review" element={<Review/>} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
