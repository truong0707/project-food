const express = require('express') // use library express 
const UserController = require('../controller/UserController');
const { verifyToken } = require('../Middleware/VerifyToken');


let router = express.Router();

const initUserRoutes = (app) => {
    router.get('/users', verifyToken, UserController.getUsers);
    router.post('/users', UserController.postRegister);
    router.post('/login', UserController.postLogin);



    return app.use('/api/v1/', router)
}

module.exports = initUserRoutes;