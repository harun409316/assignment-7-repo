import React from 'react';
import Container from '../Container';


const Footer = () => {
    return (
        <div className='bg-black h-[432px]'> 
            <Container>
        <div className='max-w-[1200px] mx-auto grid grid-cols-5 gap-10'>
      
     <div>
    <h3 className=' text-white font-semibold'>CS — Ticket System</h3>
      <p className='text-white'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
</div>
 <div>
        <h3 className=' text-white font-semibold'>Company</h3>
        <div className=' text-white '>
            <p>About us</p>
            <p>Our Mission</p>
            <p>Cantact Saved</p>
        </div>
                    </div>
                    <div>
      <h3 className=' text-white font-semibold'>Services</h3>
        <div className=' text-white '>
            <p>Products & Services</p>
            <p>Customer Stories</p>
            <p>Download Apps</p>
        </div>                 
           </div>
              <div>
         <h3 className=' text-white font-semibold'>Information</h3>
    <div className=' text-white '>
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>
            <p>Join Us</p>
        </div>          
           </div>
          <div>
    <h3 className=' text-white font-semibold'>Social Links</h3>
             <div className=' text-white '>
           <p>@CS — Ticket System</p>
            <p>@CS — Ticket System</p>
            <p>@CS — Ticket System</p>
            <p>support@cst.com</p>
        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Footer;