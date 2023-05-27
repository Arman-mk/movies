import React, {FC} from 'react';
import image from '@assets/icons/movie.png';
import {ImageIconProps} from '@shared/components/icons/types';


const MovieIcon: FC<ImageIconProps> = ({width = 26}) => {
    return <img src={image} width={width} alt="movie icon"/>;
};

export default MovieIcon;