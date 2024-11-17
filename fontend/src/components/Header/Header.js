import style from './Header.module.css';
import classNames from 'classnames/bind';
import LogoWeb from 'components/mini.components/LogoWeb';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SellectBar from 'components/mini.components/SellectBar';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import useAuthCheck from 'hooks/CheckLogin';
import { useState } from 'react';
const cx = classNames.bind(style);


export default function Header() {
    const options = [{ value: '/profile', label: 'Tài khoản' }, { value: 'beLink', link: 'http://localhost:8080/api/logout', label: 'Đăng xuất' }];
    useAuthCheck();
    const [value, setValue] = useState(null);
    return (
        <header className={cx('container')}>
            <LogoWeb />
            <div className={cx('rightContainer')}>
                <SellectBar value={value} setValue={setValue} options={options} varf='dropdown' planeHoleder={<FontAwesomeIcon icon={faUser} />} />
            </div>
        </header>
    )
}

