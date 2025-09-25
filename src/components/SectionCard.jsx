import React, { use } from 'react';
import Container from '../Container';
import elip from "../assets/Ellipse 22.png";
import calander from "../assets/ri_calendar-line.png";

const SectionCard = ({ cartPromise }) => {
  const cartData = use(cartPromise);
  console.log(cartData);

  return (
    <Container> 
      <div className="bg-[#f5f5f5]">
        <div className="max-w-[1200px] mx-auto my-10 grid grid-cols-12 gap-6">
          
          {/* Left main part */}
          <div className="col-span-9 ">
            <div  className="grid grid-cols-2 gap-3 my-4">
            {cartData.map(cart => (
              
                <div key={cart.id} className="bg-white shadow-sm p-4 rounded-xl w-full">
                  <div className="flex justify-between items-center">
                    <h3 className="font-semibold text-xl">{cart.title}</h3>
                    <button className="bg-[#b9f8cf] px-3 py-1 rounded-full flex gap-1 items-center text-sm">
                      <img className="w-[10px] h-[10px]" src={elip} alt="" />
                      <span>{cart.status}</span>
                    </button>
                  </div>
                  
                  <p className="text-[#627382] mt-2">{cart.description}</p>
                  
                  <div className="text-[#627382] my-4 flex justify-between">
                    <div className="flex gap-3">
                      <p>#{cart.id}</p>
                      <p className="text-[#f83044]">{cart.priority}</p>
                    </div>
                    <div className="flex gap-3">
                      <h2>{cart.customer}</h2>
                      <div className="flex gap-1 items-center">
                        <img src={calander} alt="calendar" />
                        <p>{new Date(cart.createdAt).toLocaleDateString()}</p>
                      </div>
                    </div>
                  </div>
                </div>
             
            ))}
             </div>
          </div>

          {/* Right aside */}
          <div className="col-span-3 border-2 border-red-500">
            {/* Sidebar content goes here */}
          </div>
        </div> 
      </div>
    </Container>
  );
};

export default SectionCard;
