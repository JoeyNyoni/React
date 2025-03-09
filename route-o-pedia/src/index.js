import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './Home';
import About from './About';
import CryptoDetail from './CryptoDetail';
import NotFound from './NotFound';

import CreateProduct from './Pages/CreateProduct';
import Product from './Pages/Product';
import ProductDetails from './Pages/ProductDetails';
import ProductList from './Pages/ProductList';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        
        <Route 
          path="/crypto/:cryptoSymbol" 
          element={<CryptoDetail />} 
        /> {/* Add a route parameter */}
        
        <Route 
          path="/crypto/:cryptoSymbol/:id" 
          element={<CryptoDetail />} 
        /> {/* Add a route parameter */}

        <Route path="/product"> {/* Add a nested route */}
          <Route index element={<Product />} />
          <Route path="create" element={<CreateProduct />} />
          <Route path="details/:id" element={<ProductDetails />} />
          <Route path="list" element={<ProductList />} />
        </Route>
        
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
