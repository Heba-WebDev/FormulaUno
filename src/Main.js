import React, {useEffect, useState} from 'react'
import Upcoming from './Components/Upcoming'
import Standings from './Components/Standings';
import LatestResults from './Components/LatestResults';
import Calender from './Components/Calender';





function Main() {
  
  
  const [races, setRaces] = useState([]);
  let nextRace = [];
  //const [latestResults, setLatestResults] = useState([]);
 // const [lastRace, setLastRace] = useState('');
  
 
  let today = new Date();
  let todaysDate = `${today.getFullYear()}-${today.getMonth()+1 < 10 ? `0${today.getMonth()+1}` : `${today.getMonth()+1}`}-${today.getDate() < 10 ? `0${today.getDate()}` : `${today.getDate()}`}`;
  



 
  useEffect(() => {
   fetch('http://ergast.com/api/f1/current.json')
    .then(response => response.json())
    .then(data => {
      setRaces(data.MRData.RaceTable.Races);
    })
     .catch(error => console.log(error))
  },[])



  

  // useEffect(() => {
  //   fetch('http://ergast.com/api/f1/current/last/results.json')
  //   .then(response => response.json())
  //   .then(data => {
  
  //  setLatestResults(data.MRData.RaceTable.Races[0].Results)
  //  setLastRace(data.MRData.RaceTable.Races[0].raceName)
  //   })
  // },[])
  
  for(let i=0; i < races.length; i++) {
    if(races[i].date >= todaysDate) {
      nextRace = races[i];
      break;
    }
  }
 
  // let interval;


  // const startCountDown = () => {
  // let raceUtcTime = new Date(`${nextRace.date}T${nextRace.time}`);
  // let raceLocalTime = new Date(raceUtcTime.toLocaleString());
  // let days, hours, minutes, seconds;
  
  // interval = setInterval(() => {
  //   let now = new Date();
  //   let difference = raceLocalTime - now;
  //   if(difference) {
  //      days = Math.floor(difference/(24*60*60*1000));
  //      hours = Math.floor(difference % (24*60*60*1000)/(60*60*1000));
  //       minutes = Math.floor(difference % (60*60*1000)/(60*1000));
  //       seconds = Math.floor(difference % (60*1000)/(1000));
  //   }
    
  //   if(difference < 0) {
  //     clearInterval(interval)
  //   } else {
  //     SetRemainingTime({
  //       days: days,
  //       hours: hours,
  //       minutes: minutes,
  //       seconds:seconds,
  //     })
  //   }
  // }, 1000);
  // }
 

   

  //  useEffect(() => {
  //   startCountDown()
  // })


  return (

  
    <div className="container mx-auto gap-y-3 flex flex-col">

    <Upcoming races={races}/> 
    <Standings />
    <LatestResults />
    <Calender nextRace={nextRace}/>

    </div>
  
    
  );
}

export default Main;
