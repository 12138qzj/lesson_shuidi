//fileSystem  为node的内置模块

const fs =require('fs');//引入fs
const AipImageClassifyClient = require("baidu-aip-sdk").imageClassify;
console.log('hello node');
const image =fs.readFileSync("car1.jpg").toString("base64");
//console.log(image);
const client= new AipImageClassifyClient ('17711756','Ha2DZlmbGIZ6Q1vYs7f3bwAG','dsd72dSTgRfQEBlG4b61VtPHrq3HwsFo');//(APP_ID,API_KEY,SECERT_KEY)

client
  .carDetect(image)//识别车的方法
  .then(function(result){
      console.log(result);
  });
// AipImageClassifyClient

//回调函数
/**
 * 文件在磁盘中
 * js 文件在命令行中 （内存中）运行 I/O操作 输入输出流
 */


// fs.readFile('./car.jpg',function (err,data) {//字节（buffer）流  文件读取 
//     if(err){//如果有错误
//         return console.error(err);
//     }
//      console.log(data.toString);
    
// });

// fs.writeFile('./text.txt',function (err,data) {//字节（buffer）流  文件读取 
//    // console.log(data.toString);
   
// });


