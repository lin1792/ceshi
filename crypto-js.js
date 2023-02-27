/*
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-10-09 15:42:36
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-10-09 16:14:56
 * @FilePath: \钱包\wallet\public\crypto-js.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import CryptoJS from 'crypto-js'
// var cryptoObj = {

//     /* 加密 */

//     encryptFunc: (message) => {

//         var key = '12345678900';//前后端约定好的秘钥

//         var keyHex = CryptoJS.enc.Utf8.parse(key);

//         var encrypted = CryptoJS.AES.encrypt(message, keyHex, {

//             mode: CryptoJS.mode.ECB,

//             padding: CryptoJS.pad.Pkcs7
//         });

//         return encrypted.toString();



//     },
// }
// export default cryptoObj;
export default { // 加密
    /**
     * @description: 加密
     * @param {*} word
     * @param {*} keyStr
     */
    set(word, keyStr) {
      keyStr = keyStr || 'abcdef0123456789' // 16位的密钥，自己定义，和下面的密钥要相同
      var srcs = CryptoJS.enc.Utf8.parse(word) //  字符串到数组转换，解析明文
      var key = CryptoJS.enc.Utf8.parse(keyStr) //  字符串到数组转换，解析秘钥
      // mode:加密方式；padding:填充方式；iv便宜向量（可选）
      var encrypted = CryptoJS.AES.encrypt(srcs, key, { mode: CryptoJS.mode.ECB, padding: CryptoJS.pad.Pkcs7 })
      return encrypted.toString() // 加密后的结果是对象，要转换为文本
    },
  
    /**
     * @description: 解密
     * @param {*} word
     * @param {*} keyStr
     */
    get(word, keyStr) {
      keyStr = keyStr || 'abcdef0123456789'
      var key = CryptoJS.enc.Utf8.parse(keyStr) //  字符串到数组转换
      var decrypt = CryptoJS.AES.decrypt(word, key, { mode: CryptoJS.mode.ECB, padding: CryptoJS.pad.Pkcs7 })
      return CryptoJS.enc.Utf8.stringify(decrypt).toString() //  数组到字符串转换
    }
  }