
## 功能

基于zip-local,主要用于压缩文件，可以删除原文件夹

## 安装

- 全局安装
`
npm install deerpack -g
`
- 局部安装
`
npm install deerpack -D
`
## 使用

- 全局安装，在目录下直接执行 deerpack
- 全局/局部安装,在package.json的script中运行 deerpack
- 局部安装，编程式使用
    ```js
    const deerPack = require('deerpack');
    deerPack();//不指定目录,默认dist
    deerPack('src')//指定目录src
    deerPack(null,"name",true)//不指定目录，修改打包后的文件名，要求删除原文件
    ```

## 命令行使用

- 若无参数，默认压缩当前文件夹下的dist文件
    ```
    deerpack
    ```
- 目录名称 
    ```
    deerpack project
    ```
- 压缩后的文件名 (-n 文件名) 或 (--name 文件名)
    ```
    deerpack -n newname
    ```
- 压缩后删除源文件夹 (-r)
    ```
    deerpack -r
    ```

## 例子
如果当前目录下有目录abc，你需要压缩abc,命名为cba.zip,并删除abc文件夹, 可以
```
deerpack abc -n cba -r
```
  




 