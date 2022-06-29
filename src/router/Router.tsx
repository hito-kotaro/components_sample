import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ComponentsPage from '../pages/ComponentsPage';
import HomePage from '../pages/HomePage';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/component" element={<ComponentsPage />} />
    </Routes>
  );
};

export default Router;
