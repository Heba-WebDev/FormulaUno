import React from 'react';

export default function Standings(props) {


  function changeStandings() {
    props.setDriversOrConstructers(prev => !prev)
  }

  const topThreeDrivers = props.drivesStanding.slice(0,3);
  const topThreeConstructors = props.constructorsStanding.slice(0,3);

  return (

    <div className='flex flex-col bg-white rounded p-3 '>

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
        
        topThreeDrivers.map((driver) => {
           return (
               <div key={driver.Driver.driverId} className='bg-slate-50 text-left flex  gap-x-1 
               content-start mb-1'>
              
              <div className=' w-full p-1 flex justify-center'>
              <p className=''>{driver.position}</p>
              </div>
            <div className='w-full p-1 flex justify-center'>
            <p>{driver.Driver.givenName} {driver.Driver.familyName}</p>
            </div>
              <div className='w-full p-1 flex justify-center'>
              <small>{driver.points} point</small>
              </div>
                   
               </div>
           )
        })
        }
        </div>


        <div className='p-3'>
        {!props.driversOrConstructers && 
        
        topThreeConstructors.map((constructor) => {
           return (
               <div key={constructor.Constructor.constructorId} className='bg-slate-50 text-left flex gap-x-1 
             mb-1'>
              
              <div className=' w-full p-1 flex justify-center'>
              <p className=''>{constructor.position}</p>
              </div>

              <div className='w-full p-1 flex justify-center'>
               <p>{constructor.Constructor.name}</p>
               </div>
               
               <div className='w-full p-1 flex justify-center'>
              <small>{constructor.points} point</small>
              </div>


            
                   
               </div>
           )
        })
        }


        <div>

            
          {props.driversOrConstructers &&
          
          
          <div>
            <small className='flex justify-end'>Full standing</small>
          </div>
          
          }
          
        </div>
        
        <div>

            
{!props.driversOrConstructers &&


<div>
  <small className='flex justify-end mt-5'>Full standing</small>
</div>

}

</div>


        
        </div>
    

    </div>
  )
}