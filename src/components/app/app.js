import React, { useState } from 'react';
import Header from '../header';
import Movie from '../movie';
import SearchPanel from '../search';
import Spinner from '../spinner';
import './app.css';

const App = () => {

    const[loading, setLoading] = useState(true);
    const[movies, setMovies] = useState([]);
    const[error, setError] = useState(null);
 
    const search = (searchValue) => {
        setLoading(true);
        setError(null);
        fetch(`https://www.omdbapi.com/?s=${searchValue}man&apikey=4a3b711b`)
        .then(response => response.json())
        .then((movies) => {
            if(movies.Response === 'True') {
                setMovies(movies.Search);
                setLoading(false);
            } else {
                setError(new Error('something is wrong'));
                setLoading(false);
            };
        });
    };
    
    const choice = <p className="App-intro">Enter the name of movie</p>;

    return (
        <div>
            <Header text={'Film search app with React Hooks'}/>
            <SearchPanel search={search} ></SearchPanel>
            <div>
                {loading && !error ? (
                    <div className="spinner">
                        {choice}
                        <Spinner />
                    </div>
                ) : error ? (
                    <div>{error}</div>
                ) : (
                    <div className="movies">{movies.map((movie, index) => {
                        return <Movie movie={movie} key={`${index} - ${movie}`} />
                    })}</div>
                )
                }
            </div> 
        </div>
    );
}; 

export default App;