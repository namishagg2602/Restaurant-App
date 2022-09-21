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
    const [tableno,Settable] = useState(0);
    const [menu,setmenu]= useState([]);


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
            .then(res => {console.log("")
                            setCart(res.data)})
            .catch(err=>{
                console.log(err)
            }) 

        data.map((x)=>(Settable(x.table_id)));



      })

      const updateinventory=()=>{

        
       
        axios.get("http://localhost:8080/menu/getAll")
        .then(res => {console.log(res.data)
                        setmenu(res.data)})
        .catch(err=>{
            console.log(err)
        }) 

        
        let id=[];
        let categ=[];
        let names=[];
        let desc=[];
        let prices=[];
        let qtys=[];
    
        data.map(function(cartrow)
        {    
            menu.map(function(menurow)
            {
                if(cartrow.item_id==menurow.item_id)
                {
                    id.push(cartrow.item_id);
                    categ.push(menurow.item_category);
                    names.push(menurow.item_name);
                    desc.push(menurow.item_desc);
                    prices.push(menurow.item_price);
                    qtys.push(menurow.qty_avl-catrow.qty_ord);
                }
                return(
                    <div></div>
                );

            })

            return(
                <div></div>
            );
        })

        for(let i=0;i<id.length;i++)
        {
            let item_id=id[i];
            let item_category=categ[i];
            let item_name=names[i];
            let item_desc=desc[i];
            let item_price=prices[i];
            let qty_avl=qtys[i];

            const menuobj={item_id,item_category,item_name,item_desc,item_price,qty_avl};
            console.log(item_id);
            fetch(`http://localhost:8080/menu/update/${item_id}`,

            {
        
                method:`PUT`,
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify(menuobj)
        
            }).then((response )=>{
                //response.json().filter(orderId=>(response.orderId==orderId)).then(()=>
                    console.log(item_id);
        
            })
        }


      }

      const placeorder = (e) =>
      {
        e.preventDefault();
        
        // fetching cart table
        // data.map(function(row,i){
        //     fetch(`http://localhost:8080/cart/delete${row.prmkey}`,
  
        //         {
            
        //         method:`DELETE`
            
        //         }).then((response )=>{
            
        //         })nt
        // return(
        //     <div></div>
        // );
        // })

        // importing data from menu table and update inventory

        updateinventory();
       


        alert('Order has been successfully placed!');
        // adding cart items to order table
        data.map(function(cartrow,i)
        {
            let order_id = cartrow.table_id;
            let table_id = cartrow.table_id;
            let item_name = cartrow.item_name;
            let item_price = cartrow.item_price;
            let qty_ord = cartrow.qty_ord;
            let item_id = cartrow.item_id;
            let status = 'active';



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
                <h5>Table no. {tableno}</h5>
            </div>

            <div className="cart-block">
                <div className="cart-sub-head"> Items Ordered:</div>
                <div>
                    {data.map(function(item,i){
                        let cartitems={
                            prmkey : item.prmkey,
                            qty_ord : item.qty_ord ,
                            table_id : item.table_id,
                            item_id : item.item_id,
                            item_name : item.item_name,
                            item_price : item.item_price,
                            // cust_notes : notes,
                        }

                        if(tableno==item.table_id)
                        {

                        return(
                        (<CartItem key={i} cartitems={cartitems} />)
                        );
                        }
                        else{
                            return(
                                <div></div>
                            );
                        }
                        
                    }


                        )}
                   
                </div>

                <div >
                    <label>
                        Additional Notes 
                        <input  className="notes" value={notes} onChange={(e)=>Setnotes(e.target.value)}/>
                    </label>

                </div>
                <br></br>
                <br></br>
                <Button letiant='outline-warning' onClick={placeorder}>Place Order</Button>
            </div>

            </center>
        </div>
        <Footer></Footer>
        </>
        );
}

export default Cart;