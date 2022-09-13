import React from "react";
import CartItem from "./CartItem";
import { Button } from "react-bootstrap";
import { CustomerNavbar } from "./CustomerNavbar";
import { Axios } from "axios";

const Cart = () =>
{


    {/*const url="http://localhost:8080/user/menu";

    function handleClick(e){
        e.preventDefault();
        Axios.post(url,{
            name: Object.name,
            age:parseInt(Object.age)
        })
        .then(res=> {console.log(res.data)})
    }*/}

    return(
        <div>
            <CustomerNavbar/>
            <center>
            <div className='cart-head'>
                <h1>Your Cart</h1>
                <h5>Table no. x</h5>
            </div>

            <div className="cart-head">
                <div className="cart-sub-head"> Your ordered items :</div>
                <div>
                    <CartItem/>
                    <CartItem/>
                    <CartItem/>
                </div>

                <Button variant='outline-warning'>Place Order</Button>
            </div>

            </center>
        </div>
        );
}

export default Cart;