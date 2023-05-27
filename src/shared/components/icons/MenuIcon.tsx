import React, {FC} from 'react';
import image from '@assets/icons/hamburger.png';
import {ImageIconProps} from '@shared/components/icons/types';


const MenuIcon: FC<ImageIconProps> = ({width = 26, ...rest}) => {
    return <img src={image} width={width} alt="hamburger icon" {...rest}/>;
};

export default MenuIcon;