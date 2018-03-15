var router = require('koa-router')();
var todo_controller = require('../../app/controllers/todo_controller');

router.post('/getTodos', todo_controller.getTodos);
router.post('/addTodo', todo_controller.addTodo);

module.exports = router;