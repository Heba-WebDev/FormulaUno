import React from 'react';


export default function FullCalender() {


    const [races, setRaces] = React.useState([]);

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
            <div key={race.Circuit.circuitId} className='bg-slate-50 text-left flex
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
                
            </div>
          )
      })}
   </div>
    )
}