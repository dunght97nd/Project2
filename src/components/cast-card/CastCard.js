import React from 'react';

import './cast-card.scss';

import { Link } from 'react-router-dom';

import { category } from '../../api/tmdbApi';
import apiConfig from '../../api/apiConfig';

const CastCard = props => {

    const item = props.item;
    console.log(item);

    const link = '/' + category[props.category] + '/' + item.id;

    const bg = apiConfig.w500Image(item.profile_path);

    return (
        item.profile_path &&
        <Link to={link}>
            <div className="cast-card">
                <div className="cast-card__bg"
                    style={{ backgroundImage: `url(${bg})` }}>
                </div>
            </div>
            <h3>
                {item.name}
            </h3>

        </Link >
    );
}

export default CastCard;