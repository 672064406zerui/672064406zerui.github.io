# 我是about

JavaScript 是一个动态的弱类型语言，在开发中比较容易出错。因为没有编译程序，为了寻找 JavaScript 代码错误通常需要在执行过程中不断调试。像 ESLint 这样的可以让程序员在编码的过程中发现问题而不是在执行的过程中。

## 22

```javascript
  # 代码块注释
  /* eslint-disable */
  // code...
  /* eslint-enable */

  # 行代码注释
  // code... // eslint-disable-line
```

> #### ⚠️ 建议开启ESLint

> 刚刚接触es-lint可能会引起极度不适，但在这个过程中可以慢慢规范你的代码。当程序报错时，如果是ESLint错误，复制报错的信息，在此表或.eslintrc.js中查找，了解你的代码问题，并按照规则修改它。

## 33

| Rules | Description ( ❌ no use ) |
| :- | :- |
| accessor-pairs | 设置了 setter ，必须相应设置 getter ，反之不必须 |
| array-bracket-newline | ❌ 数组方括号前后的换行符使用规则 |
| array-bracket-spacing | ❌ 数组方括号前后的空格使用规则 |
| array-callback-return | 数组的 map、filter、sort 等方法，回调函数必须有返回值 |