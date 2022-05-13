import React from 'react'
import Navbar from './Components/Navbar'
import Upcoming from './Components/Upcoming'

function App() {

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
    <div>
     <Navbar />
     <Upcoming />
    </div>
  );
}

export default App;
