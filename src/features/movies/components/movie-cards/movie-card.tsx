import React, {FC, memo} from 'react';
import {Card} from '@core/card';
import {TypeId} from '@lib/types';

interface MovieCardProps {
    thumbnail: string,
    title: string,
    onClick: (id: TypeId) => void,
    id: TypeId
}

const MovieCard: FC<MovieCardProps> = ({thumbnail, id, title, onClick}) => {

    const clickHandler = () => {
        onClick(id)
    }

    return (
        <Card className='cursor-pointer' title={title} onClick={clickHandler}>
            <img src={thumbnail} className="w-full" alt={title}/>
        </Card>
    );
};

export default memo(MovieCard);