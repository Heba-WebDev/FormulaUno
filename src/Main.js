import React from 'react'
import Upcoming from './Components/Upcoming'
import Standings from './Components/Standings';
import LatestResults from './Components/LatestResults';
import Calender from './Components/Calender';





function Main() {
  
  const [races, setRaces] = React.useState([]);
  let nextRace = [];
  const [drivesStanding, setDriversStanding] = React.useState([]);
  const [constructorsStanding, setConstructorsStanding] = React.useState([]);
  //when the app loads on, it will show the drivers standing, user can then 
  //change to constructer standings and the state will go from true to false
  const [driversOrConstructers, setDriversOrConstructers] = React.useState(true);
  const [latestResults, setLatestResults] = React.useState([]);
  const [lastRace, setLastRace] = React.useState('');
  
 
  let today = new Date();
  let todaysDate = `${today.getFullYear()}-${today.getMonth()+1 < 10 ? `0${today.getMonth()+1}` : `${today.getMonth()+1}`}-${today.getDate() < 10 ? `0${today.getDate()}` : `${today.getDate()}`}`;
  

  


const [remaingTime, SetRemainingTime] = React.useState({
  seconds: '0',
    minutes: '0',
    hours: '0',
    days: '0',
});



  React.useEffect(() => {
   fetch('http://ergast.com/api/f1/current.json')
    .then(response => response.json())
    .then(data => {
      setRaces(data.MRData.RaceTable.Races);
    })
     .catch(error => console.log(error))
  },[])

  React.useEffect(() => {
    fetch('http://ergast.com/api/f1/current/driverStandings.json')
    .then(response => response.json())
    .then(data => {
     // console.log(data.MRData.StandingsTable.StandingsLists[0].DriverStandings)
      setDriversStanding(data.MRData.StandingsTable.StandingsLists[0].DriverStandings)
    })
    .catch(error => console.log(error))
  },[])

  React.useEffect(() => {
    fetch('http://ergast.com/api/f1/current/constructorStandings.json')
    .then(response => response.json())
    .then(data => {
  // console.log(data.MRData.StandingsTable.StandingsLists[0].ConstructorStandings)
     setConstructorsStanding(data.MRData.StandingsTable.StandingsLists[0].ConstructorStandings)
    })
  },[])

  React.useEffect(() => {
    fetch('http://ergast.com/api/f1/current/last/results.json')
    .then(response => response.json())
    .then(data => {
  
   setLatestResults(data.MRData.RaceTable.Races[0].Results)
   setLastRace(data.MRData.RaceTable.Races[0].raceName)
    })
  },[])
  
  for(let i=0; i < races.length; i++) {
    if(races[i].date >= todaysDate) {
      nextRace = races[i];
      break;
    }
  }
 
  let interval;


  const startCountDown = () => {
  let raceUtcTime = new Date(`${nextRace.date}T${nextRace.time}`);
  let raceLocalTime = new Date(raceUtcTime.toLocaleString());
  let days, hours, minutes, seconds;
  
  interval = setInterval(() => {
    let now = new Date();
    let difference = raceLocalTime - now;
    if(difference) {
       days = Math.floor(difference/(24*60*60*1000));
       hours = Math.floor(difference % (24*60*60*1000)/(60*60*1000));
        minutes = Math.floor(difference % (60*60*1000)/(60*1000));
        seconds = Math.floor(difference % (60*1000)/(1000));
    }
    
    if(difference < 0) {
      clearInterval(interval)
    } else {
      SetRemainingTime({
        days: days,
        hours: hours,
        minutes: minutes,
        seconds:seconds,
      })
    }
  }, 1000);
  }
 

   

   React.useEffect(() => {
    startCountDown()
  })


  return (
    <div className="container mx-auto gap-y-3 flex flex-col">
     
    <Upcoming nextRace={nextRace} remaingTime={remaingTime}/> 
    <Standings 
    drivesStanding={drivesStanding} 
    constructorsStanding={constructorsStanding} 
    setDriversOrConstructers={setDriversOrConstructers}
    driversOrConstructers={driversOrConstructers}
    />
    <LatestResults latestResults={latestResults} lastRace={lastRace}/>
    <Calender nextRace={nextRace}/>
    </div>
   
    
  );
}

export default Main;
