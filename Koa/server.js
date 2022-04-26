const Koa = require('koa');
const path = require('path');
const fs = require('fs');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();

const MIMES_MAP = {
    'html': 'text/html'
}

const staticPath = './static';

function parseMine (url) {
    let extName = path.extname(url);
    extName = extName ? extName.slice(1) : 'unknown';
    return MIMES_MAP[extName];
}

router.get('/cookie', async (ctx) => {
    const cookie = ctx.cookies.get('id');
    ctx.body = `cookie为${cookie}`;
})

app.use(router.routes());

app.use(async (ctx) => {
    let fullStaticPath = path.join(__dirname, staticPath);
    const conetnt = fs.readFileSync(path.join(fullStaticPath, ctx.url), 'binary');
    let mine = parseMine(ctx.url);
    if (mine) {
        ctx.type = mine;
    }
    ctx.cookies.set(
        'id',
        '123456',
        {
            domain: '127.0.0.1',
            expires: new Date('2022-04-25'),
            httpOnly: false,
            overwrite: false,
        }
    )
    ctx.body = conetnt;
})

app.listen(4000, () => console.log('Server is running, port is 4000.'));
