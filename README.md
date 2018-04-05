# react-douban(使用 react 技术栈仿豆瓣电影)

## 该项目使用的技术栈：

* react
* react-router(路由)
* redux react-redux redux-sagas redux-form(redux)
* styled-components scss (css)
* react-loadable(按需加载)

## 运行项目

```bash
git clone https://github.com/ITrokie/react-douban.git

cd react-douban

//安装依赖
npm i

//由于豆瓣api有跨域问题，所以需先启动node转发服务(此步切记不可省略，不然api会报错)
cd node-proxy
node index.js

//新建一个终端
cd react-douban
npm start
```

####运行效果如下

![图片](./image/1.png)