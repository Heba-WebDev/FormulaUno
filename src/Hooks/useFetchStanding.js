import { useState, useEffect } from "react";

export default function useFetchStanding() {

  
    const [drivesStanding, setDriversStanding] = useState([]);
    //const [constructorsStanding, setConstructorsStanding] = useState([]);
   const currentYear = new Date().getFullYear();

   
    useEffect(() => {
      fetch(`http://ergast.com/api/f1/2023/driverStandings.json`)
      .then(response => response.json())
      .then(data => {
       setDriversStanding(data.MRData.StandingsTable.StandingsLists[0].DriverStandings)
      })
      
    },[]) 
   

    return drivesStanding;
}