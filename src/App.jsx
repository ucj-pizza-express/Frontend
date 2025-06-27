// import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import Navbar from './components/navbar'; // if using

function App() {
  return (
    <Router>
    <Navbar/>
      <main>
        <AppRoutes />
      </main>
    </Router>
  );
}

export default App;
