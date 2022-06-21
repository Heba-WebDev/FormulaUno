import React from 'react'
import Main from './Main'
import DriverStandings from './Components/DriverStandings';
import ConstructorStandings from './Components/ConstructorStandings';
import FullCalender from './Components/FullCalendar';
import NextRace from './Components/NextRace';
import Navbar from './Components/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {

  const [races, setRaces] = React.useState([]);
  let nextRace = [];
  
 
  let today = new Date();
  let todaysDate = `${today.getFullYear()}-${today.getMonth()+1 < 10 ? `0${today.getMonth()+1}` : `${today.getMonth()+1}`}-${today.getDate() < 10 ? `0${today.getDate()}` : `${today.getDate()}`}`;
   
  let FirstPractice = '';
  let FirstPracticeTime = '';
  let SecondPractice = '';
  let SecondPracticeTime = '';
  let ThirdPractice = '';
  let ThirdPracticeTime = '';
  let Qualifying = '';
  let QualifyingTime = '';
  
  React.useEffect(() => {
   fetch('http://ergast.com/api/f1/current.json')
    .then(response => response.json())
    .then(data => {
      setRaces(data.MRData.RaceTable.Races);
    })
     .catch(error => console.log(error))
  },[])



 
  
  for(let i=0; i < races.length; i++) {
    if(races[i].date > todaysDate) {
      nextRace = races[i];
      FirstPractice = races[i].FirstPractice.date;
      FirstPracticeTime = races[i].FirstPractice.time;
      SecondPractice = races[i].SecondPractice.date;
      SecondPracticeTime = races[i].SecondPractice.time;
      ThirdPractice = races[i].ThirdPractice.date;
      ThirdPracticeTime = races[i].ThirdPractice.time;
      Qualifying = races[i].Qualifying.date;
      QualifyingTime = races[i].Qualifying.time;
      break;
    }
  }
 
  
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Navbar />}>
    <Route index element={<Main />} />
    <Route path="next-race" element={<NextRace
     first={FirstPractice}
     firsttime={FirstPracticeTime}
     second={SecondPractice}
     secondtime={SecondPracticeTime}
     third={ThirdPractice}
     thirdtime={ThirdPracticeTime}
     qualify={Qualifying}
     qualifytime={QualifyingTime}
     date={nextRace.date}
     time={nextRace.time}
    
     />} />
    <Route path="driver-standings" element={<DriverStandings />} />
    <Route path="constructor-standings" element={<ConstructorStandings />} />
    <Route path="calendar" element={<FullCalender races={{races}}/>} />
    </Route>
    </Routes>
    </BrowserRouter>
   
    
  );
}

export default App;
