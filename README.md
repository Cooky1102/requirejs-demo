## 说明

- 文档入口 index.html

  - 加载 requirejs，指定主入口。

- 脚本主入口 app.js

  - 加载配置项
    - 路径配置，模块化加工
  - 运行主模块

- app/ 底下放业务模块
  - 测试各种类型的模块执行
- lib/ 底下放公共模块
  - 有第三方 AMD 模块，有自己写的 AMD 模块，有自己写的不符合 AMD 模块

## 参考

- 阮一峰: https://www.ruanyifeng.com/blog/2012/11/require_js.html
- 官网：https://www.requirejs-cn.cn/docs/api.html
- 博客: https://blog.csdn.net/weixin_33958585/article/details/92065998、

- 模板
- 单页应用：https://github.com/volojs/create-template
- 多页应用： https://github.com/requirejs/example-multipage
- shim 配置的多页应用：https://github.com/requirejs/example-multipage-shim

## 使用

live server 启动 index.html
