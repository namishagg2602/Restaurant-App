import React from 'react';

export const TableRows = ({obj}) => {

    const { item_name, item_price, qty_ord} = obj;
    var total = item_price*qty_ord;

    return(
      <div className='bill-item'>
        <table>
        <tr>
          <td width="150px">{item_name}</td>
          <td width="120px">{qty_ord}</td>
          <td width="100px">{item_price}</td>
          <td width="200px">{total}</td>
        </tr>
        </table>
      </div>
    );
}
