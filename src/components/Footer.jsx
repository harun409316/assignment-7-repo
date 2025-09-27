import React from 'react';
import Container from '../Container';
import tweet from '../assets/x-tweet.svg'
import inst from '../assets/inst.svg'
import face from '../assets/face.svg'
import email from '../assets/email.svg'


const Footer = () => {
    return (
        <div className='bg-black h-auto '> 
            <Container>
        <div className=' pt-12 justify-center  text-center max-w-[1200px] mx-auto grid md:grid-cols-5 grid-cols-1  gap-8'>
      
     <div >
    <h3 className=' text-white font-semibold'>CS — Ticket System</h3>
      <p className='text-white'>Lorem Ipsum is simply text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
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
    <h3 className=' text-white font-semibold '>Social Links</h3>
             <div className=' text-white '>
                <div className='flex gap-1 justify-center  '>
                    <img className=' mt-1 bg-white rounded-full  w-[20px] h-[20px] ' src={tweet} alt="" />
                    <p>@CS — Ticket System</p>
                </div>
                <div className='flex gap-1 justify-center '>
                    <img className=' mt-1 bg-white rounded-full  w-[20px] h-[20px] ' src={inst} alt="" />
                    <p>@CS — Ticket System</p>
                </div>
                <div className='flex gap-1 justify-center  '>
                    <img className=' mt-1 bg-white rounded-full  w-[20px] h-[20px] ' src={face} alt="" />
                    <p>@CS — Ticket System</p>
                </div>
                <div className='flex gap-1 justify-center '>
                    <img className=' mt-1 bg-white rounded-full  w-[20px] h-[20px] ' src={email} alt="" />
                    <p>@CS — Ticket System</p>
                </div>
            <p>support@cst.com</p>
        </div>
                    </div>
                </div>
                <div>
                    <p className='mt-10 pb-10 text-white text-center'>© 2025 CS — Ticket System. All rights reserved.</p>
                </div>
            </Container>
        </div>
    );
};

export default Footer;