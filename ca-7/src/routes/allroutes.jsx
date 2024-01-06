// src/routes/AllRoutes.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Books from '../Components/books/books';
import RegisterForm from "../Components/register/register"


const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Books/>} />
      {/* giving appropriate path of each pages */}
      <Route path='/RegisterForm' element={<RegisterForm/>} />
      <Route path='/registersuccess' element={<div>Registration Successful!</div>} />
      <Route path="*" element={<Books/>} />
    </Routes>
  );
}

export default AllRoutes;
