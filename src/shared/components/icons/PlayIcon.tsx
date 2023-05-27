import React, {FC} from 'react';
import image from '@assets/icons/play-icon.svg';
import {ImageIconProps} from '@shared/components/icons/types';


const PlayIcon: FC<ImageIconProps> = ({width = 26}) => {
    return <img src={image} width={width} alt="history icon"/>;
};

export default PlayIcon;