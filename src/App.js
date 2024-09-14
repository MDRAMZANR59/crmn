import * as React from 'react';
import Dashboard from './pages/Dashboard';
import Dashboard1 from './pages/Dashboard1';
import Dashboard2 from './pages/Dashboard2';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard1 />} />
          <Route path="/dashboard" element={<Dashboard2 />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
