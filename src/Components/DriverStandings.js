import { useQuery } from '@tanstack/react-query';
import Spinner from "../BootsrapComponents/Spinner"
import useFetchStanding from "../Hooks/useFetchStanding"
export default function DriverStandings() {

      const fetchDriverStandings = async () => {
        const response = await fetch(`http://ergast.com/api/f1/${new Date().getFullYear()}/driverStandings.json`) ;
        return response.json()
      }
    
      
      const driverStandings = useQuery(['dirverStandings'], fetchDriverStandings);
    

      if(driverStandings.isLoading) {
        return <Spinner />
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