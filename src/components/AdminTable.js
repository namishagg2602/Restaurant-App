import React from 'react';
import Tableview from './Tableview';

const AdminTable = () =>
{
    return(
        <div>
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
