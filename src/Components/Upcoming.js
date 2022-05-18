import React from 'react';

export default function Upcoming(props) {


    
    
    return (
        <>
        
         
          
        
        {props.nextRace.length != 0 && 
        
        <div className='container max-auto flex flex-col
        p-5 rounded text-white bg-green-500 font-roboto gap-y-4'>
            
            <div className='flex gap-x-2'>
                
              <small className='text-sm text-gray-300'>Next Race ~</small>
              <small className='text-sm text-gray-300'>{props.nextRace.date.split('-').reverse().join('-')}</small>
          </div>
             
          <div className='flex justify-center flex-col m-auto'>
              <h1 className='text-4xl tracking-wide text-lime-900'>{props.nextRace.raceName}</h1>
              
              
          </div>   
        </div>
        }

       
       {props.nextRace.length == 0 && 
       
       <div>
           <p>End of calnder year</p>
       </div>
       }
        
        </>
       
    )
}