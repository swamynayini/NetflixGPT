import { useDispatch, useSelector } from "react-redux"
import { addTrailerVideo } from "../untilies/movieSlice"
import { useEffect } from "react"
import { API_OPTION } from "../untilies/constant"

const useMovieTrailer = (moviesId)=>{

    const dispatch = useDispatch()
    const trailerVideo = useSelector(store=>store.movies.trailerVideo)

    const getMovieId = async ()=>{
        const data = await fetch("https://api.themoviedb.org/3/movie/"+ moviesId+"/videos?language=en-US" , API_OPTION)
        const json = await data.json()
        console.log(json)
        const filterData = json.results.filter((video)=>video.type === "Trailer")
        const trailer = filterData.length ? filterData[0] :json.results[0]
        // console.log(trailer)
        dispatch(addTrailerVideo(trailer))

    }
    useEffect(()=>{
        !trailerVideo && getMovieId()

    },[])

}
export default useMovieTrailer