import React,{useState, useEffect} from 'react';
import { MenuData } from './MenuData';
import { InventoryItem } from './InventoryItem';
import AdminInventoryNavbar from './AdminInventoryNabar';
import axios from 'axios';
import Footer from './Footer';

export const Inventory = () => {

  const [data,setMenu]=useState([]);

  useEffect(()=>{
          
    axios.get("http://localhost:8080/menu/getAll")
        .then(res => {console.log(res)
                        setMenu(res.data)})
        .catch(err=>{
            console.log(err)
        }) 

  },[])


  return (
    <>
         <div className=''>
            <AdminInventoryNavbar/>
            <center>
                <h1 className='menu-head'>Inventory </h1>
                
                <div className=''>
                <table>
                  <thead>
                        <div className='menu-item-block' >
                  <tr >

                      
                      <td width ="250px" className=''><h3>Name</h3></td>
                      <td width ="250px"><h3>Price </h3></td>
                      <td width ="250px"><h3>Quantity </h3></td>
                      <td width ="180px"><h3>Delete </h3></td>
                      <td width ="220px"><h3>Update </h3></td>

                      
                  </tr>
                </div>
                  </thead>
                  <tbody>
                {data.map((item,i) => ( <InventoryItem key={i} item = {item} />))}
                </tbody>
                </table>
                </div>
            </center>
        </div>
    <Footer/>
    </>
  );
}
