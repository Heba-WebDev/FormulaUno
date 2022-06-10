import React from 'react'


export default function NextRace() {
  
    let nextRace = [];
    const [races, setRaces] = React.useState([]);
    React.useEffect(() => {
        fetch('http://ergast.com/api/f1/current.json')
         .then(response => response.json())
         .then(data => {
           setRaces(data.MRData.RaceTable.Races);
         })
          .catch(error => console.log(error))
       },[])

       let today = new Date();
  let todaysDate = `${today.getFullYear()}-${today.getMonth()+1 < 10 ? `0${today.getMonth()+1}` : `${today.getMonth()+1}`}-${today.getDate() < 10 ? `0${today.getDate()}` : `${today.getDate()}`}`;

  for(let i=0; i < races.length; i++) {
    if(races[i].date > todaysDate) {
      nextRace = races[i];
      console.log(nextRace)
      break;
    }
  }

       
    return (

        <div>
     
     hi

        </div>
    )
}