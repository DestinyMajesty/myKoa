const monk = require('monk');
// Connection URL
const url = 'localhost:27017/dmf';
const db = monk(url);

const todoCollection = db.get('todos');

//获取todo
exports.getTodos = async (ctx, next) => {
    let result = await todoCollection.find();   
    console.log(result);
    ctx.body = {
        data:{
            todoList: result,
        },
        errno: 0,
    }
}

//添加todo
exports.addTodo = async (ctx, next) => {
    let request = ctx.request.body;
    await todoCollection.insert({ todo: request.todo})
    ctx.body = {
        data:{
            result: "success",                
        },
        errno: 0,
    }
}