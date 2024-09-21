import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from './pages/Dashboard';
import User from './pages/User';
import AddUser from './pages/User/AddUser';
import CustomerList from './pages/Customer/CustomerList'
import CustomerAdd from './pages/Customer/CustomerAdd'
import MailBox from './pages/Mail/Mailbox'
import Compose from './pages/Mail/Compose'
import ComSug from './pages/Mail/ComplainSggestion'
import ProjectAdd from './pages/Project/ProjectAdd'
import StaffAdd from './pages/Staff/AddStaff'
import StaffList from './pages/Staff/StaffList'
import WarningStaffList from './pages/Staff/WarningStaff'
import ProjectList from './pages/Project/ProjectList'
import ServiceAdd from './pages/Project/ProjectAdd'
import AndroidAppDev from './pages/Service/ServiceList/AndroidAppDevelopment'
import WebAppDev from './pages/Service/ServiceList/WebApplicationDevolopment'
import PcAppDev from './pages/Service/ServiceList/PCAppDevolopment'
import DailyIncome from './pages/Income/DailyIncome'
import CapitalIncome from './pages/Income/CapitalIn'
import DailyExpense from './pages/Expense/DailyExpense'
import CapitalOut from './pages/Expense/CapitalOut'
import ExpensesReport from './pages/Report/Expenses'
import IncomeReport from './pages/Report/Income'

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/user" element={<User />} />
          <Route path="/user/add" element={<AddUser />} />
          <Route path="/mail/mailbox" element={<MailBox/>} />
          <Route path="/mail/mailbox/compose" element={<Compose/>} />
          <Route path="/project/projectAdd" element={<ProjectAdd/>} />
          <Route path="/project/projectList" element={<ProjectList/>} />
          <Route path="/mail/mailbox/ComSug" element={<ComSug/>} />
          <Route path="/customer/customerList" element={<CustomerList />} />
          <Route path="/customer/customerAdd" element={<CustomerAdd />} />
          <Route path="/staff/staffAdd" element={<StaffAdd/>} />
          <Route path="/staff/staffList" element={<StaffList/>} />
          <Route path="/staff/warningStaffList" element={<WarningStaffList/>} />
          <Route path="/service/serviceAdd" element={<ServiceAdd/>} />
          <Route path="/service/serviceList/AndroidAppDevolopment" element={<AndroidAppDev/>}/>
          <Route path="/service/serviceList/WebAppDevolopment" element={<WebAppDev/>} />
          <Route path="/service/serviceList/PcAppDevolopment" element={<PcAppDev/>} />
          <Route path="/income/dailyIncome" element={<DailyIncome/>} />
          <Route path="/income/capitalIncome" element={<CapitalIncome/>} />
          <Route path="/expense/DailyExpense" element={<DailyExpense/>} />
          <Route path="/expense/CapitalOut" element={<CapitalOut/>} />
          <Route path="/report/ExpensesReport" element={<ExpensesReport/>} />
          <Route path="/report/IncomeReport" element={<IncomeReport/>} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
