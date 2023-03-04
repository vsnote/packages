import * as CryptoJS from 'crypto-js';
// const { base64encode } = require('nodejs-base64');

// 解密
export function decrypt(encrypted: string | CryptoJS.lib.CipherParams, secret: string | CryptoJS.lib.WordArray) {
  return CryptoJS.AES.decrypt(encrypted, secret).toString(CryptoJS.enc.Utf8);
}

// 加密方法
export function encrypt(msg: string | CryptoJS.lib.WordArray, secret: string | CryptoJS.lib.WordArray) {
  return CryptoJS.AES.encrypt(msg, secret).toString();
}

// MD5
export function md5(msg: string | CryptoJS.lib.WordArray) {
  return CryptoJS.MD5(msg).toString();
}

// base64 加密
export function base64encode(msg: string) {
  return CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(msg));
}

// base64 解密
export function base64decode(msg: string) {
  return CryptoJS.enc.Base64.parse(msg).toString(CryptoJS.enc.Utf8);
}
