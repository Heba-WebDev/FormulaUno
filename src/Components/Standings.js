import React from 'react';

export default function Standings(props) {


  return (

    <div className='flex flex-col bg-white rounded p-3'>

    <div className='flex gap-x-4 text-xl'>
        <h3 className={props.driversOrConstructers ? 'border' : ''}>Driver Standings</h3>
        <h3 className={!props.driversOrConstructers ? 'border' : ''}>Constructor Standings</h3>
    </div>
    
    
    <div className='p-3'>
        {props.driversOrConstructers && 
        
        props.drivesStanding.map((driver) => {
           return (
               <div key={driver.Driver.driverId} className='flex gap-x-1'>
              
              <li>{driver.Driver.familyName}</li>
              <small>Points: {driver.points}</small>
                   
               </div>
           )
        })
        }
        </div>


        <div className='p-3'>
        {!props.driversOrConstructers && 
        
        props.constructorsStanding.map((constructor) => {
           return (
               <div key={constructor.Constructor.constructorId} className='flex gap-x-1'>
              
              <li>{constructor.Constructor.name}</li>
              <small>Points: {constructor.points}</small>
                   
               </div>
           )
        })
        }
        </div>
    

    </div>
  )
}