import React from 'react';
import Tableview from './Tableview';
import AdminNavbar from './AdminNavbar';

const AdminTable = () =>
{
    return(
        <div>
            <AdminNavbar/>
            <center>
                <h1 className='table-main-head'>Current Orders</h1>
            </center>
            <div className='table-row'>
                <Tableview/>
                <Tableview/>
                <Tableview/>
                <Tableview/>
                <Tableview/>
                <Tableview/>
                <Tableview/>
                <Tableview/>
                <Tableview/>
                <Tableview/>
                <Tableview/>
                <Tableview/>
            </div>
        </div>
    );
}


export default AdminTable;