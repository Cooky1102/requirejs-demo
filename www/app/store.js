// 模拟业务模块：打印消息
define(["myStorage"], function (ms) {
  "use strict";
  ms.setItem("myKey", "myValue");
  const value = ms.getItem("myKey");
  console.log("myStorage: ", value);
});
