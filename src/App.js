import * as React from 'react';
import Dashboard from './pages/Dashboard';
import User from './pages/User';
import AddUser from './pages/User/AddUser';
import CustomerList from './pages/Customer/CustomerList'
import CustomerAdd from './pages/Customer/CustomerAdd'
import MailBox from './pages/Mail/Mailbox'
import Compose from './pages/Mail/Compose'
import ComSug from './pages/Mail/ComplainSggestion'
import ProjectAdd from './pages/Project/ProjectAdd'
import ProjectList from './pages/Project/ProjectList'
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";

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
        </Routes>
    </BrowserRouter>
  );
}

export default App;
