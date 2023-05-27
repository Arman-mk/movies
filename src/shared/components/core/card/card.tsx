import React, {FC} from 'react'
import styles from './card.module.scss';
import classnames from 'classnames';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode,
    className?: string
}

const Card: FC<CardProps> = ({children, ...rest}) => {
    const className = classnames(styles.card, rest.className);
    return <div className={className} {...rest}>{children}</div>
}

export default Card
