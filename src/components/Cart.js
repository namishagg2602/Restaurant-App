import React, { useState } from "react";
import CartItem from "./CartItem";
import NavBar from "./NavBar";

const Cart = () =>
{

    

    return(
        <div>
            <NavBar/>
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
            </div>

            </center>
        </div>
        );
}

export default Cart;