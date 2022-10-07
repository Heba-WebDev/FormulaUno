import React, {useState, useEffect} from 'react';
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
   let nextRace = [];
   let today = new Date();
  let todaysDate = `${today.getFullYear()}-${today.getMonth()+1 < 10 ? `0${today.getMonth()+1}` : `${today.getMonth()+1}`}-${today.getDate() < 10 ? `0${today.getDate()}` : `${today.getDate()}`}`;
  const [remaingTime, SetRemainingTime] = useState({
    seconds: '0',
      minutes: '0',
      hours: '0',
      days: '0',
  });

  for(let i=0; i < props.races.length; i++) {
    if(props.races[i].date >= todaysDate) {
      nextRace = props.races[i];
      break;
    }
  }
 
  let interval;


  const startCountDown = () => {
  let raceUtcTime = new Date(`${nextRace.date}T${nextRace.time}`);
  let raceLocalTime = new Date(raceUtcTime.toLocaleString());
  let days, hours, minutes, seconds;
  
  interval = setInterval(() => {
    let now = new Date();
    let difference = raceLocalTime - now;
    if(difference) {
       days = Math.floor(difference/(24*60*60*1000));
       hours = Math.floor(difference % (24*60*60*1000)/(60*60*1000));
        minutes = Math.floor(difference % (60*60*1000)/(60*1000));
        seconds = Math.floor(difference % (60*1000)/(1000));
    }
    
    if(difference < 0) {
      clearInterval(interval)
    } else {
      SetRemainingTime({
        days: days,
        hours: hours,
        minutes: minutes,
        seconds:seconds,
      })
    }
  }, 1000);
  }

  useEffect(() => {
    startCountDown()
  })


    return (
        <Link  to='next-race'>
        
         
          
        
        {nextRace.length !== 0 && 
        
        <div className='container max-auto md:flex justify-between
        p-5 rounded text-white bg-emerald-900 font-roboto gap-y-4'>
            
            <div className='flex flex-col'> 
            <div className='flex pb-3'>
                
              <small className='text-sm text-gray-300'>Next Race ~</small>
              <small className='text-sm text-gray-300'>{nextRace.date.split('-').reverse().join('-')}</small>
          </div>
             
          <div className='flex flex-col'>
              <h1 className='text-2xl md:text-4xl tracking-wide text-white'>{nextRace.raceName}</h1>
              
          </div>
          
          </div> 
     {/* {console.log((new Date(currentYear, 0+1, 0)).getDate())} */}
          
          <div className='flex gap-x-3 mt-3 md:mt-0 justify-center align-center'>

          <div className='flex flex-col gap-x-1 text-green-500 p-1 rounded'>
          <span className='m-auto text-xl'>{remaingTime?.days < 10 ? `0${remaingTime?.days}` : remaingTime?.days}</span>
          <span className='m-auto text-xs'>Days</span>
          </div>

          <div className='flex flex-col gap-x-1 text-green-500 p-1 rounded'>
          <span className='m-auto text-xl'>{remaingTime?.hours < 10 ? `0${remaingTime?.hours}` : remaingTime?.hours}</span>
          <span className='m-auto text-xs'>Hours</span>
          </div>
          
          <div className='flex flex-col gap-x-1 text-green-500 p-1 rounded'>
          <span className='m-auto text-xl'>{remaingTime?.minutes < 10 ? `0${remaingTime?.minutes}`: remaingTime?.minutes}</span>
          <span className='m-auto text-xs'>Minutes</span>
          </div>

          <div className='flex flex-col gap-x-1 text-green-500 p-1 rounded'>
          <span className='m-auto text-xl'>{remaingTime?.seconds < 10 ? `0${remaingTime?.seconds}` : remaingTime?.seconds}</span>
          <span className='m-auto text-xs'>Seconds</span>
          </div>

          </div>
        </div>
        }

       
       {nextRace.length === 0 && 
       
       <div>
           <p>End of calnder year</p>
       </div>
       }
        
        </Link>
       
    )
}