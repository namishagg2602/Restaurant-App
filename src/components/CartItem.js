import React, { useState} from 'react';

const CartItem = ({cartitems}) =>
{
    const { qty, table_id, item_id, item_name, item_price,cust_notes} = cartitems;
    const [qty_ord,Setqty_ord]= useState(cartitems.qty_ord);

    const handleDecrement = () =>
    {
    
        if(qty_ord===1)

        {
            fetch(`http://localhost:8080/menu/delete/${item_id}`,
  
            {
        
                method:`DELETE`
        
            }).then((response )=>{
                //response.json().filter(orderId=>(response.orderId==orderId)).then(()=>
                    //console.log(response)
        
            })
        }
        else
        if(qty_ord === 0)
        {
            
            alert("Items cannot be less than 0");   
        }
        else
        {
            Setqty_ord(qty_ord-1);
            var order_id=table_id;
            var status = 'active';
            const obj = {order_id,table_id,item_name,item_price,qty_ord,cust_notes,status}
            fetch(`http://localhost:8080/menu/update/${item_id}`,
    
                {
            
                    method:`PUT`,
                    headers:{"Content-Type":"application/json"},
                    body:JSON.stringify(obj)
            
                }).then((response )=>{
                    //response.json().filter(orderId=>(response.orderId==orderId)).then(()=>
                        //console.log(response)
            
                })
        }
    }

    const handleIncrement = () =>
    {
    
        Setqty_ord(qty_ord+1);
        var order_id=table_id;
        var status = 'active';
        const objs = {order_id,table_id,item_name,item_price,qty_ord,cust_notes,status}
        fetch(`http://localhost:8080/menu/update/${item_id}`,
  
            {
        
                method:`PUT`,
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify(objs)
        
            }).then((response )=>{
                //response.json().filter(orderId=>(response.orderId==orderId)).then(()=>
                    //console.log(response)
        
            })
        
    }

    return(
        <div>
            <div className="cart-items">{item_name}
                            <button className="dec-button" onClick={handleDecrement}>-</button>
                            <p>{qty_ord}</p>
                            <button className="inc-button" onClick={handleIncrement}>+</button></div>
                            
        </div>
    );
}

export default CartItem;