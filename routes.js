const { Router } = require("express")
const  userController = require( "./controller/userController")
// import userController from './controller/userController.js'


const router = new Router();

router.post('/register',userController.addUserController)

router.get('/users',userController.getUsersController)

module.exports = router;