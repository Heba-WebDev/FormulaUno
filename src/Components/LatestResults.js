import React from 'react';


export default function LatestResults (props) {

    const topThree = props.latestResults.slice(2,3);
    const topTwo = props.latestResults.slice(1,2);
    const topOne = props.latestResults.slice(0,1);

return (
    <div className='grid bg-zinc-50 rounded p-4'>

      <div className='text-center tracking-widest leading-3 uppercase'>
          <h3 className='border text-center pb-1 text-sm'>Latest results: <span className='text-sm'>{props.lastRace}</span></h3>
      </div>
        

      <div className='flex gap-y-3 md:p-4 mt-4 justify-around'>
       

      

        
        {topTwo.map((driver) => {
            return (
                <div key={driver.Driver.driverId} className=' flex '>

          <div className='bg-zinc-100 flex flex-col p-4  gap-y-1'>
           
           <small className='text-2xl self-center'>{driver.position}</small>
           <p className='text-2xl md:text-4xl self-center'>{driver.Driver.code}</p>
           <small className='self-center'>{driver.Constructor.name}</small>
          </div>

       

                </div>
            )
        })} 



        {topOne.map((driver) => {
            return (
                <div key={driver.Driver.driverId} className='flex'>

          <div className='bg-zinc-100 flex flex-col p-4  gap-y-1'>
           
           <small className='text-2xl self-center'>{driver.position}</small>
           <p className='text-2xl md:text-4xl self-center'>{driver.Driver.code}</p>
           <small className='self-center'>{driver.Constructor.name}</small>
          </div>

       

                </div>
            )
        })} 

        {topThree.map((driver) => {
            return (
                <div key={driver.Driver.driverId} className=' flex'>

          <div className='bg-zinc-100 flex flex-col p-4  gap-y-1'>
           
           <small className='text-3xl self-center'>{driver.position}</small>
           <p className='text-2xl md:text-4xl self-center'>{driver.Driver.code}</p>
           <small className='self-center'>{driver.Constructor.name}</small>
          </div>

       

                </div>
            )
        })} 
       
      
       </div>
        
</div>

  
)

}