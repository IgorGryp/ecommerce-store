// The main app component sets up routes and includes the header, sidebar and footer.
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
        {/* Route definitions for pages */}
        <Routes>
          <Route path='/' element={<Home />} />
          {/* Dynamic route to render the ProductDetails component  whenever the URL matches the pattern /product/:id */}
          <Route path='/product/:id' element={<ProductDetails />} />
        </Routes>
        <Sidebar /> {/* Sidebar for cart */}
        <Footer />
      </Router>
    </div>
  );
};

export default App;
