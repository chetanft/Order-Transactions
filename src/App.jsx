import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import SummaryPage from './pages/SummaryPage';
import OrderDetailPage from './pages/OrderDetailPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<SummaryPage />} />
            <Route path="/order/:orderId" element={<OrderDetailPage />} />
            <Route path="/order" element={<OrderDetailPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}


export default App;
