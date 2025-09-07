import React from 'react';
import { BrowserRouter as Router, useLocation } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import Navbar from './components/navbar';

// Wrapper to allow hooks like useLocation outside Router
function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

function App() {
  const location = useLocation();

  // Define paths where Navbar should be hidden
  const hideNavbarPaths = [
    '/login',
    '/signup',
    '/forgotpassword',
    '/admin',
    '/adminpanel',
    '/dashboard',
    '/orders',
    '/users',
    '/settings',
    '/reports',
    '/notifications'
  ];

  // Check if current path matches one of the above
  const shouldHideNavbar = hideNavbarPaths.some(path =>
    location.pathname.startsWith(path)
  );

  return (
    <>
      {!shouldHideNavbar && <Navbar />}
      <main>
        <AppRoutes />
      </main>
    </>
  );
}

export default AppWrapper;
