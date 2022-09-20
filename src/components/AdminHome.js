import React from 'react';
import AdminHomeNavbar from './AdminHomeNavbar';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Footer from './Footer';

const AdminHome = () =>
{
    return(
        <>
        <div>
            <AdminHomeNavbar/>

            <center>
                <div className='admin-home-block'>
                    
                    <div className='button-text'>
                        <Link to='/adminhome/editinventory'><Button className="admin-home-button" variant='outline-warning'>Edit Inventory</Button></Link>
                        <br></br>
                        <Link to='/adminhome/showtables'><Button className="admin-home-button" variant='outline-warning'>List Orders</Button></Link>
                        <br></br>
                        <Link to='/adminhome/staff'><Button className="admin-home-button" variant='outline-warning'>Staff Info</Button></Link>
                    </div>
                </div>
            </center>
        </div>
        <Footer></Footer>
        </>
    );

}


export default AdminHome;