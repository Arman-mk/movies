import React, {FC, memo} from 'react';
import {NavLink, NavLinkProps} from 'react-router-dom';
import styles from './nav-bar.module.scss';
import classnames from 'classnames';


// Polymorphic component
type PolymorphicComponentProps = {
    as: keyof JSX.IntrinsicElements | React.ComponentType<any>;
    icon?: React.ReactNode;
    children?: React.ReactNode;
    title?: string | React.ReactNode;
} & React.ComponentProps<any>;

const NavBarItem: FC<PolymorphicComponentProps> = ({
                                                       as: Component = NavLink,
                                                       icon,
                                                       title,
                                                       children,
                                                       ...rest
                                                   }) => {
    const navLinkProps: Omit<NavLinkProps, 'to'> = {};
    const isNavLink = Component === NavLink;

    if (isNavLink) {
        navLinkProps.className = ({isActive}) => classnames(styles['nav-bar-item'], {
            [styles.active]: isActive
        });
    }

    return (
        <Component className={styles['nav-bar-item']} {...navLinkProps} {...rest} >
            {icon}
            <span className={styles['nav-bar--title']}>
                {title || children}
            </span>
        </Component>
    );
};


export default memo(NavBarItem);