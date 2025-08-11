import React, { useState } from 'react';
import './App.css';
import { Provider } from 'react-redux';
import Store from './components/ShoesStore/store';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import SearchBar from './components/NavBar/SearchBar';
import ShoesDisplay from './components/shoesDisplay/ShoesDisplay';
import Cart from './components/Cart/Cart';
import PaymentPage from './components/Payment/PaymentPage'; 
import Footer from './components/Footer/Footer';
import PageNotFound from './components/PageNotFound/PageNotFound';

function App() {
  const [search, setSearch] = useState('');

  return (
    <div style={{background:'#6c757d'}}>
    <Provider store={Store}>
        <NavBar />
        <Routes>
         <Route path="/" element={
        <>
        <SearchBar search={search} setSearch={setSearch} /> 
        <Cart />
        <ShoesDisplay search={search}/>    
        </>
      } />
        <Route path="/payment" element={<PaymentPage/>} />
        <Route path='*' element={<PageNotFound/>} />
        </Routes>
        <Footer/>
    </Provider>
    </div>
  );
}

export default App;
