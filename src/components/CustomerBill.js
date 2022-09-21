import React, { useState, useEffect } from 'react'
import { CustomerNavbar } from './CustomerNavbar';
import TableHead from './TableHead';
import { TableRows } from './TableRows';
import axios from 'axios';
import Footer from './Footer';



export const CustomerBill = () => {
  
  const [data,Setdata]= useState([]);
  var totalprice=0;
  var price = [];
  var qty = [];
  const [showtax, setShowTax] = useState(0);
  const [showprice, setShowPrice] = useState(0);


  useEffect(()=>{
    // Setdata([]);
          
    axios.get("http://localhost:8080/orders/getAll")
        .then(res => {console.log(res)
                        Setdata(res.data)})
        .catch(err=>{
            console.log(err)
        }) 


        data.map(function(orderrow,i)
        {
          const {order_id, table_id,item_id, item_name, item_price, qty_ord,notes,status} = orderrow;
          price.push(item_price);
          qty.push(qty_ord);
          return(
            <div></div>
          );
        })

        for (let i=0; i<price.length; i++){
          totalprice+=price[i]*qty[i];
        }
        console.log(totalprice);
        setShowTax(totalprice*0.05);
        totalprice = totalprice+showtax;
        setShowPrice(totalprice);
        
        

  })

  return (
    <>
    <div>
        <CustomerNavbar/>
        <center>
        <div className='bill-block'>         
            <TableHead/>
            {data.map(function(orderrow,i)
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
        </center>

    </div>
    <Footer></Footer>
    </>
  );
}
