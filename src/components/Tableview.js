import React from 'react';

const Tableview = () =>
{
    return(
        <div className='table-block'>
            <h3 style={{color:"brown"}}>Table No. 1</h3>
            <div style={{color:"white"}}>
                <h5>Ordered Items</h5>
                <ul>
                <li>Item1 </li>
                <li>Item2</li>
                <li>Item3</li>
                </ul>
            </div>

            <div style={{color:"brown"}}>Order Total : 1000</div>
        </div>
    );
}


export default Tableview;