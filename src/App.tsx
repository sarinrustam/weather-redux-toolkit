import React from 'react';
import { Routes, Route } from 'react-router';
import Header from './components/Header/Header';
import Popup from './components/Popup/Popup';
import Home from './pages/Home/Home';
import MonthStatistics from './pages/MonthStatistics/MonthStatistics';

function App() {
  return (
    <div className="global_container">
      <Popup />
      <div className="container">
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/month-statistics' element={<MonthStatistics />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
