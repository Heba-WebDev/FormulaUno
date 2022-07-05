import React from 'react'
import Upcoming from './Components/Upcoming'
import Standings from './Components/Standings';
import LatestResults from './Components/LatestResults';
import Calender from './Components/Calender';
import dayjs from 'dayjs'
import customParseFormat from 'dayjs'
import objectSupport from 'dayjs'


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
  dayjs.extend(customParseFormat)
  dayjs.extend(objectSupport)

  const nextRaceFullDate = {
  month: '',
  day: '',
  hour: '',
  minutes: '',
  seconds: '',
  }
  const defaultRemainingTime = {
    seconds: '00',
    minutes: '00',
    hours: '00',
    days: '00',
}

const [remaingTime, SetRemainingTime] = React.useState(defaultRemainingTime);

React.useEffect(() => {
const intervalCountDown =  setInterval(() => {
  updateCountdown()
  }, 1000);

  return () => clearInterval(intervalCountDown)
},[])

function updateCountdown(nextRaceFullDate) {

}

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
      let raceDate = nextRace.date.split('-');
      let raceTime = nextRace.time.slice(0,-1);
      raceTime = raceTime.split(':');
      
      
    
      nextRaceFullDate.month = raceDate[1];
      nextRaceFullDate.day = raceDate[2];
      nextRaceFullDate.hour = raceTime[0];
      nextRaceFullDate.minutes = raceTime[1];
      nextRaceFullDate.seconds = raceTime[2];
      break;
    }
  }
 
  //console.log(dayjs(nextRace.date).diff(dayjs()))
  //console.log(nextRaceFullDate)

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
    <Calender />
    </div>
   
    
  );
}

export default Main;
