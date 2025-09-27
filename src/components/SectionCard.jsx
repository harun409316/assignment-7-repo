import React, { useEffect, useState } from 'react';
import Container from '../Container';
import elip from "../assets/Ellipse 22.png";
import calander from "../assets/ri_calendar-line.png";
import img1 from '../assets/vector1.png'
import check from '../assets/check-solid-full.svg';

import { toast } from 'react-toastify';

const SectionCard = ({ cartPromise }) => {
  const [cartData, setCartData] = useState([]);
  const [selected, setSelected] = useState([]);
  const [inProgressCount, setProgressCount] = useState(0);
  const [resolvedCount, setResolvedCount] = useState(0);
  const [resolvedTasks, setResolveTasks] = useState([]);

  useEffect(() => {
    cartPromise.then((data) => setCartData(data));
  }, [cartPromise]);

  const handleSelect = (item) => {
    setSelected((prev) => [...prev, { ...item, status: "inProgress" }]);
    setProgressCount((prev) => prev + 1);
    setCartData((prev) => prev.filter((cart) => cart.id !== item.id));
   toast("in Progress!");
  };

  const handleComplete = (id) => {  
    const completedTask = selected.find((item) => item.id === id);

    if(completedTask){
        setResolvedCount((prev) => prev +1);
       setResolveTasks((prev) =>[...prev, completedTask]);
    setSelected((prev) => prev.filter((item) => item.id !== id));  
      setProgressCount((prev) => prev -1);
    
      toast("Completed!!");
    }
  };

  const handleRemoveResolved = (id) => {
  setResolveTasks((prev) => prev.filter((task) => task.id !== id));
  toast("Removed from Resolved!");
}

  return (
    <Container> 
      
            <div className="grid grid-cols-2 max-w-[1200px] mx-auto gap-5 my-[30px]  ">
            <div  className="bg-gradient-to-r from-[#632ee3] to-[#9f62f2] h-[200px] md:h-[240px]  rounded-lg flex flex-col items-center justify-center font-semibold text-[22px] text-white">
               <div className='flex relative  h-full w-full'>
          <img className=' absolute left-0 bottom-0 ' src={img1} alt="" />
          <img className=' absolute right-0 bottom-0 scale-x-[-1] ' src={img1} alt="" />
               <div className='text-center w-full flex flex-col justify-center items-center'>
                <h2>In Progress</h2>
                <p>{inProgressCount}</p>
               </div>
               
               </div>
              
              </div>
              <div className="bg-gradient-to-r from-[#54cf68] to-[#00827a] h-[200px] md:h-[240px] rounded-lg flex flex-col items-center justify-center font-semibold text-[22px] text-white">
               <div className='flex relative  h-full w-full'>
          <img className=' absolute left-0 bottom-0 ' src={img1} alt="" />
          <img className=' absolute right-0 bottom-0 scale-x-[-1] ' src={img1} alt="" />
               <div className='text-center w-full flex flex-col  justify-center items-center'>
                <h2>Resolved</h2>
                <p>{resolvedCount}</p>
               </div>
               
               </div>
              </div>
                
             
            </div>

      <div className="bg-[#f5f5f5]">
        <div className="max-w-[1200px] mx-auto my-10 grid grid-cols-12 gap-6">

          {/* Left main part */}
          <div className="md:col-span-9 col-span-12">
           
            {/*  Card List */}
            <div className="grid md:grid-cols-2 grid-cols-1 gap-3 my-4">
              {cartData.map(cart => (            
                <div  
                  key={cart.id} 
                  className="bg-white shadow-sm p-4 rounded-xl w-full cursor-pointer hover:shadow-md transition" 
                  onClick={() => handleSelect(cart)}
                > 
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
          <div className="md:col-span-3 col-span-12">
            <h3 className='font-semibold text-2xl text-[#34485A]'>Task Status</h3>
            {selected.length> 0? selected.map((item) => (
              <div key={item.id} className='bg-white m-2 rounded-lg'>
                <div className='p-3'>
                  <h3 className='text-[#34485A]'>{item.title} </h3>
                  <button onClick={() => handleComplete(item.id)} className='bg-[#02A53B] w-full rounded-lg mt-3 py-2 text-white'>Complete</button>
                  
                </div>
              </div>
            )):<p className='bg-white p-1'>Click the card</p>}
            <div>
            <h3 className='text-[#34485A] text-2xl font-semibold'>Resolved check</h3>
           {
            resolvedTasks.length>0?
            resolvedTasks.map((task) => (
             <div className=' p-3 rounded-lg bg-[#E0E7FF] mt-2' key={task.id}>
              <span>{task.title}</span>
              <div className='flex justify-between'>
             <p className='bg-white flex p-1'><img className=' text-center h-[20px] w-[20px]' src={check} alt="" /> completed</p>
              <button 
        onClick={() => handleRemoveResolved(task.id)} 
        className='bg-red-500 text-white px-3 py-1 rounded-lg text-sm'
      >Remove</button>
      </div>
             </div>
        
            )):<p>No resolve task yet</p>
           }
            
              </div>
          </div>

        </div> 
      </div>
    </Container>
  );
};

export default SectionCard;
