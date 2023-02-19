import Upcoming from "./Components/Upcoming";
import Standings from "./Components/Standings";
import LatestResults from "./Components/LatestResults";
import Calender from "./Components/Calender";
import useFetchData from "./Hooks/useFetchData";
import useCurrentDate from "./Hooks/useCurrentDate";

function Main() {
  let nextRace = [];
  let todaysDate = useCurrentDate();
  const currentYear = new Date().getFullYear();
  const races = useFetchData(`http://ergast.com/api/f1/${currentYear}.json`);

  for (let i = 0; i < races.length; i++) {
    if (races[i].date >= todaysDate) {
      nextRace = races[i];
      break;
    }
  }

  return (
    <div className="container mx-auto gap-y-3 flex flex-col">
      <Upcoming races={races} />
      <Standings />
      <LatestResults />
      <Calender nextRace={nextRace} />
    </div>
  );
}

export default Main;
