import useFetchData from "../Hooks/useFetchData"
import useCurrentDate from "../Hooks/useCurrentDate";


export default function NextRace(props) {

    let nextRace= [];
    const currentYear = new Date().getFullYear();
    const todaysDate = useCurrentDate();
    const races = useFetchData(`http://ergast.com/api/f1/${currentYear}.json`);
    for(let i=0; i < races.length; i++) {
        if(races[i].date >= todaysDate) {
          nextRace = races[i];
          break;
        }
      }

  
    return (

     
        <div className='grid grid-col-2 gap-2 text-red-900'>
      
      {!nextRace && <p>Loading ...</p>}
      
       {nextRace &&   <div className='flex flex-col bg-yellow-400 rounded p-2'>
        <small className='text-white'>1st Practice</small>
        <h4 className='m-auto text-l p-1'>{nextRace.FirstPractice?.date?.split('-').reverse().join('-')}</h4>
        <h4 className='m-auto text-l p-1'>{nextRace.FirstPractice?.time}</h4>
        </div>}
 
        {nextRace && <div className='flex flex-col bg-yellow-400 rounded p-2'>
        <small className='text-white'>2nd Practice</small>
        <h4 className='m-auto text-l p-1'>{nextRace.SecondPractice?.date?.split('-').reverse().join('-')}</h4>
        <h4 className='m-auto text-l p-1'>{nextRace.SecondPractice?.time}</h4>
        </div>}
 
       {nextRace &&  <div className='flex flex-col bg-yellow-400 rounded p-2'>
        <small className='text-white'>{nextRace.ThirdPractice && !nextRace.Sprint  ? '3rd Practice' : 'Sprint Race'}</small>
        <h4 className='m-auto text-l p-1'>{nextRace.ThirdPractice?.date?.split('-').reverse().join('-') || nextRace.Sprint?.date?.split('-').reverse().join('-')}</h4>
        <h4 className='m-auto text-l p-1'>{nextRace.ThirdPractice?.time || nextRace?.Sprint?.time}</h4>
        </div>}
       
        
 
       {nextRace &&  <div className='flex flex-col bg-lime-300 rounded p-2'>
        <small className='text-white'>Qualifying</small>
        <h4 className='m-auto text-l p-1'>{nextRace.Qualifying?.date?.split('-').reverse().join('-')}</h4>
        <h4 className='m-auto text-l p-1'>{nextRace.Qualifying?.time}</h4>
        </div> }
 
       {nextRace &&  <div className='col-span-2 flex flex-col bg-green-500 rounded p-2'>
        <small className='text-white'>Race</small>
        <h4 className='m-auto text-l p-1'>{nextRace?.date?.split('-').reverse().join('-')}</h4>
        <h4 className='m-auto text-l p-1'>{nextRace?.time}</h4>
        </div>} 
 
         </div>
   
    )
}