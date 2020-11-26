module.exports = (server) => {
    const userController = require('../controllers/userController');

    server.route('/users/register').post(userController.create_an_user);
    server.route('/users/login').post(userController.login_an_user);
    server.route('/users/update').post(userController.update_an_user);
    server.route('/users/delete').post(userController.delete_an_user);


}