import {useCallback, useMemo, useState} from 'react';
import StorageService from '@shared/services/storage.service';
import {IMovie} from '@features/movies/lib/types';
import {movieAdapter} from '@features/movies/lib/helpers';
import {TypeId} from '@lib/types';
import {FEATURE_MOVIE_STORAGE_KEY} from '@features/movies/lib/constants';

interface HookProps {
    movies: IMovie[],
    id?: TypeId
}

const useFeaturedVideo = ({movies, id}: HookProps) => {
    const [selectedId, setSelectedId] = useState(id || StorageService.get(FEATURE_MOVIE_STORAGE_KEY));

    const data = useMemo(() => {
        return movies.find(movie => String(movie.Id) === String(selectedId)) || movies[0] || {}
    }, [selectedId, movies])

    const onSelectMovie = useCallback((id: number | string) => {
        setSelectedId(id);
        StorageService.set(FEATURE_MOVIE_STORAGE_KEY, String(id));
    }, [])

    return {
        data: movieAdapter(data),
        onSelectMovie
    }
}

export default useFeaturedVideo