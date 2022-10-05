import React from "react";
import { useParams } from "react-router-dom";

export default function RaceResults() {
 
    const {raceId} = useParams();
    const date = new Date();
    const currentYear = date.getFullYear();
    const [fullResults, setFullResults] = React.useState([]);
   
    React.useEffect(() => {
      fetch(`http://ergast.com/api/f1/${currentYear}/${raceId}/results.json`)
       .then(response => response.json())
       .then(data => {
         setFullResults(data.MRData.RaceTable.Races[0].Results);
       })
        .catch(error => console.log(error))
     })
    
    return (
        <div className='container m-auto'>
             <div className='bg-slate-300 text-left flex content-start mb-1'>

                    <div className='w-full p-1 flex justify-center'>
                     <p>Position</p>
                    </div>

                    <div className='w-full p-1 flex justify-center'>
                        <p>Driver</p>
                    </div>

                    <div className='w-full p-1 flex justify-center'>
                        <p>Grid</p>
                    </div>
                    
                    <div className='w-full p-1 flex justify-center'>
                        <p>Points</p>
                    </div>

                    <div className='w-full p-1 flex justify-center'>
                        <p>Status</p>
                    </div>

                    </div>

            {fullResults.map((position) => {
                return (
                    <div key={position?.Driver?.permanentNumber} className='bg-slate-50 text-left flex
                    content-start mb-1'>

                    <div className='w-full p-1 flex justify-center'>
                     <p>{position?.position}</p>
                    </div>

                    <div className='w-full p-1 flex justify-center'>
                        <p>{`${position?.Driver?.givenName}${position?.Driver?.familyName}`}</p>
                    </div>

                    <div className='w-full p-1 flex justify-center'>
                        <p>{position?.grid}</p>
                    </div>
                    
                    <div className='w-full p-1 flex justify-center'>
                        <p>{position?.points}</p>
                    </div>

                    <div className='w-full p-1 flex justify-center'>
                        <p>{position?.status}</p>
                    </div>



                    </div>
                )
            })}
        </div>
    )
}