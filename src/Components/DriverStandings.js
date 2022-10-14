import React from 'react';
import { useQuery } from '@tanstack/react-query';

export default function DriverStandings() {
    // const [drivesStanding, setDriversStanding] = React.useState([]);
    // React.useEffect(() => {
    //     fetch('http://ergast.com/api/f1/current/driverStandings.json')
    //     .then(response => response.json())
    //     .then(data => {
    //      // console.log(data.MRData.StandingsTable.StandingsLists[0].DriverStandings)
    //       setDriversStanding(data.MRData.StandingsTable.StandingsLists[0].DriverStandings)
    //     })
    //     .catch(error => console.log(error))
    //   },[])

      const fetchDriverStandings = async () => {
        const response = await fetch('http://ergast.com/api/f1/current/driverStandings.json');
        return response.json()
      }
    
      const driverStandings = useQuery(['dirverStandings'], fetchDriverStandings);
    

      if(driverStandings.isLoading) {
        return <div>Loading ...</div>
    }

    if(driverStandings.isError) {
        return <div>Error ...</div>
    }
     
return (
   <div className='container  m-auto'>

      {driverStandings.data.MRData.StandingsTable.StandingsLists[0].DriverStandings.map((driver) => {
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
      })} 
   </div>
)

}