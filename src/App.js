import React from 'react'
import Main from './Main'
import DriverStandings from './Components/DriverStandings';
import ConstructorStandings from './Components/ConstructorStandings';
import FullCalender from './Components/FullCalendar';
import NextRace from './Components/NextRace';
import Navbar from './Components/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RaceResults from './Components/RaceResults';


function App() {

  const [races, setRaces] = React.useState([]);
  let nextRace = [];
  
 
  let today = new Date();
  let todaysDate = `${today.getFullYear()}-${today.getMonth()+1 < 10 ? `0${today.getMonth()+1}` : `${today.getMonth()+1}`}-${today.getDate() < 10 ? `0${today.getDate()}` : `${today.getDate()}`}`;
   
  let nextRaceDetails = {
    FirstPractice: '',
    FirstPracticeTime:'',
    SecondPractice: '',
    SecondPracticeTime: '',
    ThirdPractice: '',
    ThirdPracticeTime: '',
    Qualifying: '',
    QualifyingTime: '',
    sprintRace: '',
  }
  
  
  React.useEffect(() => {
   fetch('http://ergast.com/api/f1/current.json')
    .then(response => response.json())
    .then(data => {
      setRaces(data.MRData.RaceTable.Races);
    })
     .catch(error => console.log(error))
  },[])



 
  
  for(let i=0; i < races.length; i++) {
    
    if((todaysDate === races[i].date) || (races[i].date !== todaysDate && races[i].date > todaysDate)) {
      
      nextRace = races[i];
      nextRaceDetails.FirstPractice = races[i].FirstPractice.date;
      nextRaceDetails.FirstPracticeTime = races[i].FirstPractice.time;
      nextRaceDetails.SecondPractice = races[i].SecondPractice.date;
      nextRaceDetails.SecondPracticeTime = races[i].SecondPractice.time;
      nextRaceDetails.Qualifying = races[i].Qualifying.date;
      nextRaceDetails.QualifyingTime = races[i].Qualifying.time;
      nextRaceDetails.ThirdPractice = races[i].ThirdPractice ? races[i].ThirdPractice.date : '';
      nextRaceDetails.ThirdPracticeTime = races[i].ThirdPractice ? races[i].ThirdPractice.time : '';
      nextRaceDetails.sprintRace = races[i].Sprint ? races[i].Sprint.date : '';
      nextRaceDetails.sprintRaceTime = races[i].Sprint ? races[i].Sprint.time : '';
      break;
    }  

    
  
  }
 
  
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Navbar />}>
    <Route index element={<Main />} />
    <Route path="next-race" element={<NextRace
     first={nextRaceDetails.FirstPractice}
     firsttime={nextRaceDetails.FirstPracticeTime}
     second={nextRaceDetails.SecondPractice}
     secondtime={nextRaceDetails.SecondPracticeTime}
     third={nextRaceDetails.ThirdPractice}
     thirdtime={nextRaceDetails.ThirdPracticeTime}
     qualify={nextRaceDetails.Qualifying}
     qualifytime={nextRaceDetails.QualifyingTime}
     sprintRace = {nextRaceDetails.sprintRace}
     sprintRaceTime = {nextRaceDetails.sprintRaceTime}
     date={nextRace.date}
     time={nextRace.time}
    
     />} />
    <Route path="driver-standings" element={<DriverStandings />} />
    <Route path="constructor-standings" element={<ConstructorStandings />} />
    <Route path="calender" element={<FullCalender races={{races}}/>}/>
    <Route path='calender/:raceId' element={<RaceResults nextRace={nextRace} />} />
    </Route>
    </Routes>
    </BrowserRouter>
   
    
  );
}

export default App;
