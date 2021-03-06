import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
// @ts-ignore
import SlideRoutes from 'react-slide-routes';
import CategoryPage from '../pages/CategoryPage';
import ComponentsPage from '../pages/ComponentsPage';
import HomePage from '../pages/HomePage';
import SubCategoryPage from '../pages/SubCategoryPage';
import TestPage from '../pages/TestPage';

const Router = () => {
  const location = useLocation();
  return (
    <SlideRoutes location={location} duration={500}>
      <Route path="/" element={<HomePage />} />
      <Route path="/test" element={<TestPage />} />
      <Route path="/questboard" element={<CategoryPage title="Quest Board" />} />
      <Route path="/approverequest" element={<CategoryPage title="Approve Request" />} />
      <Route path="/timeline" element={<CategoryPage title="TimeLine" />} />
      <Route path="/teams" element={<CategoryPage title="Teams" />} />
      <Route path="/users" element={<CategoryPage title="Users" />} />
      <Route path="/jobs" element={<CategoryPage title="Jobs" />} />
      <Route path="/sub" element={<SubCategoryPage />} />
      <Route path="/component" element={<ComponentsPage />} />
    </SlideRoutes>
  );
};

export default Router;
