module.exports = (server) => {
    const teamController = require('../controllers/teamController');
    const jwtMiddleware = require('../middleware/jwtMiddleware');


    server.route('/teams/register').post(teamController.create_a_team);
    server.route('/teams/all').get(jwtMiddleware.verify_token, teamController.team_all);
    server.route('/teams/details').get(jwtMiddleware.verify_token, teamController.team_details);
    /*server.route('/users/update').put(userController.user_update);
    server.route('/users/delete').delete(jwtMiddleware.verify_token, userController.user_delete);
     

    server.route('/users/login').post(userController.login_an_user);
     */
}

   
