import { delUser, updateUser, addUser, getUser, getListUser } from '../../controllers/api/User.js';
import isAdmin from '../../middleware/isAdmin.js';

const UserAPI = (router) => {

    router.get('/getListUser', isAdmin, getListUser);
    router.get('/getUser', isAdmin, getUser);
    router.post('/addUser', isAdmin, addUser);
    router.put('/updateUser', updateUser);
    router.delete('/delUser', delUser);

    return router;
}
export default UserAPI;