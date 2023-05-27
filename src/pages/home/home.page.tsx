import React from 'react';
import useMoviesData from '@features/movies/model/hooks/use-movies-data';
import MoviesCarousel from '@features/movies/components/movies-sections/movies-carousel';
import {movieBasicAdapter} from '@features/movies/lib/helpers';
import FeaturedVideo from '@features/movies/components/featured-video/featured-video';
import useFeaturedVideo from '@features/movies/model/hooks/use-featured-video';

const HomePage = () => {
    const {movies} = useMoviesData({
        sortBy: 'Date',
        sortOrder: 'desc',
    });

    const {data, onSelectMovie} = useFeaturedVideo({
        movies,
    })

    return (
        <div>
            <FeaturedVideo category={data.category} logo={data.titleImage} duration={data.duration}
                           mpaRating={data.mpaRating} releaseYear={data.releaseYear}
                           description={data.description} cover={data.coverImage} videoUrl={data.videoUrl}/>
            <MoviesCarousel className='translate-up' title={'Trending Now'}
                            movies={movies.map(movieBasicAdapter)} onSelect={onSelectMovie}/>
        </div>
    );
};

export default HomePage;