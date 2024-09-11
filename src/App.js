import * as React from 'react';
import Dashboard from './pages/Dashboard';
import Dashboard1 from './pages/Dashboard1';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard1 />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
