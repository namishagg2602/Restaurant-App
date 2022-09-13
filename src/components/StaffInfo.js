import React from 'react'
import AdminNavbar from './AdminNavbar';
import { StaffMember } from './StaffMember';

export const StaffInfo = () => {
  return (
    <div>
        <AdminNavbar/>
        <center>
            <h1 className='table-main-head'>Staff Info</h1>
        </center>

        <div className='table-row'>
            <StaffMember/>
            <StaffMember/> 
            <StaffMember/>
            <StaffMember/> 
            <StaffMember/>
            <StaffMember/> 
            <StaffMember/>
            <StaffMember/>        
        </div>
    </div>
  );
}
