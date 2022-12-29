// 先设置配置
requirejs.config({
  // 默认路径 （默认值是 data-main 指定的主入口文件路径）
  baseUrl: "lib",
  // 映射路径
  paths: {
    app: "../app",
    jquery: [
      // 数组：容错处理，失败了往后继续查找模块
      "jquery.min",
      "https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min",
    ],
  },
  // 配置 非AMD模块 => 模块化
  shim: {
    foo: {
      // 依赖项
      // deps: ["jquery"],

      // exports 映射单个
      // exports: "sayHi",

      //  init() 映射多个
      init(jquery) {
        // console.log(jquery); // 如果有依赖 deps, init的参数会接收
        return {
          sayHi,
          sayHello,
        };
      },
    },
  },
});

// 运行主模块
// console.log(require === requirejs); // true
requirejs(["app/main", "app/store"]);
