import express from "express";
import homeController from "../controllers/homeController";

let router = express.Router();

let initWebRoutes = (app) => {
    router.get('/', homeController.getHomePage);


    router.get('/dinhthanhhai', (req, res) => {
        return res.send('Hello dinhthanhhai');
    });

    return app.use("/", router);
}

module.exports = initWebRoutes;