const USER_CONTROLLER = require('../controllers/user');

module.exports=(APP)=>{
    APP.post('/book/add',USER_CONTROLLER.login);
}