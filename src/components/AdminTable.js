import React, { useEffect, useState } from 'react';
import Tableview from './Tableview';
import AdminNavbar from './AdminNavbar';
import TableHead from './TableHead';
import { TableRows } from './TableRows';
import axios from 'axios';
import Footer from './Footer';
import { Button } from 'react-bootstrap'; 

const AdminTable = () =>
{
    var temp=0;

    const [data,Setdata]=useState([]);
    const [table,Settable]=useState([]);
    const [curtable,setcurtable]=useState();
    var alltables=[];
    const [showdata,setshowdata]=useState([]);
    const [showtax, setShowTax] = useState(0);
    const [showprice, setShowPrice] = useState(0);

    const unique = (value,index,self)=>
    {
        return self.indexOf(value)===index
    }

    useEffect(()=>{
          
        axios.get("http://localhost:8080/orders/getAll")
            .then(res => {
                            Setdata(res.data)})
            .catch(err=>{
                //console.log(err)
            }) 
    
    
            data.map(function(orderrow,i)
            {
              const {order_id, table_id,item_id, item_name, item_price, qty_ord,notes,status} = orderrow;
              alltables.push(table_id);
              
              return(
                <div></div>
              );

            })
    
           Settable(alltables.filter(unique));
            
            
    
      },[data])

      const handleclick = (e)=>
      {
        e.preventDefault();
        setshowdata([]);
        var prices=[];
        var qtys=[];

        data.map(function(orderrow,i)
        {
          const {order_id, table_id,item_id, item_name, item_price, qty_ord,notes,status} = orderrow;
          
          if(table_id==curtable)
          {
          setshowdata(showdata=>[...showdata,orderrow]);
          prices.push(orderrow.item_price);
          qtys.push(orderrow.qty_ord);

          }
          //console.log(curtable);
          var totalprice=0;
          for (let i=0; i<prices.length; i++){
            totalprice+=prices[i]*qtys[i];
          }
          console.log(totalprice);
          setShowTax(totalprice*0.05);
          totalprice = totalprice+showtax;
          setShowPrice(totalprice);
          

          return(
            <div></div>
          );

        })
      }

      const fun=(e)=>
      {
        setcurtable(e.target.value);
        console.log(curtable);
        
      }

    return(
        <>
        <div>
            <AdminNavbar/>
            <center>
                <h1 className='table-main-head'>Current Orders</h1>
            </center>

            <center>
            <div className=''>
            <br></br>
            <br></br>
            <div className='occ_tables'>
                <h5>Occupied Tables are :</h5>
                {table.map((value)=><span className='occupied-table'>{value}</span>)}
                <br></br><br></br>
                <input placeholder="Enter table no. to view" value={curtable} onChange={fun}/>

            </div>
            <br></br>
            
            <Button className='btn-primary' onClick={handleclick}>Show Table order</Button>
                <div className='bill-block'>         
            <TableHead/>
            {showdata.map(function(orderrow,i)
            {
               var obj ={
                item_name: orderrow.item_name,
                item_price: orderrow.item_price,
                qty_ord : orderrow.qty_ord,
               } 
              return(

                <TableRows key={i} obj={obj}/>
              );

            }
            )}
            
            <h7>Tax @ 5% : {showtax}</h7>
            <h3>Order Total : {showprice}</h3>
        </div>
            </div>
            </center>
        </div>
        <Footer></Footer>
        </>
    );
}


export default AdminTable;