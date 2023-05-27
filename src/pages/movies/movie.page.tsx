import React from 'react';
import {useParams} from 'react-router-dom';
import {useGetMovieQuery} from '@features/movies/model/store/teachers-api';
import FeaturedVideo from '@features/movies/components/featured-video/featured-video';
import {movieAdapter} from '@features/movies/lib/helpers';

const MoviesPage = () => {
    const {id} = useParams()
    const {data: queryData, isSuccess} = useGetMovieQuery(id);

    const data = movieAdapter(queryData);

    return (
        <>
            {isSuccess && data &&
                <FeaturedVideo category={data.category} logo={data.titleImage} duration={data.duration}
                               isFullScreen={true}
                               mpaRating={data.mpaRating} releaseYear={data.releaseYear}
                               description={data.description} cover={data.coverImage}
                               videoUrl={data.videoUrl}/>}
        </>
    );
};


export default MoviesPage;