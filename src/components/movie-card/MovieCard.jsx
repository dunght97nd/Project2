import React from 'react';

import './movie-card.scss';

import { Link } from 'react-router-dom';

import Button from '../button/Button';

import { category } from '../../api/tmdbApi';
import apiConfig from '../../api/apiConfig';
// import Pie from '../progress-circle/Pie';

import { buildStyles, CircularProgressbarWithChildren } from 'react-circular-progressbar';

const MovieCard = props => {

    const item = props.item;
    // console.log(item);

    const link = '/' + category[props.category] + '/' + item.id;

    const bg = apiConfig.w500Image(item.poster_path || item.backdrop_path || item.profile_path);
    const date = item.release_date || item.first_air_date;
    const percent = Math.floor(item.vote_average * 10);

    return (
        <Link to={link}>
            <div className="movie-card" style={{ backgroundImage: `url(${bg})` }}>
                {/* {
                    item.vote_average
                        ? <Pie percentage={item.vote_average * 10} colour="#ff0000" /> : null
                } */}
                {item.vote_average ?
                    <div className="circular__progressbar__char">
                        <CircularProgressbarWithChildren
                            value={percent}
                            strokeWidth={10}

                            // background
                            // backgroundPadding={10}

                            styles={buildStyles({
                                pathColor: 'red',
                                trailColor: 'transparent',
                                // backgroundColor: "rgba(0, 0 ,0 ,0.5)",
                                strokeLinecap: 'round'
                            })}>
                            <div className="circular__progressbar__char__text">
                                {percent}%
                            </div>
                        </CircularProgressbarWithChildren>
                    </div> : null
                }


                {/* {
                    props.category === 'tv' && 
                    <Button>
                        <i className="bx bx-play"></i>
                    </Button>
                }
                {
                    props.category === 'movie' && 
                    <Button>
                        <i className="bx bx-play"></i>
                    </Button>
                } */}

                {
                    !(props.category === 'person') &&
                    <Button>
                        <i className="bx bx-play"></i>
                    </Button>
                }

            </div>
            <h3>
                {item.title || item.name}
                <span> {date && `(${date.slice(0, 4)})`}</span>
            </h3>

        </Link>
    );
}

export default MovieCard;