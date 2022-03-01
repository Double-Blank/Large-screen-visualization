/* eslint-disable */
const qiniu = require('qiniu')
const ACCESS_KEY = 'JQ4UeoKqljOt5Q70WBDSNfla8nLZL-lgd2K8TBhN';
const SECRET_KEY = 'ibu14yew4g6CTNAFTis-Gqwy5dvEPPdg4xOnvIJN';
const mac = new qiniu.auth.digest.Mac(ACCESS_KEY, SECRET_KEY);

