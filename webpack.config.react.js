var path = require('path');
module.exports = {
    //指定打包的入口文件
    entry:'./react/index.js',
    //指定输出文件路径和文件名
    output:{
        path:'./build',//文件路径
        filename:'bundle.js'//文件名
    },
    devServer:{//启动的就是一个express服务器
      inline:true,//当源代码发生改变的时候实时刷新浏览器
      contentBase:'./build', //app.use(express.static('./build'));
      port:8080 //默认端口号8080
    },
    module:{
        loaders:[
            {
                test:/\.js$/,//设置针对何种类型的文件名如何加载
                loader:'babel',//加载器，会找.babelrc来读取配置
                include:path.resolve('./react'),//指定要包含的目录
                exclude:/node_modules/ //指定要排除的目录
            }
        ]
    }
}