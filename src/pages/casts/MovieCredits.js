import React, { useState, useEffect } from 'react';

import tmdbApi from '../../api/tmdbApi';
import apiConfig from '../../api/apiConfig';

import { Link } from 'react-router-dom';
import MovieCard from '../../components/movie-card/MovieCard';

const MovieCredits = props => {

    const category = props.type;

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const getCredits = async () => {
            const response = await tmdbApi.movie_credits(category, props.id);

            // console.log(response.cast);
            setMovies(response.cast);
        }
        getCredits();
    }, [category, props.id]);

    return (
        <div className="movies">
            {
                movies.map((item, i) => (
                    item.poster_path && item.backdrop_path &&
                    // <Link to={`/${category}/${item.id}`} key={i} className="movies__item">
                    //     <div className="movies__item__bg">
                    //         <div className="movies__item__bg__img"
                    //             style={{ backgroundImage: `url(${apiConfig.w500Image(item.poster_path || item.backdrop_path)})` }}>
                    //         </div>
                    //     </div>
                    //     <p className="movies__item__name">{item.title || item.original_title || item.original_name}</p>
                    // </Link>
                    <MovieCard category={category} item={item} key={i} />
                ))
            }
        </div>

    );
}

export default MovieCredits