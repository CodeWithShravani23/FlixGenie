import { useDispatch, useSelector } from "react-redux";
import { topurl } from "../utils/constant"
import { useEffect } from "react";
import { addToprated } from "../utils/movieSlice";

const useTopRatedMov = () => {
    const dispatch = useDispatch();
    const topRatedMovies=useSelector(store=>store.movie.topRatedMov)
    const getTopRatedMov = async () => {

        try {
            const data = await fetch(topurl);
            const json = await data.json();
         
            dispatch(addToprated(json.results));
        } catch (error) {
            console.error("🔥 Fetch error: ", error);
        }
    };

    useEffect(() => {
       !topRatedMovies && getTopRatedMov();
    }, []);
}
export default useTopRatedMov;