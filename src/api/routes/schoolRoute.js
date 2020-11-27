module.exports = (server) => {
    const schoolController = require('../controllers/schoolController');
    const jwtMiddleware = require('../middleware/jwtMiddleware');


    server.route('/schools/register').post(schoolController.create_an_school);
    server.route('/schools/login').post(schoolController.login_an_school);
    server.route('/schools/all').get(jwtMiddleware.verify_token, schoolController.school_all);
}

   
