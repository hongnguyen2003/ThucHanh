import { loginUser, registerUser, logoutUser, pingPong } from '../../controllers/api/Auth';
import isAdmin from '../../middleware/isAdmin.js';

const AuthAPI = (router) => {

    router.get('/pingAuth', isAdmin, pingPong);
    router.post('/login', loginUser);
    router.post('/register', registerUser);
    router.get('/logout', logoutUser);

    return router;
}
export default AuthAPI;