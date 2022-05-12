import React from 'react'
import Navbar from './Components/Navbar'

function App() {

  const [races, setRaces] = React.useState([]);
 

  // React.useEffect( async () => {
  //  await fetch('http://ergast.com/api/f1/current ')
  //  .then(response => response.json())
  //  .then(data => {
  //    console.log(data)
  //  })
  //  .catch(error => console.log(error))
  // }, [])

  React.useEffect(() => {
   fetch('http://ergast.com/api/f1/current/driverStandings')
    .then(response => response.text())
    .then(data => {
      
      console.log(data);
      
    })
     .catch(error => console.log(error))
  },[])

  return (
    <div>
     <Navbar />
    </div>
  );
}

export default App;
