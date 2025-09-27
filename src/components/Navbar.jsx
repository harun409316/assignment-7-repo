import React from 'react';
import Container from '../Container';

const Navbar = () => {
    return (
      
 <div className=' shadow-md'>
           <Container>
            <div className='flex justify-between max-w-[1200px] mx-auto '>
        <div>
            <h3 className='font-semibold'>CS — Ticket System</h3>
           </div>
           <div className=' flex justify-between gap-3 items-center text-[#000000e6] '>
            <div className='flex gap-3'>
<p>Home</p>
            <p>FAQ</p>
            <p>Changelog</p>
            <p>Download</p>
            <p>Contact</p>
            </div>
            
        
    <div className=''>
         <button className=' rounded-lg p-2 bg-linear-to-r from-[#632ee3] to-[#9f62f2] '>+ New Ticket</button>
    </div>      
           </div>
            </div>
       
           </Container>
        </div>
       
    );
};

export default Navbar;