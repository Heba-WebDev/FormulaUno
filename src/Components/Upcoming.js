import React from 'react';
import {Link} from 'react-router-dom'

export default function Upcoming(props) {

//     var currentDate = new Date();
// var currentYear = currentDate.getFullYear();
// var currentMonth = currentDate.getMonth();

//to='next-race'

//var currentDate = new Date();
// var currentYear = currentDate.getFullYear();
// var currentMonth = currentDate.getMonth();

// var currentMonthLastDate = (new Date(currentYear, currentMonth, 0)).getDate();

// var daysLeftInMonth = currentMonthLastDate - currentDate.getDate();

//console.log(daysLeftInMonth);
    

   // const raceDetails = props.nextRace.date;
    
   
    return (
        <Link  to='next-race'>
        
         
          
        
        {props.nextRace.length !== 0 && 
        
        <div className='container max-auto flex justify-between
        p-5 rounded text-white bg-emerald-900 font-roboto gap-y-4'>
            
            <div className='flex flex-col'> 
            <div className='flex pb-3'>
                
              <small className='text-sm text-gray-300'>Next Race ~</small>
              <small className='text-sm text-gray-300'>{props.nextRace.date.split('-').reverse().join('-')}</small>
          </div>
             
          <div className='flex flex-col '>
              <h1 className='text-4xl tracking-wide text-white'>{props.nextRace.raceName}</h1>
              
          </div>
          
          </div> 
     {/* {console.log((new Date(currentYear, 0+1, 0)).getDate())} */}
          
          <div className='flex gap-x-3'>

          <div className='flex flex-col gap-x-1 bg-green-500 text-green-100 p-1 rounded'>
          <span>{props.remaingTime.days}</span>
          <span>Days</span>
          </div>

          <div className='flex flex-col gap-x-1 bg-green-500 text-green-100 p-1 rounded'>
          <span>{props.remaingTime.hours}</span>
          <span>Hours</span>
          </div>
          
          <div className='flex flex-col gap-x-1 bg-green-500 text-green-100 p-1 rounded'>
          <span>{props.remaingTime.minutes}</span>
          <span>Minutes</span>
          </div>

          <div className='flex flex-col gap-x-1 bg-green-500 text-green-100 p-1 rounded'>
          <span>{props.remaingTime.seconds}</span>
          <span>Secondes</span>
          </div>

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