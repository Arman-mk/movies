import React, {FC} from 'react';
import FeaturedVideoBackground from '@features/movies/components/featured-video/featured-video-background';
import Button from '../../../../shared/components/core/button/button';
import {PlayIcon} from '@shared/components/icons';

interface FeaturedVideoProps {
    category: string;
    logo: string;
    duration: string;
    description: string;
    cover: string;
    videoUrl: string;
    releaseYear: string;
    mpaRating: string;
    isFullScreen?: boolean
}

const FeaturedVideo: FC<FeaturedVideoProps> = ({
                                                   category,
                                                   logo,
                                                   duration,
                                                   description,
                                                   cover,
                                                   videoUrl,
                                                   releaseYear,
                                                   mpaRating,
                                                   isFullScreen
                                               }) => {

    console.log(category);
    return (
        <FeaturedVideoBackground image={cover} video={videoUrl} delay={2000}>
            <div
                className={`w-[50%]  flex items-center pb-20 pt-10 pl-3 ${isFullScreen ? 'min-h-[100vh]' : 'min-h-[60vh]'} `}>
                <div>
                    <h3 className='text-white uppercase'>{category}</h3>
                    <img className='max-w-[100%] w-[400px]' src={logo} alt=""/>
                    <div className='flex w-[200px] justify-between text-white'>
                        <h3>{releaseYear}</h3>
                        <h3>{mpaRating}</h3>
                        <h3>{duration}</h3>
                    </div>
                    <p className='text-white text-xl'>{description}</p>
                    <div className="flex gap-4">
                        <Button variant='secondary' rounded icon={<PlayIcon width={10}/>}>Play</Button>
                        <Button rounded>More Info</Button>
                    </div>
                </div>
            </div>

        </FeaturedVideoBackground>
    );
};

export default FeaturedVideo;