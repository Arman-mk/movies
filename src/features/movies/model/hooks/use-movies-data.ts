import {useGetMoviesQuery} from '@features/movies/model/store/teachers-api';
import {useMemo} from 'react';
import {IMovie} from '@features/movies/lib/types';
import {dataSorter} from '@features/movies/lib/helpers';

interface DataProps {
    sortBy: keyof IMovie,
    sortOrder: 'asc' | 'desc'
}

const useMoviesData = (props: DataProps | undefined) => {
    const {sortBy, sortOrder = 'asc'} = props || {};
    const {data, ...rest} = useGetMoviesQuery();

    const movies = useMemo(() => {
        return dataSorter(data, sortBy, sortOrder);
    }, [data, sortBy, sortOrder]);

    return {...rest, movies};
}

export default useMoviesData;