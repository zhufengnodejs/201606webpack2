/**
 * 这是webpack官方配置文件 文件名是定死的
 * webpack执行的时候会找这个配置文件
 */
module.exports = {
    //打包的入口文件
    entry:'./src/index.js',
    //输出配置
    output:{
        path:'./build',//配置路径
        filename:'bundle.js'//配置输出的文件名
    },
    //配置模块
    module:{
        //loader实现各种各样的web资源到JS模块的映射
        //配置一系列的加载器，是一个数组
      loaders:[
          {
              test:/\.js$/, //凡是以点结尾的文件都用
              loader:'babel'
          }
      ]
    }
}

