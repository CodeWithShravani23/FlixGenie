import { useDispatch, useSelector } from "react-redux";
import { upurl } from "../utils/constant"
import { useEffect } from "react";
import { addUpcoming } from "../utils/movieSlice";

const useUpcomingMov = () => {
  const dispatch = useDispatch();
  const upcomingMovies=useSelector(store=store.movie.upcomingMov)
  const getUpcomingMov = async () => {
    try {
      const data = await fetch(upurl);
      const json = await data.json();
    
      dispatch(addUpcoming(json.results));
    } catch (error) {
      console.error("🔥 Fetch error: ", error);
    }
  };

  useEffect(() => {
    !upcomingMovies && getUpcomingMov();
  }, []);
}
export default useUpcomingMov;