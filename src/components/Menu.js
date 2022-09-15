import React, {useState, useEffect} from 'react';
import MenuItem from './MenuItem';
import { MenuData } from './MenuData';
import { CustomerNavbar } from './CustomerNavbar';


const Menu = () => {

    const [data,Setdata]=useState([]);

   
    return (
        <div className=''>
             <CustomerNavbar/>
            <center>
                <h1 className='menu-head'>Menu List</h1>

                <div className=''>
                {MenuData.map((item) => ( <MenuItem item = {item} />))}
                </div>
                
            </center>
        </div>
);
};

export default Menu;
