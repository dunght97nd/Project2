import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import tmdbApi, { personType } from '../../api/tmdbApi';
import apiConfig from '../../api/apiConfig';

import './detail.scss';
import CastList, { MovieCredits } from './CastList';
import VideoList from './VideoList';

import MovieList from '../../components/movie-list/MovieList';
// import Pie from '../../components/progress-circle/Pie';

import { buildStyles, CircularProgressbarWithChildren } from 'react-circular-progressbar';

const Detail = () => {

    const { category, id } = useParams();

    const [item, setItem] = useState(null);

    useEffect(() => {
        const getDetail = async () => {
            const response = await tmdbApi.detail(category, id, { params: {} });

            console.log(response);

            setItem(response);
            window.scrollTo(0, 0);
        }
        getDetail();
    }, [category, id]);

    return (
        <>
            {
                item && (
                    <>
                        <div className="banner" style={{ backgroundImage: `url(${apiConfig.originalImage(item.backdrop_path || item.poster_path || item.profile_path)})` }}></div>
                        <div className="mb-3 movie-content container">
                            <div className="movie-content__poster">
                                <div className="movie-content__poster__img"
                                    style={{ backgroundImage: `url(${apiConfig.originalImage(item.poster_path || item.backdrop_path || item.profile_path)})` }}>
                                </div>
                            </div>
                            {!(category === 'person') ?
                                <div className="movie-content__info">
                                    <h1 className="title">
                                        {
                                            item.title || item.name
                                            // `${item.title} (${item.release_date.slice(0, 4)})`
                                            // || `${item.name} (${item.release_date.slice(0, 4)})`
                                        }
                                    </h1>
                                    <p className='tagline'>{item.tagline}</p>
                                    <p className='release_date'>
                                        {item.release_date || item.first_air_date}

                                    </p>
                                    {(category === 'movie') ?
                                        <p className='release_date'>{Math.floor(item.runtime / 60)}h {item.runtime - Math.floor(item.runtime / 60) * 60}m</p>
                                        : (category === 'tv') ?
                                            <p className='release_date'>{item.episode_run_time}m</p> : null

                                    }


                                    <div className="genres">
                                        {
                                            // item.genres && item.genres.slice(0, 5).map((genre, i) => (
                                            item.genres && item.genres.map((genre, i) => (
                                                <span key={i} className="genres__item">{genre.name}</span>
                                            ))
                                        }
                                    </div>
                                    {/* {!<Pie percentage={item.vote_average * 10} colour="#ff0000" />} */}
                                    {item.vote_average ?
                                        <div className="circular-progressbar__char">
                                            <CircularProgressbarWithChildren
                                                value={item.vote_average * 10}
                                                strokeWidth={10}

                                                // background
                                                // backgroundPadding={10}

                                                styles={buildStyles({
                                                    pathColor: 'red',
                                                    trailColor: 'transparent',
                                                    // backgroundColor: "rgba(0, 0 ,0 ,0.5)",
                                                    strokeLinecap: 'round'
                                                })}>
                                                <div className="circular-progressbar__char__text">
                                                    {item.vote_average * 10}%
                                                </div>
                                            </CircularProgressbarWithChildren>
                                        </div> : null
                                    }

                                    <div className="cast">
                                        <div className="section__header">
                                            <h2>Overview</h2>
                                        </div>
                                        <p className="overview">{item.overview}</p>
                                    </div>

                                    <div className="cast">
                                        <div className="section__header">
                                            <h2>Casts</h2>
                                        </div>
                                        <CastList id={item.id} />
                                    </div>
                                </div> :
                                <div className="movie-content__info">
                                    <h1 className="title">
                                        {
                                            item.title || item.name
                                        }
                                    </h1>
                                    <div className="cast">
                                        <h3>Gender</h3>
                                        <p className="overview">{item.gender === '1' ? 'Female' : 'Male'}</p>
                                    </div>
                                    <div className="cast">
                                        <h3>Birthday</h3>
                                        <p className="overview">{item.birthday}</p>
                                    </div>
                                    <div className="cast">
                                        <h3>Place of Birth</h3>
                                        <p className="overview">{item.place_of_birth}</p>
                                    </div>
                                    <div className="cast">
                                        <h3>Biography</h3>
                                        <p className="overview">{item.biography}</p>
                                    </div>
                                </div>

                            }
                        </div>

                        {!(category === 'person') ?
                            <div className="container">
                                <div className="section mb-3">
                                    <VideoList id={item.id} />
                                </div>
                                <div className="section mb-3">
                                    <div className="section__header mb-2">
                                        <h2>Similar</h2>
                                    </div>

                                    <MovieList category={category} type="similar" id={item.id} />

                                </div>
                            </div> :
                            <div className="container">
                                <div className="section mb-3">
                                    <div className="section__header mb-2">
                                        <h2>Movie Credits</h2>
                                    </div>
                                    <MovieCredits id={item.id} type={personType.movieCredits} />
                                </div>

                                <div className="section mb-3">
                                    <div className="section__header mb-2">
                                        <h2>TV Credits</h2>
                                    </div>
                                    <MovieCredits id={item.id} type={personType.tvCredits} />
                                </div>
                            </div>
                        }
                    </>
                )
            }
        </>
    );
}

export default Detail;