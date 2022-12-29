define(["jquery", "myPrint", "foo"], function ($, p, foo) {
  "use strict";

  // 运行myPrint模块
  p("myPrint: 123");

  // 运行jquery模块
  $.ajax({
    type: "GET",
    url: "https://jsonplaceholder.typicode.com/todos/1",
    data: "",
    success: function (msg) {
      console.log(msg);
    },
  });

  // 运行 shim 加工过的模块
  foo.sayHi();
  foo.sayHello();
});
