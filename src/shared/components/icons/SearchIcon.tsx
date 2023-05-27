import React, {FC} from 'react';
import image from '@assets/icons/search.png';
import {ImageIconProps} from '@shared/components/icons/types';


const SearchIcon: FC<ImageIconProps> = ({width = 26}) => {
    return <img src={image} width={width} alt="search icon"/>;
};

export default SearchIcon;