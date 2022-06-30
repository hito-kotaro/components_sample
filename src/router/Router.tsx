import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CategoryPage from '../pages/CategoryPage';
import ComponentsPage from '../pages/ComponentsPage';
import HomePage from '../pages/HomePage';
import SubCategoryPage from '../pages/SubCategoryPage';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route
        path="/questboard"
        element={<CategoryPage title="Quest Board" />}
      />
      <Route
        path="/approverequest"
        element={<CategoryPage title="Approve Request" />}
      />
      <Route path="/timeline" element={<CategoryPage title="TimeLine" />} />
      <Route path="/teams" element={<CategoryPage title="Teams" />} />
      <Route path="/users" element={<CategoryPage title="Users" />} />
      <Route path="/jobs" element={<CategoryPage title="Jobs" />} />

      <Route path="/sub" element={<SubCategoryPage />} />
      <Route path="/component" element={<ComponentsPage />} />
    </Routes>
  );
};

export default Router;
