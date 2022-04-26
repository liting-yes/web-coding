const Koa = require('koa');
const path = require('path');
const fs = require('fs');
const static = require('koa-static');
const Router = require('koa-router');
const KoaBody = require('koa-body');

const app = new Koa();
const router = new Router();

app.use(KoaBody({
    multipart: true,
    formLimit: {
        maxFilesSize: 200*1024*1024
    }
}))

app.use(static(path.join(__dirname, './static')));

app.use(router.routes());

router.post('upload', async (ctx) => {
    const file = ctx.request.files.file;
    const data = fs.readFileSync(file.path);
    fs.writeFileSync(path.join(__dirname, file.name), data);
    ctx.body = { msg: '上传成功！' };
})

app.listen(4000, () => console.log('start'))