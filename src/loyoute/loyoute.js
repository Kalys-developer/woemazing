import React from 'react';
import { Routes, Route } from 'react-router-dom'
import Topbar from '../loyout/topbar.jsx'
import Sidebar from '../components/sidebar/sidebar.jsx'
import Homes from '../pages/homes.jsx'
import User from '../pageses/hames/user.jsx'
import Userlist from '../pageses/hames/userlist.jsx'
import NewUser from '../pageses/hames/newUser.jsx'
import Products from '../pageses/hames/products.jsx'
import NewProduct from '../pageses/hames/newProduct.jsx'


const Loyoute = () => {
    return (
        <div>
            <Topbar />
            <div className="container2">
             <Sidebar />
             <Routes>
            
  <Route path="/" element={<Homes/>}/>
  <Route path="/userlist" element={<Userlist/>}/>
  <Route path="/user/:userId" element={<User/>}/>
  <Route path="/newUser" element={<NewUser/>}/>
  <Route path="/products" element={<Products/>}/>
  <Route path="/product/:productid" element={<NewUser/>}/>
  <Route path="/newproduct" element={<NewProduct/>}/>
             
  
  
  
  
  
</Routes>
               
               
               
               
               </div> 
              
             
             
             
             
            
            
            
            
            
            
            
            
            
            
 
            
        </div>
    );
};

export default Loyoute;