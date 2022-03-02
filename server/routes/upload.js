/* eslint-disable */
const qiniu = require('qiniu')
const ACCESS_KEY = 'JQ4UeoKqljOt5Q70WBDSNfla8nLZL-lgd2K8TBhN';
const SECRET_KEY = 'ibu14yew4g6CTNAFTis-Gqwy5dvEPPdg4xOnvIJN';
const mac = new qiniu.auth.digest.Mac(ACCESS_KEY, SECRET_KEY);

const Router = require('koa-router')

const router = new Router({
  prefix: '/api'
})

// 上传图片
router.post('/uploadimg', async (ctx) => {
  // console.log('mac', mac)
  const options = {
    scope: 'imgxioashi',
    expires: 7200
  };
  const putPolicy = new qiniu.rs.PutPolicy(options);
  ctx.response.status = 200;
  const token = putPolicy.uploadToken(mac);
  const key = +new Date() + Math.random().toString(16).slice(2);
  ctx.body = { status: 1, data: { token, key } }
})

module.exports = router

