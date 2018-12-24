# lzlblog

#### 项目介绍
本项目是集Koa + react + redux + ant-mobile + 按需加载于一体的同构直出框架

#### 软件架构



#### 安装教程
git clone https://gitee.com/charlesliu_it/lzlblog.git

npm install 

npm run dev

#### 使用说明



#### 参与贡献

1. Fork 本项目
2. 新建 Feat_xxx 分支
3. 提交代码
4. 新建 Pull Request


#### 按需加载遇到的问题
[使用webpack-hot-middleware不能刷新的解决方法](https://blog.csdn.net/lizhen_software/article/details/80625478)

1. 热更新有问题，样式能够更新，但是页面变化不能更新成功，家在失败，修改服务端时dist目录也会被清空 亟待解决

2. 由于启动环境设置不成功，导致生产环境打包时，热更新会吧dist 目录晴空

3. 设置静态资源存储后，接口请求也被设置 catch-controll 了， 导致接口请求报404

4. postcss配置autoprefix以后会导致多行溢出不显示省略号，文字有多少显示多少

5. 引入moment webpack打包失败的问题，加入以下代码解决
```
plugins: [
  new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
]
```

6. [引入飞冰， scss打包有问题 已经解决](https://github.com/webpack-contrib/css-loader/issues/352)
