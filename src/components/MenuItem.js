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
    <div className='menu-item-block'>
        <table>
            <tr>
                <td rowspan="2"><img src={img} alt='food' /></td>
                <td className=''><h3>{name}</h3></td>
                <td><h3> Rs. {price}</h3></td>
                <td rowspan="2" className='cart-items'>
                <button className="dec-button" onClick={handleDecrement}>-</button>
                <p>{counter}</p>
                <button className="inc-button" onClick={handleIncrement}>+</button>
                </td>
            </tr>
            <tr>
                <td>{info}</td>
                <td>&nbsp;</td>
            </tr>
        </table>
{/*         
        <div className='menu-item-block'>
            <div className=''>
                <img src={img} alt='food' />
                <span>{name}</span>
                <p className=''>
                <small>{info}</small>
                </p>
            </div>
            
            <div className='cart-items f-r'> Rs. {price}
                <button className="dec-button" onClick={handleDecrement}>-</button>
                <p>{counter}</p>
                <button className="inc-button" onClick={handleIncrement}>+</button>
            </div>
            
        </div>  */}

    </div>
  );
};



export default MenuItem;