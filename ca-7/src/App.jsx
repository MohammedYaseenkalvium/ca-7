import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './Components/navbar/navbar';
import AllRoutes from './routes/allroutes';


function App() {
  return (
    <Router>
      <Navbar />
      <AllRoutes />  
    </Router>
  );
}

export default App;