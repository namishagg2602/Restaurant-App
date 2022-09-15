import React from 'react'
import AdminNavbar from './AdminNavbar';
import { StaffMember } from './StaffMember';
import { StaffData } from './StaffData';

export const StaffInfo = () => {
  return (
    <div>
        <AdminNavbar/>
        <center>
            <h1 className='table-main-head'>Staff Info</h1>
        

        <div className=''>
            {StaffData.map((staff)=>(<StaffMember staff={staff}/>))}       
        </div>
        </center>
    </div>
  );
}
