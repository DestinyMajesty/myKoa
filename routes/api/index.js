var router = require('koa-router')();
var user_router = require('./user_router');
var todo_router = require('./todo_router');
router.use('/users', user_router.routes(), user_router.allowedMethods());
router.use('/todos', todo_router.routes(), todo_router.allowedMethods());


module.exports = router;
