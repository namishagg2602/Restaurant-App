import React from 'react';
import { Button } from 'react-bootstrap';
import AdminNavbar from './AdminNavbar';

export const InventoryItem = ({item}) => {

    const { id, img, name, price, info } = item;

  return (

    <div className='inventory-item-block'>
        <table>
            <tr>
                <td rowspan="2"><img src={img} alt='food' /></td>
                <td className=''><h3>{name}</h3></td>
                <td rowspan="2"><h3> Rs. {price}</h3></td>
                
            </tr>
            <tr>
                <td>{info}</td>
            </tr>
        </table>
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