import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import tmdbApi from '../../api/tmdbApi';
import apiConfig from '../../api/apiConfig';

import './detail.scss';
import CastList from './CastList';
import VideoList from './VideoList';

import MovieList from '../../components/movie-list/MovieList';
import Pie from '../../components/progress-circle/Pie';

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

                                    <div className="genres">
                                        {
                                            item.genres && item.genres.slice(0, 5).map((genre, i) => (
                                                <span key={i} className="genres__item">{genre.name}</span>
                                            ))
                                        }
                                    </div>
                                    {!<Pie percentage={item.vote_average * 10} colour="#ff0000" />}

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
                        {!(category === 'person') &&
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
                            </div>
                        }
                    </>
                )
            }
        </>
    );
}

export default Detail;