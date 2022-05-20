import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';

import tmdbApi from '../../api/tmdbApi';
import apiConfig from '../../api/apiConfig';

import { Link } from 'react-router-dom';

import { Swiper, SwiperSlide } from 'swiper/react';

const CastList = props => {

    const { category } = useParams();

    const [casts, setCasts] = useState([]);

    useEffect(() => {
        const getCredits = async () => {
            const response = await tmdbApi.credits(category, props.id);
            setCasts(response.cast);
        }
        getCredits();
    }, [category, props.id]);

    return (
        <div className="casts">
            <Swiper
                grabCursor={true}
                spaceBetween={10}
                slidesPerView={'auto'}
            >
                {
                    casts.map((item, i) => (
                        item.profile_path && <SwiperSlide key={i}>
                            <Link to={`/person/${item.id}`} key={i} className="casts__item">
                                <div className="casts__item__bg">
                                    <div className="casts__item__bg__img" style={{ backgroundImage: `url(${apiConfig.w500Image(item.profile_path)})` }}></div>
                                </div>
                                <p className="casts__item__name">{item.name}</p>
                            </Link>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>

    );
}



export default CastList;