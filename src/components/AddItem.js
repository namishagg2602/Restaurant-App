import React from 'react';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import AdminNavbar from './AdminNavbar';

export const AddItem = () => {

    const [item, Setitem]= useState('item');
    const [price, Setprice] = useState('0');
    const [quantity, Setquantity]= useState('0');

    const handleSubmit = () =>
    {
        // send the data to SQL
    }

  return (
    <center>
        <AdminNavbar/>
    <div className='additem-block'>
       
        <h3>Add Item</h3>
        <br></br><br></br>
        
        <label>Item  :  <input className='item-input' value={item} onChange={(e)=> Setitem(e.target.value)}></input></label>
        <br></br><br></br>
        <label>Price  :  <input className='item-input' value={price} onChange={(e)=> Setprice(e.target.value)}></input></label>
        <br></br><br></br>
        <label>Quantity  :  <input className='item-input' value={quantity} onChange={(e)=> Setquantity(e.target.value)}></input></label>
        <br></br><br></br>

        <Button variant='outline-warning' onClick={handleSubmit}>Add</Button>
       
    </div>
    </center>
  );
}
