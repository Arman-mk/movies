import React, {FC} from 'react';
import image from '@assets/icons/history.png';
import {ImageIconProps} from '@shared/components/icons/types';


const HistoryIcon: FC<ImageIconProps> = ({width = 26}) => {
    return <img src={image} width={width} alt="history icon"/>;
};

export default HistoryIcon;