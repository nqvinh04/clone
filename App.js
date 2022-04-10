import React from 'react';
import './App.css';
import Home from './containers/Home/home';
import ProductList from './containers/ProductListPage/productList';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/:slug' element={<ProductList />} />
      </Routes>
    </div>
  );
}

export default App;
