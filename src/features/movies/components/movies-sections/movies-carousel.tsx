import React, {FC, useCallback} from 'react';
import {Carousel} from '@core/carousel';
import MovieCard from '@features/movies/components/movie-cards/movie-card';
import {IMovieBasic} from '@features/movies/lib/types';
import {TypeId} from '@lib/types';

interface MoviesCarouselProps {
    title?: string | React.ReactNode;
    movies: IMovieBasic[];
    onSelect: (id: TypeId) => void,
    className?: string
    perView?: number
}

const MoviesCarousel: FC<MoviesCarouselProps> = ({title, movies, onSelect, className, perView = 8}) => {

    const CAROUSEL_SETTINGS = {
        breakpoints: {
            '(min-width: 400px)': {
                slides: {perView: 2, spacing: 5},
            },
            '(min-width: 1000px)': {
                slides: {perView, spacing: 10},
            },
        },
        slides: {perView: 1},
    }

    const onClickMovie = useCallback((id: TypeId) => {
        onSelect && onSelect(id);
    }, [onSelect]);
    console.log(movies);
    return (
        <div className={className}>
            {title && <h3 className='text-white text-xl'>{title}</h3>}
            <Carousel settings={CAROUSEL_SETTINGS}>
                {movies.map((movie: IMovieBasic) => (
                    <MovieCard key={movie.id} id={movie.id} title={movie.title} thumbnail={movie.coverImage}
                               onClick={onClickMovie}/>
                ))}
            </Carousel>
        </div>
    );
};

export default MoviesCarousel;