import React from 'react'
import AdminNavbar from './AdminNavbar';
import TableHead from './TableHead';
import { TableRows } from './TableRows';




export const AdminBill = () => {
  
  

  return (
    <div>
        <AdminNavbar/>
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
