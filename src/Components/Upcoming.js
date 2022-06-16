import React from 'react';
import {Link} from 'react-router-dom'

export default function Upcoming(props) {

    let details = props.nextRace.date;

//to='next-race'
    
    const raceDetails = props.nextRace.date;
    return (
        <Link  to='next-race'>
        
         
          
        
        {props.nextRace.length !== 0 && 
        
        <div className='container max-auto flex flex-col
        p-5 rounded text-white bg-emerald-900 font-roboto gap-y-4'>
            
            <div className='flex gap-x-2'>
                
              <small className='text-sm text-gray-300'>Next Race ~</small>
              <small className='text-sm text-gray-300'>{props.nextRace.date.split('-').reverse().join('-')}</small>
          </div>
             
          <div className='flex flex-col '>
              <h1 className='text-4xl tracking-wide text-white'>{props.nextRace.raceName}</h1>
              
              
          </div>   
        </div>
        }

       
       {props.nextRace.length === 0 && 
       
       <div>
           <p>End of calnder year</p>
       </div>
       }
        
        </Link>
       
    )
}