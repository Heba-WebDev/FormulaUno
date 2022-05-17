import React from 'react';

export default function Upcoming(props) {


    
    
    return (
        <>
         <h1>Coming race</h1>
         

             
        
        {props.nextRace.length != 0 && 
        
        <div>
            <p>{props.nextRace.date}</p>
        <p>{props.nextRace.raceName}</p>
        <p>{props.nextRace.Circuit.Location.country}</p>
        
        </div>
        }

       
       {props.nextRace.length == 0 && 
       
       <div>
           <p>End of calnder year</p>
       </div>
       }
        
        </>
       
    )
}