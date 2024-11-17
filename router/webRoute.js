import express from 'express';
import homeController from '../controllers/HomeController.js';
import aboutController from '../controllers/AboutController.js';
import contactController from '../controllers/ContactController.js';
const router = express.Router();

const RouterWeb = (app) => {

    router.get('/about', aboutController);

    router.get('/contact', contactController);

    router.get('/', homeController);

    return app.use("/", router);
}
export default RouterWeb;