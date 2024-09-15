import * as React from 'react';
import Dashboard from './pages/Dashboard';
import User from './pages/User';
import AddUser from './pages/User/AddUser';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/user" element={<User />} />
          <Route path="/user/add" element={<AddUser />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
