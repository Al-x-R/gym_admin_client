import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from '../components/Dashboard';
import Auth from '../components/Auth';

export default () => {
  return (
      <Routes>
        <Route path="/login" element={<Auth/>} />
        <Route path="/" element={<Dashboard/>} />
      </Routes>
  );
}