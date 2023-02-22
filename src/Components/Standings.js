import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import useFetchStanding from '../Hooks/useFetchData';
export default function Standings() {

  
  
  const [driversOrConstructers, setDriversOrConstructers] = useState(true);
  function changeStandings() {
    setDriversOrConstructers(prev => !prev)
  }
 

  const [drivesStanding, setDriversStanding] = useState([]);
  const [constructorsStanding, setConstructorsStanding] = useState([]);
 const currentYear = new Date().getFullYear();

 useEffect(() => {
  fetch(`http://ergast.com/api/f1/${currentYear}/driverStandings.json`)
   .then(response => response.json())
   .then(data => {
    setDriversStanding(data.MRData.StandingsTable.StandingsLists[0].DriverStandings);
   })
    .catch(error => error)
 },[])

 useEffect(() => {
  fetch(`http://ergast.com/api/f1/${currentYear}/constructorStandings.json`)
   .then(response => response.json())
   .then(data => {
    setConstructorsStanding(data.MRData.StandingsTable.StandingsLists[0].ConstructorStandings
      );
   })
    .catch(error => error)
 },[])

 
  return (

    <div className='bg-zinc-100 rounded p-4 flex flex-col'>

     
     {/* 1 */}
    <div className='flex gap-1 text-l p-3 bg-zinc-50 rounded justify-around mb-6'>
        <div className=''>
        <h3 className={driversOrConstructers ? 'selected' : 'text-gray-300'} onClick={changeStandings}>Drivers</h3>
        </div>
        <div className=''>
        <h3 className={!driversOrConstructers ? 'selected' : 'text-gray-300'} onClick={changeStandings}>Constructors</h3>
        </div>
    </div>
    

    {/* 2 */}
    
    <div className=''>
        {driversOrConstructers && 
       
        drivesStanding.slice(0,3).map((driver) => {
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

<div className=''>
{!driversOrConstructers && 
        
        constructorsStanding.slice(0,3).map((constructor) => {
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

            
          {driversOrConstructers &&
          
          
          <Link className='mt-6' to='/driver-standings'>
            <small className='flex justify-center text-xs bg-emerald-600 text-white py-1 px-1.5 rounded'>Full standing</small>
          </Link>
          
          }
          
        </div>
        
        <div>

            
{!driversOrConstructers &&


<Link to='/constructor-standings' className='mt-6'> 
  <small className='flex justify-center text-xs bg-emerald-600 text-white py-1 px-1.5 rounded'>Full standing</small>
</Link>

}

</div>


        
        </div>
    


     


    </div>
  )


  
}