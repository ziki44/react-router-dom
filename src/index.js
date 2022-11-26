import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import HomePage from 'components/pages/HomePage/HomePage';
import AddMessagePage from 'components/pages/AddMessagePage/AddMessagePage';
import AboutPage from 'components/pages/AboutPage/AboutPage';
import EditPage from 'components/pages/EditPage/EditPage';

import './index.css';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: '/add',
    element: <AddMessagePage />
  },
  {
    path: '/about',
    element: <AboutPage />
  },
  {
    path: '/edit/:messageId',
    element: <EditPage />
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>
);