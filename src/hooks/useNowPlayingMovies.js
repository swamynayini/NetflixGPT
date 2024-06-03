import { useEffect } from "react"
import { API_OPTION } from "../untilies/constant"
import { useDispatch, useSelector } from "react-redux"
import { addPlayingMovies } from "../untilies/movieSlice"



const useNowPlayingMoviess = ()=>{

    const dispatch = useDispatch()

    const nowPlayingMovies = useSelector(store=>store.movies.nowPlayingMovies)

    const getPlayinggMovies = async ()=>{

        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', API_OPTION)
        const json = await data.json()
        // console.log(json.results)
        dispatch(addPlayingMovies(json.results))
    }
    
        useEffect(()=>{
            !nowPlayingMovies && getPlayinggMovies()
    },[])
}
export default useNowPlayingMoviess;
