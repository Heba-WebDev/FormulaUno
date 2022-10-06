import React from 'react';
import { Link } from 'react-router-dom';

export default function FullCalender(props) {
 

   
    const [races, setRaces] = React.useState([]);
    let today = new Date();
    let todaysDate = `${today.getFullYear()}-${today.getMonth()+1 < 10 ? `0${today.getMonth()+1}` : `${today.getMonth()+1}`}-${today.getDate() < 10 ? `0${today.getDate()}` : `${today.getDate()}`}`;
    React.useEffect(() => {
        fetch('http://ergast.com/api/f1/current.json')
         .then(response => response.json())
         .then(data => {
           setRaces(data.MRData.RaceTable.Races);
         })
          .catch(error => console.log(error))
       },[])

           
    
   
    return (
        <div className='container m-auto'>

      {races.map((race) => {
           
          return (
            <Link to={`/calender/${race.round}`}
            state={race.date > todaysDate} 
            key={race.Circuit.circuitId}
           className='bg-slate-50 text-left flex
            content-start mb-1'>
           
           <div className=' w-full p-1 flex justify-center'>
           <p className=''>{race.round}</p>
           </div>
         <div className='w-full p-1 flex justify-center'>
         <p>{race.raceName}, {race.Circuit.Location.country}</p>
         </div>
           <div className='w-full p-1 flex justify-center'>
           <small>{race.date}</small>
           
           </div>
  
            </Link>
          )
      })}
   </div>
    )
}