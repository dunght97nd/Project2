import React, { useEffect, useState } from 'react'

import { useParams } from 'react-router';

import tmdbApi, { personType } from '../../api/tmdbApi';

import apiConfig from '../../api/apiConfig';

import MovieCredits from './MovieCredits';

import bg from '../../assets/footer-bg.jpg';

import './detail.scss';

const CastDetail = () => {

    const { id } = useParams();
    const category = window.location.pathname.split('/')[1]

    console.log(category);

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
                        <div className="banner" style={{ backgroundImage: `url(${bg})` }}></div>
                        <div className="mb-3 cast-content container">
                            <div className="cast-content__poster">
                                <div className="cast-content__poster__img"
                                    style={{ backgroundImage: `url(${apiConfig.originalImage(item.profile_path)})` }}>
                                </div>
                            </div>
                            <div className="cast-content__info">
                                <h1 className="title">
                                    {item.name}
                                </h1>
                                <p className='tagline'>{item.also_known_as + ' '}</p>
                                <div className="cast">
                                    <h2>Gender</h2>
                                    <p className="overview">{item.gender === '1' ? 'Female' : 'Male'}</p>
                                </div>
                                <div className="cast">
                                    <h2>Birthday</h2>
                                    <p className="overview">{item.birthday}</p>
                                </div>
                                <div className="cast">
                                    <h2>Place of Birth</h2>
                                    <p className="overview">{item.place_of_birth}</p>
                                </div>
                                <div className="cast">
                                    <h2>Biography</h2>
                                    <p className="overview">{item.biography}</p>
                                </div>
                            </div>
                        </div>
                        <div className="container">
                            <div className="section mb-3">
                                <div className="section__header mb-2">
                                    <h1>Movie Credits</h1>
                                </div>
                                <MovieCredits id={item.id} type={personType.movieCredits} />
                            </div>

                            <div className="section mb-3">
                                <div className="section__header mb-2">
                                    <h1>TV Credits</h1>
                                </div>
                                <MovieCredits id={item.id} type={personType.tvCredits} />
                            </div>
                        </div>
                    </>
                )
            }
        </>
    )
}

export default CastDetail