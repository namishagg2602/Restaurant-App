import React, { forwardRef } from 'react';
import Menuitems from './MenuItems/menuitems';
import { menuItemsData } from './data';
import './style.css';


const Menu = () => {
    return (
 <main >
 
    {menuItemsData.map((item) => (
<Menuitems item = {item} />
    ))}
  </main>
);
};

export default Menu;
