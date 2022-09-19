import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Footer from './Footer';

const Tableview = () =>
{
    const [status,Setstatus] = useState('active'); // using status from DB

    const SubmitStatus = () =>
    {
        // pushing status to db from here
    }
    return(
        
        <div className='table-block'>
            <h3 >Table No. 1</h3>
            <div style={{color:"white"}}>
                <h5>Ordered Items</h5>
                <ul>
                <li>Item1 </li>
                <li>Item2</li>
                <li>Item3</li>
                </ul>
            </div>

            {/* <label> Status : <input value={status} onChange={(e)=> Setstatus(e.target.value)}></input></label>
            <br></br><br></br>

            <Button variant='outline-warning' onClick={SubmitStatus}> Submit Status</Button> */}

            <br></br><br></br>
            <center>
                <Link to='/adminhome/showtables/bill'><Button variant='outline-warning'>View Bill</Button></Link> 
            </center>
        </div>

        
    );
}


export default Tableview;