import React from 'react';

import './mainpage.css';
import { Button } from 'react-bootstrap';
import Logo from './Logo';
import { Link } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';
import banner from './banner1.png';

const Homepage = () => (
    <div className='hm'>

  <header>

    <div className='header-content'>

      <Logo />

      <div className='content-main'>

        <h1>Delicious food for your cravings</h1>

        <p >We make fresh and healthy meals with different recipes</p>

        <button>
            <Link to='/user/menu'>View Menu <i class="bi bi-arrow-right"></i></Link>
        </button>

      </div>

    </div>

  </header>
  </div>
);

export default Homepage;