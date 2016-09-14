var path = require('path');
//生成产出html文件的插入
var HtmlWebpackPlugin = require('html-webpack-plugin');
var OpenBrowserWebpackPlugin = require('open-browser-webpack-plugin');

module.exports = {
    //指定打包的入口文件
    entry:'./react/index.js',
    //指定输出文件路径和文件名
    output:{
        path:'./build',//文件路径
        filename:'bundle.js'//文件名
    },
    devServer:{//启动的就是一个express服务器
      hot:true,//支持模块的热替换
      inline:true,//当源代码发生改变的时候实时刷新浏览器
      contentBase:'./build', //app.use(express.static('./build'));
      port:8080 //默认端口号8080
    },
    module:{
        loaders:[
            {
                test:/\.js$/,//设置针对何种类型的文件名如何加载
                loaders:['react-hot','babel'],//加载器，会找.babelrc来读取配置
                include:path.resolve('./react'),//指定要包含的目录
                exclude:/node_modules/ //指定要排除的目录
            }
        ]
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin(),
        // 以index.html文件作为模板，自动插入生成的打包后的文件
        //并保存到目标目录中
        new HtmlWebpackPlugin({
            template:'./react/index.html'
        }),
        new OpenBrowserWebpackPlugin({
            url:'http://localhost:8080'
        })
    ]
}