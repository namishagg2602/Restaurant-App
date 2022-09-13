import React, {useState} from 'react';
import { Button } from 'react-bootstrap';

const MenuItem = ({item}) => {
  const { id, img, name, price, info } = item;
  const [counter,Setcounter]= useState(0);

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

  return (
    <div>
        
        <div className='menu-item-block'>
            <img src={img} alt='food' />
            <div className=''>
                <h3>{name}</h3>
                <p className=''>
                <small>{info}</small>
                </p>
            </div>
            
            <div className='cart-items'> Rs. {price}
                <button className="dec-button" onClick={handleDecrement}>-1</button>
                <p>{counter}</p>
                <button className="inc-button" onClick={handleIncrement}>+1</button>
            </div>
            
        </div>
    </div>
  );
};



export default MenuItem;