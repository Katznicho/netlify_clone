import axios from './axios'
import React from 'react';
import './Row.css';
import { useState, useEffect } from 'react';
import Youtube from 'react-youtube';
import movieTrailer from 'movie-trailer';
const baseUrl = 'https://image.tmdb.org/t/p/original/';
function Row({ title, fetchUrl, isLargeRow }) {
    const [movies, setMovies] = useState([])
    const [trailerUrl, setTrailerUrl] = useState('')
    useEffect(() => {
        async function fetchData() {
            try {
                const {data:{results}} = await axios.get(fetchUrl)
                setMovies(results)
            }
            catch (error) {
        
            }
 
        }
        fetchData()
    }, [fetchUrl])
    const opts = {
        width: "100%",
        height: "400px",
        playerVars: {
            autoplay:1
        }
    }
    const handleClick = (movie) => {
        const { name } = movie
        console.log(name)
        if (trailerUrl) {
            setTrailerUrl('')
        }
        else {
            movieTrailer(movie?.name||"Game of Thrones")
                .then(url => {
                    console.log(url)
                    const urlParams = new URLSearchParams(new URL(url).search)
                    setTrailerUrl(urlParams.get("v"))
                
            }).catch(error=>console.log(error))
        }
    }
    return (
        <div className="row">
            {/*title */}
            <h2>{title}</h2>
            <div className="row_posters">
                {
                    movies.map((movie, index) => (
                        <img
                             onClick = {()=>handleClick(movie)}
                            className={`row_poster_movies ${isLargeRow&&"row_poster_large"}`}
                            src={`${baseUrl}${isLargeRow?movie.poster_path:movie.backdrop_path}`} alt={movie.name} key={index}></img>
                    ))
                }
            </div>
            { trailerUrl&&<Youtube
                videoId={trailerUrl}
                opts={opts}
            />}

        </div>
    )
}

export default Row
