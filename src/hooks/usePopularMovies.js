import { useEffect } from "react"
import { API_OPTION } from "../untilies/constant"
import { useDispatch, useSelector } from "react-redux"
import { addPopularMovies } from "../untilies/movieSlice"



const usePopularMovies = ()=>{

    const dispatch = useDispatch()

    const PopularMovies = useSelector(store=>store.movies.PopularMovies)

    const getPopularMovies = async ()=>{

        const data = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', API_OPTION)
        const json = await data.json()
        // console.log(json.results)
        dispatch(addPopularMovies(json.results))
    }
    
        useEffect(()=>{
            !PopularMovies && getPopularMovies()
    },[])
}
export default usePopularMovies;
