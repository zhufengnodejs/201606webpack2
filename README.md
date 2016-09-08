## 下载并安装
### 1. 克隆仓库到本机
```
git clone https://github.com/zhufengnodejs/webpack-lesson
```
### 2. 进入项目目录
```
cd webpack-lesson
```

### 3. 安装依赖的模块
```
npm install
```
> 安装的时候会扫描package.json文件，寻找里面的devDependices Dependices，安装依赖的模块

## 安装切换安装源让安装更快
```
npm install nrm -g
nrm use taobao
```

## 全局安装和本地安装
### 全局安装
全局安装以后会得一个可以在所有命令行下执行的命令
全局安装以后在哪都能用- 命令行所在目录
```
npm root -g 查看全局安装目录
```
C:\Users\Administrator\AppData\Roaming\npm\node_modules
安装以后会在
C:\Users\Administrator\AppData\Roaming\npm
下增加一个webpack.cmd的可执行文件 

在已经配置在环境变量path中的目录
下面创建一个可执行文件


### 本地安装
本地安装只能在本地用
安装到当前目录下的node_modules下面了
本地之后在项目如何使用？
require('webpack');