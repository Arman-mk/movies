import BaseLayout from '@app/layouts/base-layout/components/base-layout'
import {ReactNode} from 'react'
import MoviesPage from '@pages/movies/movies.page';
import HomePage from '@pages/home/home.page';
import TvShowsPage from '@pages/tv-shows/tv-shows.page';
import MoviePage from '@pages/movies/movie.page';
import GenresPage from '@pages/genres/genres.page';
import WatchLaterPage from '@pages/watch-later/watch-later.page';

interface IRoute {
    key: string
    path?: string
    component: ReactNode | null
    exact?: boolean
    index?: boolean
    routes?: IRoute[]
}

export const routes: IRoute[] = [
    {
        key: 'home',
        path: '/',
        component: <BaseLayout/>,
        routes: [
            {
                index: true,
                key: 'home',
                path: 'home',
                component: <HomePage/>,
            },
            {
                key: 'movies',
                path: 'movies',
                component: <MoviesPage/>,
            },
            {
                key: 'movie',
                path: 'movies/:id',
                component: <MoviePage/>
            },
            {
                key: 'tv-shows',
                path: 'tv-shows',
                component: <TvShowsPage/>,
            },
            {
                key: 'genres',
                path: 'genres',
                component: <GenresPage/>,
            },
            {
                key: 'watch-later',
                path: 'watch-later',
                component: <WatchLaterPage/>,
            },
        ],
    },
]
