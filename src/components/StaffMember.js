import React from 'react';

export const StaffMember = ({staff}) => {

    const {id,name,designation} = staff;
  return (
    <div className='staff-block'>
        <table>
            <tr>
                <td width="100px"><h5>{id}</h5></td>
                <td width="300px"><h5>{name}</h5></td>
                <td width="200px"><h5>{designation}</h5></td>
            </tr>
        </table>
    </div>
    
  );
}


{/*<div className='table-block'>    
        <h3>Employee Name</h3>
        <div style={{color:"white"}}>    
            <ul>
            <li>Employee ID : 123456</li>
            <li>Designation : Chef</li>
            </ul>
        </div>
    </div> */}