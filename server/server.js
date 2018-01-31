import Koa from 'koa';
import views from 'koa-views';
import path from 'path';
var router = require('koa-router')();

const api = require('../routes/api');
router.use('/api', api.routes(), api.allowedMethods());


const app = new Koa();

app.use(require('koa-static')(path.join(__dirname, '../build')));

app.use(views(path.join(__dirname, '../views'), {
  extension: 'html'
}));

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