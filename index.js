const fs = require("fs");
// 引入插件
const colors = require('colors/safe');
const zipper = require('zip-local');

//删除文件夹
function deleteFolder(path) {
    var files = [];
    if (fs.existsSync(path)) {
        files = fs.readdirSync(path);
        files.forEach(function (file, index) {
            var curPath = path + "/" + file;
            if (fs.statSync(curPath).isDirectory()) { // recurse
                deleteFolder(curPath);
            } else { // delete file
                fs.unlinkSync(curPath);
            }
        });
        fs.rmdirSync(path);
    }
}
module.exports = function (sourcePath,reName,rm) {
    //如果有配置目录，优先使用目录
    const SOURCEPath = sourcePath || "dist";
    if (!fs.existsSync(SOURCEPath)) {
        console.warn(SOURCEPath + " 文件夹不存在");
        return;
    }
    const compressedFile = zipper.sync.zip(SOURCEPath).compress();
    
    const ReName = reName || SOURCEPath;
    compressedFile.save(`${ReName}.zip`);
    console.log(`${colors.green('压缩完成 文件名是: ')}${colors.red.bold(ReName)}`);

    if (rm) {
        deleteFolder(SOURCEPath);
        console.log(colors.red.bold('已删除原文件夹'));
    }
}