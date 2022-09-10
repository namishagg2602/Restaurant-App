import React from 'react';
import './style.css';

const MenuItem = ({item}) => {
  const { id, img, name, price, info } = item;
  return (
    <div className='item'>
      <img src={img} alt='food' />
      <div className='item-head_desc'>
        <p className='head_desc-name'>{name}</p>
        <p className='head_desc-info'>
          <small>{info}</small>
        </p>
      </div>
      <div className='item-foot_desc'>
        <span className='foot_desc-price'>Rs{price}</span>
       <button>Add +</button>
      </div>
    </div>
  );
};



export default MenuItem;
