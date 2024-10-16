import React from 'react';
// React Router components
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// Pages (views)
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
// Components
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className='overflow-hidden'>
      <Router>
        <Header />
        {/* Routes for different pages */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/product/:id' element={<ProductDetails />} />
        </Routes>

        <Sidebar />
        <Footer />
      </Router>
    </div>
  );
};

export default App;
