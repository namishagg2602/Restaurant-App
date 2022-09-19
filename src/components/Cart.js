import React, { useState,useEffect } from "react";
import CartItem from "./CartItem";
import { Button } from "react-bootstrap";
import { CustomerNavbar } from "./CustomerNavbar";
import  axios from "axios";
import Footer from "./Footer";

const Cart = () =>
{

    const [notes,Setnotes]= useState('');
    const [data,setCart]=useState([]);


    {/*const url="http://localhost:8080/user/menu";

    function handleClick(e){
        e.preventDefault();
        Axios.post(url,{
            name: Object.name,
            age:parseInt(Object.age)
        })
        .then(res=> {console.log(res.data)})
    }*/}

    useEffect(()=>{
          
        axios.get("http://localhost:8080/cart/getAll")
            .then(res => {console.log(res)
                            setCart(res.data)})
            .catch(err=>{
                console.log(err)
            }) 

      })

      const placeorder = (e) =>
      {
        e.preventDefault();
        // fetching cart table
        
        data.map(function(cartrow,i)
        {
            var order_id = cartrow.table_id;
            var table_id = cartrow.table_id;
            var item_name = cartrow.item_name;
            var item_price = cartrow.item_price;
            var qty_ord = cartrow.qty_ord;
            var item_id = cartrow.item_id;
            var status = 'active';



            const items = {order_id, table_id,item_id, item_name, item_price, qty_ord,notes,status}
            console.log(items)
            fetch("http://localhost:8080/orders/add",{
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify(items)
            }).then(()=>{
                console.log("New order added")
            }) 
            return(
                <div>
                    
                </div>
                     
            );
        }  )
        
    }

    return(
        <>
        <div>
            <CustomerNavbar/>
            <center>
            <div className='cart-head'>
                <h1>Cart</h1>
                <h5>Table no. 1 </h5>
            </div>

            <div className="cart-head">
                <div className="cart-sub-head"> Items Ordered:</div>
                <div>
                    {data.map(function(item,i){
                        var cartitems={
                            qty_ord : item.qty_ord ,
                            table_id : item.table_id,
                            item_id : item.item_id,
                            item_name : item.item_name,
                            item_price : item.item_price,
                            cust_notes : notes
                        }

                        return(
                        (<CartItem key={i} cartitems={cartitems} />)
                        );
                        }
                        )}
                   
                </div>

                <div >
                    <label>
                        Additional Notes :
                        <input  value={notes} onChange={(e)=>Setnotes(e.target.value)}/>
                    </label>

                </div>

                <Button variant='outline-warning' onClick={placeorder}>Place Order</Button>
            </div>

            </center>
        </div>
        <Footer></Footer>
        </>
        );
}

export default Cart;