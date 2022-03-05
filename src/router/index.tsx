import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginForm from '../components/LoginForm/LoginForm';
import Dashboard from '../components/Dashboard';

export default () => {
  return (
      <Routes>
        <Route path="/login" element={<LoginForm/>} />
        <Route path="/" element={<Dashboard/>} />
      </Routes>
  );
}