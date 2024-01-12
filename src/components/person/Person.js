import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Contact from './Contact';
import Document from './Document';
import Insurance from './Insurance';
import Profile from './Profile';

const person = () =>{
  return ( 
     <div>
      <Routes>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/document" element={<Document />}></Route>
          <Route path="/insurance" element={<Insurance />}></Route>
          <Route path="/profile" element={<Profile/>}></Route>
      </Routes>
      </div>
   
  );
}

export default person