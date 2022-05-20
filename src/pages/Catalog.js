import React from 'react';

import { useParams } from 'react-router';

import PageHeader from '../components/page-header/PageHeader';

import { category as cate } from '../api/tmdbApi';

import MovieGrid from '../components/movie-grid/MovieGrid';
import { TabTitle } from '../ultils/GeneralFunctions';

const Catalog = () => {
    const { category } = useParams();

    category === cate.movie ?
        TabTitle(`The Movie Database | Movies`) :
        category === cate.person ? TabTitle(`The Movie Database | People`) : TabTitle(`The Movie Database | TV Series`);


    console.log(category);

    return (
        <>
            <PageHeader>
                {
                    (category === cate.movie ?
                        'Movies' : category === cate.person ? 'People' : 'Tv Series')
                }
            </PageHeader>

            <div className="container">
                <div className="section mb-3">
                    <MovieGrid category={category} />
                </div>
            </div>
        </>
    );
}

export default Catalog;