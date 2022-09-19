import React from 'react';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import AdminNavbar from './AdminNavbar';
import Footer from './Footer';

export const AddItem = () => {

    const [item_name, Setitem]= useState('item');
    const [item_price, Setitem_price] = useState('0');
    const [qty_avl, Setqty_avl]= useState('0');
    const [item_category, Setitem_category]= useState('starters');
    const [item_desc, Setitem_desc]= useState('null');

    const handleSubmit = (e) =>
    {
      e.preventDefault()
      const items = {item_category, item_name, item_desc, item_price, qty_avl}
      console.log(items)
      fetch("http://localhost:8080/menu/add",{
          method:"POST",
          headers:{"Content-Type":"application/json"},
          body:JSON.stringify(items)
      }).then(()=>{
          console.log("New item added")
      })
    }

  return (
    <>
    <center>
        <AdminNavbar/>
    
    <div className='additem-block'>
       
        <h3>Add Item</h3>
        <br></br><br></br>
        
        <label>Item  :  <input className='item-input' value={item_name} onChange={(e)=> Setitem(e.target.value)}></input></label>
        <br></br><br></br>
        <label>item_price  :  <input className='item-input' value={item_price} onChange={(e)=> Setitem_price(e.target.value)}></input></label>
        <br></br><br></br>
        <label>qty_avl  :  <input className='item-input' value={qty_avl} onChange={(e)=> Setqty_avl(e.target.value)}></input></label>
        <br></br><br></br>
        <label>item_category  :  <input className='item-input' value={item_category} onChange={(e)=> Setitem_category(e.target.value)}></input></label>
        <br></br><br></br>
        <label>item_desc  :  <input className='item-input' value={item_desc} onChange={(e)=> Setitem_desc(e.target.value)}></input></label>
        <br></br><br></br>

        <Button variant='outline-warning' onClick={handleSubmit}>Add</Button>
       
    </div>
    </center>
    <Footer></Footer>
    </>
  );
}
