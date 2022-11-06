import React from 'react';
import { Routes, Route } from 'react-router';
import Header from './components/Header/Header';
import Home from './pages/Home/components/Home';
import MonthStatistics from './pages/MonthStatistics/MonthStatistics';

function App() {
  return (
    <div className="container">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/month-statistics' element={<MonthStatistics />} />
      </Routes>
    </div>
  );
}

export default App;