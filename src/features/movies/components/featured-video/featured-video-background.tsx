import React, {FC, useEffect} from 'react';
import classnames from 'classnames';

interface FeaturedVideoProps {
    image: string;
    video: string;
    delay: number,
    children: React.ReactNode
}

const DEFAULT_DELAY = 3000;

const FeaturedVideoBackground: FC<FeaturedVideoProps> = ({image, video, delay = DEFAULT_DELAY, children}) => {
    const [isVideoMode, setIsVideoMode] = React.useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVideoMode(true)
        }, delay)

        return () => {
            clearTimeout(timer);
            setIsVideoMode(false)
        }
    }, [image, delay])


    return (
        <div className='relative bg-gradient-to-r from-[#040404] to-transparent'>
            {children}

            <video
                className={classnames('absolute top-0 left-0 w-full h-full object-cover  transition-all duration-1000 z-[-1]', {
                    'opacity-100': isVideoMode,
                    'opacity-0': !isVideoMode
                })}
                src={video} autoPlay
                muted
                loop/>
            <img
                className={classnames('absolute top-0 left-0 w-full h-full transition-all duration-200 object-cover z-[-1]', {
                    'opacity-100': !isVideoMode,
                    'opacity-0': isVideoMode
                })} src={image} alt=""/>

        </div>
    );
};

export default FeaturedVideoBackground;