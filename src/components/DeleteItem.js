import React from 'react';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import AdminNavbar from './AdminNavbar';

export const DeleteItem = () => {

    const [item, Setitem]= useState('item');

    const handleSubmit = () =>
    {
        // send the data to SQL
    }

  return (
    <center>
        <AdminNavbar/>
    <div className='additem-block'>
       
        <h3>Delete Item</h3>
        <br></br><br></br>
        
        <label>Item  :  <input className='item-input' value={item} onChange={(e)=> Setitem(e.target.value)}></input></label>
        <br></br><br></br>

        <Button variant='outline-warning' onClick={handleSubmit}>Delete</Button>
       
    </div>
    </center>
  );
}
