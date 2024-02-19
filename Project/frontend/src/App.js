import React from 'react';
import Dashboard from './dashboard/Dashboard';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserDetails from './dashboard/UserDetails';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/users/:userId" element={<UserDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
