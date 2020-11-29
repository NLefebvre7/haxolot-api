module.exports = (server) => {
    const userController = require('../controllers/userController');
    const jwtMiddleware = require('../middleware/jwtMiddleware');


    server.route('/users/register').post(userController.create_an_user);
    server.route('/users/all').get(/* jwtMiddleware.verify_token, */ userController.user_all);
    server.route('/users/:user_id') // req.params.post_id
    //.get(userController.get_a_post)
    .put(userController.user_update)
    .delete(userController.user_delete);
    

    server.route('/users/login').post(userController.login_an_user);
    
}

   
