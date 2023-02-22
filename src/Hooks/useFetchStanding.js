import { useState, useEffect } from "react";

export default function useFetchStanding(url) {

  
    const [drivesStanding, setDriversStanding] = useState([]);
 
   useEffect(() => {
    fetch(url)
     .then(response => response.json())
     .then(data => {
     
        setDriversStanding(data.MRData.StandingsTable.StandingsLists[0].DriverStandings);
      
     })
      .catch(error => error)
   },[url])


    return drivesStanding;
}