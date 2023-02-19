import { Link } from "react-router-dom";
import useFetchData from "../Hooks/useFetchData";
import useCurrentDate from "../Hooks/useCurrentDate";
export default function FullCalender(props) {
  const currentYear = new Date().getFullYear();
  const todaysDate = useCurrentDate();
  const races = useFetchData(`http://ergast.com/api/f1/${currentYear}.json`);

  return (
    
    <div className="container m-auto .bg-primary">
      {races.map((race) => {
        return (
        
          <Link
            to={`/calender/${race.round}`}
            state={race.date > todaysDate}
            key={race.Circuit.circuitId}
            className="bg-slate-50 text-left flex
            content-start mb-1"
          >
            <div className=" w-full p-1 flex justify-center">
              <p className="">{race.round}</p>
            </div>
            <div className="w-full p-1 flex justify-center">
              <p>
                {race.raceName}, {race.Circuit.Location.country}
              </p>
            </div>
            <div className="w-full p-1 flex justify-center">
              <small>{race.date}</small>
            </div>
          </Link>
        );
      })}
    </div>
   
  );
}
