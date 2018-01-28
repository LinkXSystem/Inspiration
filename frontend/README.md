### 服务

> 说明

* 切换至前端构建

```
git checkout frontend
```

* 部署 mobx 组件

```
# 目前并未确定是否要执行
npm run eject

# 核心
npm install mobx
npm install mobx-react --save-dev

# 依赖
npm install babel-preset-react-native-stage-0 --save-dev
npm install babel-preset-stage-2 --save-dev
npm install babel-plugin-transform-runtime --save-dev

# eslint
npm install babel-eslint --save-dev

# 向 .eslintrc 文件写入以下内容
"parser": "babel-eslint"

# 编写 .babelrc
{
  "presets": ["react-native-stage-0/decorator-support"],
  "plugins": [
    [
      "transform-runtime",
      {
        "helpers": false,
        "polyfill": false,
        "regenerator": true,
        "moduleName": "babel-runtime"
      }
    ]
  ]
}
```
