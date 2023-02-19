import { useState, useEffect } from "react";

export default function useFetchData(url) {

    const [data, setData] = useState([]);
    useEffect(() => {
        fetch(url)
         .then(response => response.json())
         .then(data => {
           setData(data.MRData.RaceTable.Races);
         })
          .catch(error => console.log(error))
       },[url])

       return data;
}