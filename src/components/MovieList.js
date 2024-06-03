import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title,movies}) => {
    // console.log(movies)
  return (
    <div>
        <h1 className='text-2xl pt-[14rem] text-white'>{title}</h1>
        <div className='flex overflow-x-scroll'>
            <div className='flex '>
                {movies.map((movie)=>(<MovieCard key={movie.id} posterPath = {movie.poster_path}/>))}
            </div>
        </div>
        
    </div>
  )
}

export default MovieList