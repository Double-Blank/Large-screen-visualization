/* eslint-disable */
const Router = require('koa-router');
const path = require('path');
// const getQiniuToken = require('../utils/qiniu')
const qiniu = require('qiniu')
const { qiniuConfig } = require('../config/secure')

const router = new Router();

router.prefix('/api')

router.post('/uploadfile', async (ctx, next) => {
  const file = ctx.request.files.file; // 获取上传文件
  const newFileName = file.path.split('/').pop(); // 取新的文件名
  console.log(newFileName)
  return ctx.body = {
    success: true,
    url: `http://qn.aixshi.top/wallhaven.jpg`
    // url: `http://localhost:3000/upload/test/${newFileName}`,
  };
});

router.get('/qiniu/token', async (ctx, next) => {
  const token = getQiniuToken()
  ctx.body = {
    token
  }
});
// 获取七牛上传Token
function getQiniuToken() {
  const mac = new qiniu.auth.digest.Mac(qiniuConfig.AK, qiniuConfig.SK)
  const options = {
    scope: qiniuConfig.bucket,
    expires: 7200
  }
  const putPolicy = new qiniu.rs.PutPolicy(options)
  const uploadToken = putPolicy.uploadToken(mac)
  return uploadToken;
}

module.exports = router;
