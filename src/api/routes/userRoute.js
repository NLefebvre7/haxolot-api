module.exports = (server) => {
    const userController = require('../controllers/userController');
    const jwtMiddleware = require('../middleware/jwtMiddleware');


    server.route('/users/register').post(userController.create_an_user);
    server.route('/users/all').get(jwtMiddleware.verify_token, userController.user_all);
    server.route('/users/update').put(userController.user_update);
    server.route('/users/delete').delete(jwtMiddleware.verify_token, userController.user_delete);
    

    server.route('/users/login').post(userController.login_an_user);
    
}

   
