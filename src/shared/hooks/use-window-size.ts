import {useEffect, useState} from 'react';

type WindowSize = {
    width: number | undefined;
    height: number | undefined;
};

const useWindowSize = (throttleDelay = 200): WindowSize => {
    const [windowSize, setWindowSize] = useState<WindowSize>({
        width: undefined,
        height: undefined,
    });

    useEffect(() => {
        let resizeTimer: number;

        const handleResize = () => {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(() => {
                setWindowSize({
                    width: window.innerWidth,
                    height: window.innerHeight,
                });
            }, throttleDelay);
        };

        window.addEventListener('resize', handleResize);

        // Initial window size
        handleResize();

        return () => {
            clearTimeout(resizeTimer);
            window.removeEventListener('resize', handleResize);
        };
    }, [throttleDelay]);

    return windowSize;
};

export default useWindowSize;