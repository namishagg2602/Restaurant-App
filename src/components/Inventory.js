import React from 'react';
import { MenuData } from './MenuData';
import { InventoryItem } from './InventoryItem';
import AdminInventoryNavbar from './AdminInventoryNabar';


export const Inventory = () => {
  return (
         <div className=''>
            <AdminInventoryNavbar/>
            <center>
                <h1 className='menu-head'>Inventory </h1>
                
                <div className=''>
                {MenuData.map((item) => ( <InventoryItem item = {item} />))}
                </div>
            </center>
        </div>
    
  );
}
