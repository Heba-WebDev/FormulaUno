import React from 'react';

export default function Standings(props) {


  function changeStandings() {
    props.setDriversOrConstructers(prev => !prev)
  }

  const topThreeDrivers = props.drivesStanding.slice(0,3);
  const topThreeConstructors = props.constructorsStanding.slice(0,3);

  return (

    <div className='bg-zinc-100 rounded p-4 '>

     
     {/* 1 */}
    <div className='flex gap-12 text-l p-3 bg-zinc-50 rounded justify-around'>
        <div className=''>
        <h3 className={props.driversOrConstructers ? 'selected' : 'text-gray-300'} onClick={changeStandings}>Drivers</h3>
        </div>
        <div className=''>
        <h3 className={!props.driversOrConstructers ? 'selected' : 'text-gray-300'} onClick={changeStandings}>Constructors</h3>
        </div>
    </div>
    

    {/* 2 */}
    
    <div className='p-3'>
        {props.driversOrConstructers && 
        
        topThreeDrivers.map((driver) => {
           return (
               <div key={driver.Driver.driverId} className='bg-slate-50 text-left flex
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



{/* 3 */}

<div className='p-3'>
{!props.driversOrConstructers && 
        
        topThreeConstructors.map((constructor) => {
           return (
               <div key={constructor.Constructor.constructorId} className='bg-slate-50 text-left flex 
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
  <small className='flex justify-end'>Full standing</small>
</div>

}

</div>


        
        </div>
    

    </div>
  )
}