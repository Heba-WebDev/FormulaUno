import React from 'react';

export default function ConstructorStandings(props) {

    const [constructorsStanding, setConstructorsStanding] = React.useState([]);
    React.useEffect(() => {
        fetch('http://ergast.com/api/f1/current/constructorStandings.json')
        .then(response => response.json())
        .then(data => {
      // console.log(data.MRData.StandingsTable.StandingsLists[0].ConstructorStandings)
         setConstructorsStanding(data.MRData.StandingsTable.StandingsLists[0].ConstructorStandings)
        })
      },[])

return (
   
<div className='container m-auto'>

{constructorsStanding.map((constructor) => {
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