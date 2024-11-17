import { forwardRef } from 'react';
import style from './LogoWeb.module.css';
import classNames from 'classnames/bind';
const cx = classNames.bind(style);

const LogoWeb = forwardRef(({ className, big, customText, ...props }, ref) => {
    const classes = cx('container', big && 'big', {
        [className]: className,
    });
    return (
        <a href='/' className={classes}>
            <h1>R</h1>
            <div>
                <h3>eact</h3>
                {customText ? <h6>{customText}</h6> : <h6>version 2</h6>}
            </div>
        </a>

    )
})


export default LogoWeb;