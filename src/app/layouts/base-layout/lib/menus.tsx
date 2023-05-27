import {INavMenuItem} from './types'
import {FilmIcon, HistoryIcon, HomeIcon, MaskIcon, MovieIcon} from '@shared/components/icons';


const navMenuItems: INavMenuItem[] = [
    {
        title: 'Home',
        path: '/home',
        icon: <HomeIcon/>,
    },
    {
        title: 'Tv Shows',
        path: '/tv-shows',
        icon: <FilmIcon/>,
    },
    {
        title: 'Movies',
        path: '/movies',
        icon: <MovieIcon/>,
    },
    {
        title: 'Genres',
        path: '/genres',
        icon: <MaskIcon/>,
    },
    {
        title: 'Watch later',
        path: '/watch-later',
        icon: <HistoryIcon/>,
    }
]


export default navMenuItems