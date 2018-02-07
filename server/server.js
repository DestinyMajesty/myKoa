import Koa from 'koa';
import views from 'koa-views';
import path from 'path';

// 根目录
var rootPath = path.dirname(__dirname);

// post请求的请求体解析中间件
var bodyParser = require('koa-bodyparser');

// 路由
var router = require('koa-router')();
const api = require('../routes/api');
router.use('/api', api.routes(), api.allowedMethods());

// 清理编译目录
var fs = require('fs-promise');
fs.removeSync(rootPath + '/build/');

// 另起进程webpack
var child_process = require('child_process');
var c = child_process.exec('npm run webpack -- --watch --color');
c.stdout.pipe(process.stdout);
c.stderr.pipe(process.stderr);


// koa服务实例
const app = new Koa();

app.use(require('koa-static')(path.join(__dirname, '../build')));

app.use(views(path.join(__dirname, '../views'), {
  extension: 'html'
}));

app.use(bodyParser());

app.use(async (ctx, next) => {
  const start = new Date();
  await next();
  const ms = new Date() - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
});



app.use(router.routes()).use(router.allowedMethods());
// response
app.use(async(ctx) => {
  await ctx.render('index.html');
});
app.listen(8090);