import React from 'react';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import AdminNavbar from './AdminNavbar';
import Footer from './Footer';

export const AddItem = () => {

    const [item_name, Setitem]= useState('');
    const [item_price, Setitem_price] = useState();
    const [qty_avl, Setqty_avl]= useState();
    const [item_category, Setitem_category]= useState('');
    const [item_desc, Setitem_desc]= useState('');

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
        <table>
        <thead></thead>
        <tbody>
        <tr>
        <label><td width="150px">Item    </td><td width="200px"><input className='item-input' value={item_name} onChange={(e)=> Setitem(e.target.value)}></input></td></label>
        <br></br><br></br>
        </tr>
        <tr>
        <label><td width="150px">Price    </td><td width="200px"><input className='item-input' value={item_price} onChange={(e)=> Setitem_price(e.target.value)}></input></td></label>
        <br></br><br></br>
        </tr>
        <tr>
        <label><td width="150px">Qty Avl   </td><td width="200px"><input className='item-input' value={qty_avl} onChange={(e)=> Setqty_avl(e.target.value)}></input></td></label>
        <br></br><br></br>
        </tr>
        <tr>
        <label><td width="150px">Category    </td><td width="200px"><input className='item-input' value={item_category} onChange={(e)=> Setitem_category(e.target.value)}></input></td></label>
        <br></br><br></br>
        </tr>
        {/* <tr>
        <label><td width="150px">Description    </td><td width="200px"><input className='item-input' value={item_desc} onChange={(e)=> Setitem_desc(e.target.value)}></input></td></label>
        <br></br><br></br>
        </tr> */}

        </tbody>
        </table>
        
        <Button variant='outline-warning' onClick={handleSubmit}>Add</Button>
       
    </div>
    </center>
    <Footer></Footer>
    </>
  );
}
