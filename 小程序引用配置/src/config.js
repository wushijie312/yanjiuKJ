
//初始化配置文件

//主配置
const mainConf = require('../config/main.js');

//品牌号配置
const channel = require('../config/channel.js');
let channelID = channel.channelID;
console.log(channelID);
//渠道相关配置
const moduleName =  `../config/main.${( channelID || '').toLowerCase() }.js`;
console.log(moduleName);

var channelConf = null;
try{
    channelConf = require(moduleName);
}catch(e){
  console.error(`不存在的扩展配置:(${moduleName})!`);
}

//三个配置信息合并导出
module.exports = Object.assign(
  mainConf,
  channel,
  channelConf
);