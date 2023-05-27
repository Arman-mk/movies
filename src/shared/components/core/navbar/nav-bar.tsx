import React, {FC, memo, useEffect} from 'react';
import classnames from 'classnames';
import {useToggle} from '@shared/hooks/use-toggle';

import styles from './nav-bar.module.scss';
import MenuIcon from '@shared/components/icons/MenuIcon';
import {useAppSelector} from '@store/hooks/use-app-selector';
import {selectApp} from '@store/app/app.slice';
import useWindowSize from '@shared/hooks/use-window-size';

interface NavBarProps {
    width?: number;
    trigger?: 'hover' | 'click';
    children: React.ReactNode;
    footer?: React.ReactNode;
    header?: React.ReactNode;
    isFixed?: boolean;
}

const NavBar: FC<NavBarProps> = ({children, trigger = 'hover', footer, header, isFixed = true}) => {
    const [isExpanded, toggleNavbar] = useToggle(false);
    const isClickable = trigger === 'click';
    const {width} = useWindowSize();
    const {navbarIsCollapsed} = useAppSelector(selectApp)
    const isMobile = Number(width) < 768;
    const classNames = classnames(styles['nav-bar'], {
        [styles['nav-bar--expanded']]: isExpanded,
        [styles['nav-bar--controlled']]: isClickable || isMobile,
        [styles['nav-bar--fixed']]: isFixed
    });

    useEffect(() => {
        if (isMobile) {
            toggleNavbar();
        }
    }, [navbarIsCollapsed])

    const hoverHandler = () => {
        if (isClickable) return;
        toggleNavbar();
    }

    return (
        <div className={classNames} onMouseEnter={hoverHandler}
             onMouseLeave={hoverHandler}>
            {
                isClickable &&
                <MenuIcon className='ml-7 cursor-pointer' onClick={toggleNavbar}/>
            }
            {header && <div className={styles['nav-bar--header']}>{header}</div>}
            <div className='flex-1 mt-8'>
                {children}
            </div>
            {footer && <div className={styles['nav-bar--footer']}>{footer}</div>}
        </div>
    );
};

export default memo(NavBar);