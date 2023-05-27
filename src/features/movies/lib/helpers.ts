import {IMovie} from '@features/movies/lib/types';

export const dataSorter = (data?: IMovie[], sortBy?: keyof IMovie, sortDirection?: 'asc' | 'desc' | undefined) => {
    if (!data) return [];
    if (!sortBy || !sortDirection) return data;

    data = [...data];

    return data.sort((a, b) => {
        if (a[sortBy] > b[sortBy]) {
            return sortDirection === 'asc' ? 1 : -1;
        }
        if (a[sortBy] < b[sortBy]) {
            return sortDirection === 'asc' ? -1 : 1;
        }
        return 0;
    });
}

export const movieAdapter = (data: IMovie) => {
    if (!data) return null;
    return {
        id: data.Id,
        title: data.Title,
        coverImage: `${window.location.origin}/assets/${data.CoverImage}`,
        titleImage: `${window.location.origin}/assets/${data.TitleImage}`,
        date: data.Date,
        releaseYear: data.ReleaseYear,
        mpaRating: data.MpaRating,
        category: data.Category,
        duration: getDuration(data.Duration),
        description: data.Description,
        videoUrl: data.VideoUrl
    }
}

export const movieBasicAdapter = (data: IMovie) => {
    return {
        id: data.Id,
        title: data.Title,
        coverImage: `${window.location.origin}/assets/${data.CoverImage}`,
    }
}

export const getDuration = (seconds: string) => {
    const hours = Math.floor(Number(seconds) / 3600);
    const minutes = Math.floor((Number(seconds) % 3600) / 60);

    const formattedHours = hours > 0 ? `${hours}h ` : '';
    const formattedMinutes = minutes > 0 ? `${minutes}m` : '';

    return formattedHours + formattedMinutes;
}