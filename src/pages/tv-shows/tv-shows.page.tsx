import React from 'react';
import MoviesCarousel from '@features/movies/components/movies-sections/movies-carousel';
import {movieBasicAdapter} from '@features/movies/lib/helpers';
import useMoviesData from '@features/movies/model/hooks/use-movies-data';
import {useNavigate} from 'react-router-dom';
import {TypeId} from '@lib/types';

const TvShowsPage = () => {
    const navigate = useNavigate()
    const {movies} = useMoviesData({
        sortBy: 'Date',
        sortOrder: 'desc',
    });

    const onSelectMovie = (id: TypeId) => {
        navigate(`/movies/${id}`)
    }

    return (
        <div>
            <MoviesCarousel className="mb-10" title={'Movies'}
                            movies={movies.map(movieBasicAdapter)} perView={4} onSelect={onSelectMovie}/>
            <MoviesCarousel className="mb-10" title={'Latest Movies'}
                            movies={movies.map(movieBasicAdapter)} perView={4} onSelect={onSelectMovie}/>
        </div>
    );
};


export default TvShowsPage;