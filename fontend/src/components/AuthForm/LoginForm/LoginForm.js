import style from './LoginForm.module.css';
import classNames from 'classnames/bind';
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import Button from 'components/mini.components/Button';
import InputBar from 'components/mini.components/InputBar';
import LogoWeb from 'components/mini.components/LogoWeb';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import useAuthCheck from 'hooks/CheckLogin';
const cx = classNames.bind(style);

export default function LoginForm({ data, className, ...props }) {
    const navigate = useNavigate();
    const [authData, setAuthData] = useState({
        username: '',
        password: '',
        admin: true
    });
    const handleOnlickRegister = () => {
        navigate('/register');
    }
    useAuthCheck();
    const handleLogin = async () => {
        try {
            const fetchData = await fetch('http://localhost:8080/api/login', {
                mode: 'cors',
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
                body: JSON.stringify(authData)
            });
            if (fetchData.ok) {
                const decoded = await fetchData.json();
                localStorage.setItem('access_token', decoded.access_token);
                localStorage.setItem('refresh_token', decoded.refresh_token);
                navigate('/');
            }
            else
                alert('Đăng nhập thất bại');
        } catch (error) {
            console.error('Error fetching data:', error);
        }

    };


    const handleChange = (e) => {
        const { name, value } = e.target;
        setAuthData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    return (
        <div className={cx("container")}>
            <form onSubmit={(e) => e.preventDefault()}>
                <LogoWeb />
                <InputBar
                    placeholder='Tên đăng nhập'
                    name='username'
                    value={authData.username}
                    onChange={handleChange}
                />
                <InputBar
                    type='password'
                    placeholder='Mật khẩu'
                    name='password'
                    value={authData.password}
                    onChange={handleChange}
                />
                <Button right icon={faRightToBracket} onClick={handleLogin}>Đăng nhập</Button>
                <Button left variab='text' className={cx('regbtn')} onClick={handleOnlickRegister}>Đã có tài khoản?</Button>
            </form>
        </div>
    );
};

