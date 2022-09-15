import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Homepage from './Homepage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminHome from './AdminHome';
import AdminTable from './AdminTable';
import Cart from './Cart';
import { StaffInfo } from './StaffInfo';
import { AddItem } from './AddItem';
import { DeleteItem } from './DeleteItem';
import { AdminBill } from './AdminBill';
import { CustomerBill } from './CustomerBill'; 
import Menu from './Menu';
import {Inventory} from './Inventory';
import Login from './Login';
function App() {
  return (
    <div className=''>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Menu/>}/>
        {/*<Route path='/user/menu' element={<Menu/>}/> */}
        <Route path='adminhome/editinventory' element={<Inventory/>}/>
        <Route path='adminhome/editinventory/add' element={<AddItem/>}/>
        <Route path='adminhome/editinventory/delete' element={<DeleteItem/>}/>
        <Route path='/adminhome' element={<AdminHome/>}/>
        <Route path='/user/cart' element={<Cart/>}/>
        <Route path='/user/bill' element={<CustomerBill/>}/>
        <Route path='/adminhome/showtables' element={<AdminTable/>}/>
        <Route path='/adminhome/staff' element={<StaffInfo/>}/>
        <Route path='/adminhome/showtables/bill' element={<AdminBill/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
   </BrowserRouter>
   </div>
   
  );
}

export default App;
