# famp 
![avatar](http://famdata.oss-cn-shenzhen.aliyuncs.com/preview/logo.svg)
* 前端页面采用vue和vue-cli构建
* vuex状态管理
* jwt api管理
* 前端框架vue-ant-design
* thinkphp 5.1 LTS版本
* axios异步请求  

## 项目展望 
* 后期会同步升级ThinkPHP 6.0版本
* 继续保持vuejs开发，考虑替换掉Vue-Ant-Design为IViewUI
* 相继会出 APP和小程序，不会出wap版，继续保持为PC端+APP+小程序
* 增加多用户（多企业）、以及权限控制系统、文件管理系统（阿里云OSS or 七牛）

## 项目初始化
```
# composer install // 切换到项目根目录
# cd application/view
# npm install 或是 cnpm install
```
如遇到 core-js报错,原因npm 安装时候默认安装了 core-js 3.0.0版本  
core-js/modules/es6.array.iterator
core-js/modules/es6.object.assign
core-js/modules/es6.promise
core-js/modules/es7.promise.finally
请运行安装 
```
npm install core-js@2
```
### 运行
```
npm run serve
```
## 部分界面预览  
![avatar](http://famdata.oss-cn-shenzhen.aliyuncs.com/preview/home.jpg)
![avatar](http://famdata.oss-cn-shenzhen.aliyuncs.com/preview/projects.jpg)
![avatar](http://famdata.oss-cn-shenzhen.aliyuncs.com/preview/add_quoted.png)
