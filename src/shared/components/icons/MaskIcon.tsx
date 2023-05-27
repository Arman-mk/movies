import React, {FC} from 'react';
import image from '@assets/icons/mask.png';
import {ImageIconProps} from '@shared/components/icons/types';


const MaskIcon: FC<ImageIconProps> = ({width = 26}) => {
    return <img src={image} width={width} alt="mask icon"/>;
};

export default MaskIcon;