import React from 'react'
import { CustomerNavbar } from './CustomerNavbar';
import TableHead from './TableHead';
import { TableRows } from './TableRows';




export const CustomerBill = () => {
  
  

  return (
    <div>
        <CustomerNavbar/>
        <center>
        <div className='bill-block'>         
            <TableHead/>
            <TableRows/>
            <TableRows/>
            <TableRows/>
            <TableRows/>
            <TableRows/> 
            <h7>Tax @ 5% : 30.00</h7>
            <h3>Order Total : 630.00</h3>
        </div>
        </center>

    </div>
  );
}
