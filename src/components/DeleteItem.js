import React from 'react';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import AdminNavbar from './AdminNavbar';
import { MenuData } from './MenuData';

export const DeleteItem = () => {

    var items=[];
    {MenuData.map((item)=> items.push(item.name))}
    const [item, Setitem]= useState(items);

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
        <form>
        <select className='drop-list' value={item} onChange={(e) => Setitem(e.target.value)}>
            {items.map((value) => (<option value={value} key={value}>{value}</option>))}
        </select>
        </form>
        <br></br><br></br>

        <Button variant='outline-warning' onClick={handleSubmit}>Delete</Button>
       
    </div>
    </center>
  );
}
