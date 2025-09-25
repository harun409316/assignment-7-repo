import React from 'react';
import Container from '../Container';

const Navbar = () => {
    return (
      
 <div>
           <Container>
            <div className='flex justify-between max-w-[1200px] mx-auto '>
        <div>
            <h3 className='font-semibold'>CS — Ticket System</h3>
           </div>
           <div className='flex justify-between items-center gap-3 text-[#000000e6] '>

            <a>Home</a>
            <a>FAQ</a>
            <a>Changelog</a>
            <a>Download</a>
            <a>Contact</a>
            <button className=' rounded-lg p-2 bg-linear-to-r from-[#632ee3] to-[#9f62f2] '>+ New Ticket</button>
      
           </div>
            </div>
       
           </Container>
        </div>
        
       
    );
};

export default Navbar;