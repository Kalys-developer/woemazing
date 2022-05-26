import React from 'react';
import Garantya from '../pages/garantya/garantya'
import Home from '../pages/home/home'
import Contact from '../pages/contact/contact'
import {Routes, Route, useLocation,} from 'react-router-dom'
import Header from './header/header.js'
import Footer from './footer/footer.js'
import Oplata from '../pages/oplata/oplata'
import Credit from '../pages/credit/credit'
import Dostavka from '../pages/dostavka/dostavka'
import Notfound from '../pages/notfound/not'
import Ustanovka from '../pages/ustanovka/ustanovka';











const Loyout = () => {
    const location = useLocation()
    return (
        <div>
          <Header/>
          
          <Routes>
           <Route path="/home" element={<Home/>}/>
           <Route path="/contact" element={<Contact/>}/>
           <Route path="/credit" element={<Credit/>}/>
           <Route path="/dostavka" element={<Dostavka/>}/>
           <Route path="/oplata" element={<Oplata/>}/>
           <Route path="/garantya" element={<Garantya/>}/>
           <Route path="/ustanovka" element={<Ustanovka/>}/>
           <Route path="*" element={<Notfound/>}/>
           
          </Routes>
          <Footer/>
          {location.pathname === ''
          || location.pathname === '/shop'
          || location.pathname === '/brand'
          || location.pathname === '/cart'
          || location.pathname === '/contact'
          ? <Footer/> : ''}
        </div>
    );
};

export default Loyout;