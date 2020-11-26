module.exports = (server) => {
    const userController = require('../controllers/userController');

    server.route('/schools/register').post(userController.create_school);
}