import React from 'react';
import bannerImg from "./banner.png";
import './Header.css';

const Banner = ({ handleScrollMenu }) => (
  <header>
    <div className='header-content'>
      <div className='content-main'>
        <h1>Delicious food </h1>
        <p>We made fresh and healthy meals with different recipes</p>
        <button onClick={handleScrollMenu}>
          View Menu <i className='fas fa-long-arrow-alt-right'></i>
        </button>
      </div>
    </div>
    <img className='header-img' src={bannerImg} alt='banner' />
  </header>
);

export default Banner;