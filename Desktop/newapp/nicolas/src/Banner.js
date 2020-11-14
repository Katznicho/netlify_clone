import React from 'react';
import { useState, useEffect } from 'react';
import axios from './axios';
import './Banner.css';
import requests from './request';
const baseUrl = 'https://image.tmdb.org/t/p/original/';
function Banner() {
    const strin = 'katende'
    const [movie, SetMovie] = useState({})
    const [string, setString] = useState('')
    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data: { results } } = await axios.get(requests.fetchNetflixOriginals)
                const randomImage = Math.floor(Math.random() * results.length)
                console.log(randomImage)
                SetMovie(results[randomImage])
                setString(movie.overview)
                
            }
            catch (error) {
                console.log('There was an error')
            }
          
        } 
      fetchData()  
    }, [])
    console.log(movie)
    const Truncate = (str, n) => {
        return str.length <=n?str:str.substr(0,n-1)+"..."
        
    }
    console.log(movie.overview)
    console.log(string)
    return (
        <header className="banner"
            style={{
                backgroundSize: "cover",
                backgroundImage: `url(${baseUrl}${movie?movie.backdrop_path:null})`,
                backgroundPosition: "center center"
        }}>
            <div className="banner_contents">
                <h1 className="banner_title">{movie && movie.name || movie && movie.original_name}</h1>
                <div className="banner_buttons">
                <button className="banner_button">Play</button>
                <button className="banner_button">MyList</button>
            </div>
                <h3 className="banner_description">{
                    movie.overview
                }</h3>

            </div>
            <div className="fade_bottom">
            </div>
            
        </header>
    )
}

export default Banner
