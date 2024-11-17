import { loginUser, registerUser, logoutUser } from '../../controllers/api/Auth';

const AuthAPI = (router) => {


    router.post('/login', loginUser);
    router.post('/register', registerUser);
    router.get('/logout', logoutUser);

    return router;
}
export default AuthAPI;