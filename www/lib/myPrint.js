// 自定义公共模块: 打印
// 符合 AMD规范
define(function () {
  // 返回函数形式
  return function print(msg) {
    console.log(msg);
  };
});
