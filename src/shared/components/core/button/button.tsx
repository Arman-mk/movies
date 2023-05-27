import React, {FC} from 'react'
import styles from './button.module.scss'
import classnames from 'classnames';


interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode
    icon?: React.ReactNode,
    className?: string
    rounded?: boolean,
    variant?: 'primary' | 'secondary'
}

const Button: FC<ButtonProps> = ({children, rounded, className, icon, variant = 'primary', ...rest}) => {

    const classNames = classnames(
        styles.button, className, {
            [styles['button--rounded']]: !!rounded,
            [styles['button--secondary']]: variant === 'secondary',
            [styles['button--primary']]: variant === 'primary',
        }
    )

    return <button {...rest} className={classNames}>
        <div className={styles['button--inner']}>
            <span className={styles['button--inner--icon']}>
                {icon ?? icon}
            </span>
            <span className={styles['button--inner--label']}>
                  {children}
            </span>
        </div>
    </button>
}

export default Button
