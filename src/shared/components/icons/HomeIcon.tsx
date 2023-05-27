import React, {FC} from 'react';
import image from '@assets/icons/home.png';
import {ImageIconProps} from '@shared/components/icons/types';


const HomeIcon: FC<ImageIconProps> = ({width = 26}) => {
    return <img src={image} width={width} alt="home icon"/>;
};

export default HomeIcon;