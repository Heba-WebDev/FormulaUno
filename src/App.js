import React from 'react'
import Navbar from './Components/Navbar'
import Upcoming from './Components/Upcoming'
import Standings from './Components/Standings';
import LatestResults from './Components/LatestResults';
import Calender from './Components/Calender';
import {
  Link,
  Routes,
  Route,
} from "react-router-dom";


function App() {

  const [races, setRaces] = React.useState([]);
  let nextRace = [];
  const [drivesStanding, setDriversStanding] = React.useState([]);
  const [constructorsStanding, setConstructorsStanding] = React.useState([]);
  //when the app loads on, it will show the drivers standing, user can then 
  //change to constructer standings and the state will go from true to false
  const [driversOrConstructers, setDriversOrConstructers] = React.useState(true);
  const [latestResults, setLatestResults] = React.useState([]);
 
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
   console.log(data.MRData.RaceTable.Races[0].Results)
   setLatestResults(data.MRData.RaceTable.Races[0].Results)
     
    })
  },[])
  
  for(let i=0; i < races.length; i++) {
    if(races[i].date > todaysDate) {
      nextRace = races[i];
      break;
    }
  }


  return (
    <div className="container mx-auto gap-y-3 flex flex-col p-3">
     <Navbar />
    <Upcoming nextRace={nextRace}/> 
    <Standings 
    drivesStanding={drivesStanding} 
    constructorsStanding={constructorsStanding} 
    setDriversOrConstructers={setDriversOrConstructers}
    driversOrConstructers={driversOrConstructers}
    />
    <LatestResults latestResults={latestResults}/>
    <Calender />
    </div>
   
    
  );
}

export default App;
