import React from 'react';
import MoviesCarousel from '@features/movies/components/movies-sections/movies-carousel';
import {movieBasicAdapter} from '@features/movies/lib/helpers';
import useMoviesData from '@features/movies/model/hooks/use-movies-data';
import {useNavigate} from 'react-router-dom';
import {TypeId} from '@lib/types';

const WatchLaterPage = () => {
    const navigate = useNavigate()
    const {movies} = useMoviesData({
        sortBy: 'Description',
        sortOrder: 'asc',
    });

    const onSelectMovie = (id: TypeId) => {
        navigate(`/movies/${id}`)
    }

    return (
        <div>
            <MoviesCarousel className="mb-10" title={'Watch Later'}
                            movies={movies.map(movieBasicAdapter)} perView={4} onSelect={onSelectMovie}/>
            <MoviesCarousel className="mb-10"
                            movies={movies.map(movieBasicAdapter)} perView={4} onSelect={onSelectMovie}/>

        </div>
    );
};


export default WatchLaterPage