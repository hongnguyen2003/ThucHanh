import express from 'express';
import { delUser, updateUser, addUser } from '../controllers/api/User';
const router = express.Router();

const RouterAPI = (app) => {


    router.delete('/delUser', delUser);
    router.put('/updateUser', updateUser);
    router.post('/addUser', addUser);

    return app.use("/api", router);
}
export default RouterAPI;