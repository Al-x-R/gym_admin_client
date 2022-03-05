import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginForm from '../components/LoginForm/LoginForm';

export default () => {
  return (
      <Routes>
        <Route path="/login" element={<LoginForm/>} />
      </Routes>
  );
}