import { verifyToken } from '../utils/jwt.js';
import dotenv from 'dotenv';
dotenv.config();

const isAuth = (req, res, next) => {
    const bypassRoutes = ['/login', '/register', '/forgot-password', '/reset-password', '/src', '/api/logout', '/api/login', '/api/register', '/api/forgot-password', '/api/reset-password'];
    const token = req.cookies ? req.cookies.auth : null;
    const user = req.session?.user

    const decoded = verifyToken(token, process.env.JWT_SECRET);

    if (bypassRoutes.some(route => req.url.startsWith(route))) {
        if (user && decoded && req.url.startsWith('/login')) {
            return res.redirect('/');
        }
        return next();
    }
    if (!decoded && !bypassRoutes.some(route => req.url.startsWith(route))) {
        return res.redirect('/login');
    }
    if (!user && !bypassRoutes.some(route => req.url.startsWith(route))) {
        return res.redirect('/login');
    }
    if (!user && bypassRoutes.some(route => req.url.startsWith(route))) {
        return next();
    }


    if (decoded.username === user.username) {
        next();
    }



};

export default isAuth;