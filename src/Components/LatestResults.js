
import {useQuery} from '@tanstack/react-query'


export default function LatestResults () {

    //const [latestResults, setLatestResults] = useState([]);
    // const [lastRace, setLastRace] = useState('');
    // const topThree = latestResults.slice(2,3); 
    // const topTwo = latestResults.slice(1,2);
    // const topOne = latestResults.slice(0,1);

    const fetchResults = async () => {
      const response = await fetch('http://ergast.com/api/f1/current/last/results.json');
      return response.json();
    }

    const { isLoading, isError, data } = useQuery(['results'], fetchResults)
    
    if(isLoading) {
        return <div>Loading ...</div>
    }

    if(isError) {
        return <div>Error ...</div>
    }
    
   
    // useEffect(() => {
    //     fetch('http://ergast.com/api/f1/current/last/results.json')
    //     .then(response => response.json())
    //     .then(data => {
      
    //    setLatestResults(data.MRData.RaceTable.Races[0].Results)
    //    setLastRace(data.MRData.RaceTable.Races[0].raceName)
    //     })
    //   },[])


     
return (

    
    <div className='grid bg-zinc-50 rounded p-4'>
      <div className='text-center tracking-widest leading-3 uppercase'>
          <h3 className='border text-center pb-1 text-sm'>Latest results: <span className='text-sm'>{data.MRData.RaceTable.Races[0].raceName}</span></h3>
      </div>
        

      <div className='flex gap-y-3 md:p-4 mt-4 justify-around'>
       
  
      
       {/* top-two from last race*/}
        
        {data.MRData.RaceTable.Races[0].Results.slice(1,2).map((driver) => {
            return (
                <div key={driver.Driver.driverId} className=' flex '>

          <div className='bg-zinc-100 flex flex-col p-4  gap-y-1'>
           
           <small className='text-2xl self-center'>{driver.position}</small>
           <p className='text-2xl md:text-4xl self-center'>{driver.Driver.code}</p>
           <small className='self-center'>{driver.Constructor.name}</small>
          </div>

        
                </div>

            )
        })} 

         {/*top one from last race*/}

        {data.MRData.RaceTable.Races[0].Results.slice(0,1).map((driver) => {
            return (
                <div key={driver.Driver.driverId} className='flex'>

          <div className='bg-zinc-100 flex flex-col p-4  gap-y-1'>
           
           <small className='text-2xl self-center'>{driver.position}</small>
           <p className='text-2xl md:text-4xl self-center'>{driver.Driver.code}</p>
           <small className='self-center'>{driver.Constructor.name}</small>
          </div>

       

                </div>
            )
        })} 
    
       {/*top three from last race*/}
        {data.MRData.RaceTable.Races[0].Results.slice(2,3).map((driver) => {
            return (
                <div key={driver.Driver.driverId} className=' flex'>

          <div className='bg-zinc-100 flex flex-col p-4  gap-y-1'>
           
           <small className='text-3xl self-center'>{driver.position}</small>
           <p className='text-2xl md:text-4xl self-center'>{driver.Driver.code}</p>
           <small className='self-center'>{driver.Constructor.name}</small>
          </div>

       

                </div>
            )
        })} 
       
    
       </div>
            
</div>


)

}