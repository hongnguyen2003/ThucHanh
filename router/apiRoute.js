import express from 'express';
import UserAPI from './api/api.user';
import AuthAPI from './api/api.auth';
const router = express.Router();

const RouterAPI = (app) => {


    UserAPI(router);
    AuthAPI(router);
 

    return app.use("/api", router);
}
export default RouterAPI;