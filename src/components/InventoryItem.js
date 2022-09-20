import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import AdminNavbar from './AdminNavbar';
import 'bootstrap-icons/font/bootstrap-icons.css';

export const InventoryItem = ({item}) => {

  const [itemqty,setitemqty] = useState(item.qty_avl);
  const [prc,setprc] = useState(item.item_price);

  const deleteitem = () =>{

    let answer = prompt("Are you sure you want to remove "+item.item_name+". Type Y or y to confirm or any other letter to cancel");

    if(answer==='y' || answer==='Y')
    {
    fetch(`http://localhost:8080/menu/delete/${item.item_id}`,
  
      {
  
        method:`DELETE`
  
      }).then((response )=>{
          //response.json().filter(orderId=>(response.orderId==orderId)).then(()=>
            //console.log(response)
  
      })
    }
  }

  const updateitem = () =>{
    item.qty_avl = itemqty;
    item.item_price=prc;
    fetch(`http://localhost:8080/menu/update/${item.item_id}`,
  
      {
  
        method:`PUT`,
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(item)
  
      }).then((response )=>{
          //response.json().filter(orderId=>(response.orderId==orderId)).then(()=>
            //console.log(response)
  
      })
  }
  

  return (

    <div className='menu-item-block' >
            <tr >

                
                <td width ="250px" className=''><h5>{item.item_name}</h5></td>
                <td width ="250px"> Rs. <input className='input-width' value={prc} onChange={(e)=>setprc(e.target.value)}></input></td>
                <td width ="250px"><input className='input-width'  value={itemqty} onChange={(e)=>setitemqty(e.target.value)}></input></td>
                <td width="180px"><Button className='btn-primary' onClick={deleteitem}><i class="bi bi-trash3-fill"></i></Button></td> 
                <td width="220px"><Button className='btn-primary' onClick={updateitem}><i class="bi bi-pencil-square"></i></Button></td> 

            </tr>
            </div>
   
    
  );
}


 {/* // <div>
    //     <div className='menu-item-block'>
    //         <img src={img} alt='food' />
    //         <div className=''>
    //             <h3>{name}</h3>
    //             <p className=''>
    //             <small>{info}</small>
    //             </p>
    //         </div>
            
    //         <div className='cart-items'> Rs. {price}</div>
    //     </div> */}