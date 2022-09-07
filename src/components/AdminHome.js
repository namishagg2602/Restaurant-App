import React from 'react';
import AdminNavbar from './AdminNavbar';
import Button from 'react-bootstrap/Button';

const AdminHome = () =>
{
    return(
        <div>
            <AdminNavbar/>

            <center>
                <div className='admin-home-block'>
                    
                    <div className='button-text'>
                        <Button className="admin-home-button" variant='outline-success'>Edit Menu</Button>
                        <br></br>
                        <Button className="admin-home-button" variant='outline-success'>List Tables</Button>
                        <br></br>
                        <Button className="admin-home-button" variant='outline-success'>Check Inventory</Button>
                    </div>
                </div>
            </center>
        </div>
    );

}


export default AdminHome;