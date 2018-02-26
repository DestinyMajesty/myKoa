const monk = require('monk');
// Connection URL
const url = 'localhost:27017/dmf';
const db = monk(url);

const collection = db.get('dmf')

//获取用户
exports.getUser = async (ctx, next) => {
    let result = await collection.find();
    console.log(result);
    
    let myresult = result.map((item) => {return item.name});
    console.log(myresult);
    ctx.body = {
        data:{
            username: myresult,
            age: 30,
        },
        errno: 0,
    }
}

//用户注册
exports.registerUser = async (ctx, next) => {
    let request = ctx.request.body;
    if (typeof request.name === 'string'){
        await collection.insert({ name: request.name })
        ctx.body = {
            data:{
                result: "success",                
            },
            errno: 0,
        }
    } else {
        ctx.body = {
            data:{
                result: "false",                
            },
            errno: 1,
            errmsg: '注册失败',            
        }
    }

}