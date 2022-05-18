import React from 'react'
import Navbar from './Components/Navbar'
import Upcoming from './Components/Upcoming'

function App() {

  const [races, setRaces] = React.useState([]);
  let nextRace = [];
 
  let today = new Date();
  let todaysDate = `${today.getFullYear()}-${today.getMonth()+1 < 10 ? `0${today.getMonth()+1}` : `${today.getMonth()+1}`}-${today.getDate()}`;
  
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
      break;
    }
  }


  return (
    <div className="container mx-auto">
     <Navbar />
    <Upcoming nextRace={nextRace}/> 
    </div>
  );
}

export default App;
