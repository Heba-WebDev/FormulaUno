import React from 'react';

export default function Standings(props) {


  function changeStandings() {
    props.setDriversOrConstructers(prev => !prev)
  }

  return (

    <div className='flex flex-col bg-white rounded p-3 w-full border-solid border-black border-2'>

      <div>
        <h2 className='text-3xl border-solid border-black border-2
        p-3 justify-self-center flex justify-center'>Standings</h2>
      </div>

    <div className='flex gap-x-12 text-2xl p-4 justify-around'>
        <div className=''>
        <h3 className={props.driversOrConstructers ? 'border' : ''} onClick={changeStandings}>Drivers</h3>
        </div>
        <div className=''>
        <h3 className={!props.driversOrConstructers ? 'border' : ''} onClick={changeStandings}>Constructors</h3>
        </div>
    </div>
    
    
    <div className='p-3'>
        {props.driversOrConstructers && 
        
        props.drivesStanding.map((driver) => {
           return (
               <div key={driver.Driver.driverId} className='text-left flex gap-x-1 justify-around 
               content-start border-solid border-gray border-2'>
              
              <div className=' w-full p-1'>
              <p className=''>{driver.position}</p>
              </div>
            <div className='w-full p-1'>
            <p>{driver.Driver.givenName} {driver.Driver.familyName}</p>
            </div>
              <div className='w-full p-1'>
              <small>{driver.points} point</small>
              </div>
                   
               </div>
           )
        })
        }
        </div>


        <div className='p-3'>
        {!props.driversOrConstructers && 
        
        props.constructorsStanding.map((constructor) => {
           return (
               <div key={constructor.Constructor.constructorId} className='text-left flex gap-x-1 justify-around 
               content-start border-solid border-gray border-2'>
              
              <div className=' w-full p-1'>
              <p className=''>{constructor.position}</p>
              </div>

              <div className='w-full p-1'>
               <p>{constructor.Constructor.name}</p>
               </div>
               
               <div className='w-full p-1'>
              <small>{constructor.points} point</small>
              </div>


            
                   
               </div>
           )
        })
        }
        </div>
    

    </div>
  )
}