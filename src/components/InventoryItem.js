import React from 'react';
import { Button } from 'react-bootstrap';
import AdminNavbar from './AdminNavbar';

export const InventoryItem = ({item}) => {

    const { id, img, name, price, info } = item;

  return (
    <div>
        <div className='menu-item-block'>
            <img src={img} alt='food' />
            <div className=''>
                <h3>{name}</h3>
                <p className=''>
                <small>{info}</small>
                </p>
            </div>
            
            <div className='cart-items'> Rs. {price}</div>
        </div>
    </div>
  )
}
