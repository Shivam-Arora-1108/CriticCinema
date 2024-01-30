import React, { useState, useEffect, useContext } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ScreenOne from './components/screen_one';
import ScreenTwo from './components/screen_two';
import BookTicket from './components/bookticketForm';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <main>
        <Routes>
          <Route path="/" element={< ScreenOne />} />
          <Route path="/specificShowData" element={< ScreenTwo />} />
          <Route path="/BookTicket" element={< BookTicket />} />
        </Routes>
      </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
