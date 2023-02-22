import React from 'react';
import { useQuery } from '@tanstack/react-query';



export default function ConstructorStandings(props) {



      const fetchConstructorStandings = async () => {
        const response = await fetch(`http://ergast.com/api/f1/${new Date().getFullYear()}/constructorStandings.json`);
        return response.json()
      }
    
      const constructorStandings = useQuery(['constructorStandings'], fetchConstructorStandings);
    

      if(constructorStandings.isLoading) {
        return <div>Loading ...</div>
    }

    if(constructorStandings.isError) {
        return <div>Error ...</div>
    }
     

return (
   
<div className='container m-auto'>

{constructorStandings.data.MRData.StandingsTable.StandingsLists[0].ConstructorStandings.map((constructor) => {
    return (
        <div key={constructor.Constructor.constructorId} className='bg-slate-50 text-left flex 
        mb-1'>

       <div className=' w-full p-1 flex justify-center'>
       <p className=''>{constructor.position}</p>
       </div>
     <div className='w-full p-1 flex justify-center'>
     <p>{constructor.Constructor.name}</p>
     </div>
       <div className='w-full p-1 flex justify-center'>
       <small>{constructor.points} point</small>
       </div>
            
        </div>
    )
})}
</div>
  
)

}