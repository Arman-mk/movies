import React, {Children, cloneElement, FC, useEffect} from 'react';
import 'keen-slider/keen-slider.min.css'
import {KeenSliderOptions, useKeenSlider} from 'keen-slider/react';


interface CarouselProps {
    children: JSX.Element | JSX.Element[]
    settings: KeenSliderOptions
    style?: React.CSSProperties
}

const Carousel: FC<CarouselProps> = ({children, settings}) => {
    const [sliderRef] = useKeenSlider<HTMLDivElement>(settings);

    useEffect(() => {
        const timer = setTimeout(() => {
            window.dispatchEvent(new Event('resize'));
        }, 400)
        return () => clearTimeout(timer)
    }, [])

    return (
        <div ref={sliderRef} className="keen-slider max-w-[100vw]">
            {
                Children.map(children, (child) => {
                    return <div className='keen-slider__slide'>{cloneElement(child)}</div>
                })
            }
        </div>
    )

};

export default Carousel;