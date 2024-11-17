import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
const useAuthCheck = () => {
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        fetch('http://localhost:8080/api/pingAuth', {
            method: 'GET',
            mode: 'cors',
            credentials: 'include',
        })
            .then(async (response) => {
                return await response.json();
            })
            .then((data) => {
                if (data.message === 'pong') {
                    if (location.pathname === '/login') {
                        alert('Bạn đã đăng nhập');
                        navigate('/');
                    }
                } else {
                    alert('Bạn chưa đăng nhập');
                    navigate('/login');
                }
            })
            .catch(() => {
                if (location.pathname !== '/login')
                    navigate('/login')
            });
    }, [navigate, location]);
};

export default useAuthCheck;