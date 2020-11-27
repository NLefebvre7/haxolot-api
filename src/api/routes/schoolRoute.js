module.exports = (server) => {
    const schoolController = require('../controllers/schoolController');
    const jwtMiddleware = require('../middleware/jwtMiddleware');


    server.route('/schools/create').post(schoolController.school_create);
    server.route('/schools/all').get(/* jwtMiddleware.verify_token, */ schoolController.school_all);
    server.route('/schools/update').put(schoolController.school_update); 
    server.route('/schools/delete').delete(/* jwtMiddleware.verify_token, */ schoolController.school_delete);


    
}

   
