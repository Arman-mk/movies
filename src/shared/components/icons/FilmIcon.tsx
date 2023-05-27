import React, {FC} from 'react';
import image from '@assets/icons/film.png';
import {ImageIconProps} from '@shared/components/icons/types';


const FilmIcon: FC<ImageIconProps> = ({width = 26}) => {
    return <img src={image} width={width} alt="film icon"/>;
};

export default FilmIcon;