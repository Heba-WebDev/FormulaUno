import React from 'react'



export default function NextRace(props) {
  
       
    return (

        <div className='grid grid-col-2 gap-2 text-red-900'>
     
     
        <div className='flex flex-col bg-yellow-400 rounded p-2'>
       <small className='text-white'>1st Practice</small>
       <h4 className='m-auto text-l p-1'>{props.first}</h4>
       <h4 className='m-auto text-l p-1'>{props.firsttime}</h4>
       </div>

       <div className='flex flex-col bg-yellow-400 rounded p-2'>
       <small className='text-white'>2nd Practice</small>
       <h4 className='m-auto text-l p-1'>{props.second}</h4>
       <h4 className='m-auto text-l p-1'>{props.secondtime}</h4>
       </div>

       <div className='flex flex-col bg-yellow-400 rounded p-2'>
       <small className='text-white'>3rd Practice</small>
       <h4 className='m-auto text-l p-1'>{props.third}</h4>
       <h4 className='m-auto text-l p-1'>{props.thirdtime}</h4>
       </div>
      

       <div className='flex flex-col bg-lime-300 rounded p-2'>
       <small className='text-white'>Qualifying</small>
       <h4 className='m-auto text-l p-1'>{props.qualify}</h4>
       <h4 className='m-auto text-l p-1'>{props.qualifytime}</h4>
       </div> 

       <div className='col-span-2 flex flex-col bg-green-500 rounded p-2'>
       <small className='text-white'>Race</small>
       <h4 className='m-auto text-l p-1'>{props.date}</h4>
       <h4 className='m-auto text-l p-1'>{props.time}</h4>
       </div>

        </div>
    )
}