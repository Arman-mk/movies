import React, {FC} from 'react';
import styles from './layout.module.scss';

interface LayoutProps {
    children: React.ReactNode;
    navbar?: React.ReactNode;
    header?: React.ReactNode;
    footer?: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({navbar, children, footer, header}) => {
    return (
        <div className={styles.layout}>
            {header ?? header}
            <div className={styles.wrapper}>
                {navbar ?? navbar}
                <div className={styles.container}>
                    {children}
                </div>
            </div>
            {footer ?? footer}
        </div>
    );
};

export default Layout;