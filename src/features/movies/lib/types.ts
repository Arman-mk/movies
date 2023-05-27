export interface IMovie {
    Id: string;
    Title: string;
    CoverImage: string;
    TitleImage: string;
    Date: string;
    ReleaseYear: string;
    MpaRating: string;
    Category: string;
    Duration: string;
    Description: string;
    VideoUrl: string
}

export interface IMovieBasic {
    id: string;
    title: string;
    coverImage: string;
}

export interface IObject {
    [key: string]: any
}