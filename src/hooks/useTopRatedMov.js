import { useDispatch } from "react-redux";
import { topurl } from "../utils/constant"
import { useEffect } from "react";
import { addToprated } from "../utils/movieSlice";

const useTopRatedMov = () => {
    const dispatch = useDispatch();
    const getTopRatedMov = async () => {

        try {
            const data = await fetch(topurl);
            const json = await data.json();
            console.log(json.results);
            dispatch(addToprated(json.results));
        } catch (error) {
            console.error("🔥 Fetch error: ", error);
        }
    };

    useEffect(() => {
        getTopRatedMov();
    }, []);
}
export default useTopRatedMov;