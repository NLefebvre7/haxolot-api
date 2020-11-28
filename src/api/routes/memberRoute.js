module.exports = (server) => {
    const memberController = require('../controllers/memberController');
    const jwtMiddleware = require('../middleware/jwtMiddleware');


    server.route('/members/register').post(memberController.create_a_member);
    //server.route('/members/all').get(jwtMiddleware.verify_token, memberController.member_all);

    
}

   
