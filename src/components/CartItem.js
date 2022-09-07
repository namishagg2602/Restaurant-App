import React, { useState, useEffect } from 'react';

const CartItem = () =>
{
    const [counter,Setcounter]= useState(0);

    useEffect(() =>
    {
        if(this.counter<0)
        {
            alert("Items cannot be less than 0");
            Setcounter(0);
        }
    });

    const handleDecrement = () =>
    {
        if(counter === 0)
        {
            alert("Items cannot be less than 0");   
        }
        else
        {
            Setcounter(counter-1);
        }
    }

    const handleIncrement = () =>
    {
        Setcounter(counter+1);
        
    }

    return(
        <div>
            <div className="cart-items">Item 1 
                            <button className="dec-button" onClick={handleDecrement}>-1</button>
                            <p>{counter}</p>
                            <button className="inc-button" onClick={handleIncrement}>+1</button></div>
        </div>
    );
}

export default CartItem;