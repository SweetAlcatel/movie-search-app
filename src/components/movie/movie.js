import React from 'react';
import './movie.css';

const Movie = ({ movie }) => {

    const defaultPlaceholder = "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg";

    const poster = 
    movie.Poster === 'N/A' ? defaultPlaceholder : movie.Poster; 

    return (
        <div className="pages-of-movie">
            <h3>{movie.Title}</h3>
            <img src={poster} alt={`The movie title: ${movie.Title}`}/>
            <p>{movie.Year}</p>
        </div>
    );
};


export default Movie;