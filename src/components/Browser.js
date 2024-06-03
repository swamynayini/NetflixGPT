import Header from "./Header";
import useNowPlayingMoviess from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer"
import SecondaryContainer from "./SecondaryContainer"
import usePopularMovies from "../hooks/usePopularMovies";
import { useSelector } from "react-redux";
import GptSearch from "./GptSearch";

const Browser = ()=>{
    const showGptSearch = useSelector(store=>store.gpt.gptSearchToggle)

    useNowPlayingMoviess() 
    usePopularMovies()

    return(
        <div>
            <Header/>
            {
                showGptSearch ? <GptSearch/> : <> <MainContainer/>
                <SecondaryContainer/> </>
            }
            
        </div>
    )
}
export default Browser;