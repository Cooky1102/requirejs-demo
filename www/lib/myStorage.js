// 自定义公共模块: 存储
// 符合 AMD规范
define(function () {
  // 返回对象形式
  return {
    setItem: (keyName, keyValue) => {
      localStorage.setItem(keyName, keyValue);
    },
    getItem: (keyName) => {
      return localStorage.getItem(keyName);
    },
  };
});
