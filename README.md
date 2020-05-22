# js-copy-clipboard v1.0.2 [![Build Status](https://travis-ci.org/chalk/chalk.svg?branch=master)](https://travis-ci.org/chalk/chalk)

The js-copy-clipboard library as Front-end code copy clipboard, Add custom content to the copied clipboard

Using npm:

```shell
$ npm i -g npm
$ npm i --save js-copy-clipboard
```

#Example

```js
import copyClipboard from 'js-copy-clipboard';

copyClipboard([
  '作者：nanfeiyan',
  '链接：https://juejin.im/user/5b2db436f265da59961bd003/posts',
  '来源：juejin',
  '著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。',
]);
```

When you use `Ctrl+C` to copy your site, the pasted content will be followed by the content you need to attach, as shown below

```shell
Copied content...
作者：nanfeiyan
链接：https://juejin.im/user/5b2db436f265da59961bd003/posts
来源：juejin
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处.
```

# Installation

Can be used as npm package and then leveraged using commonjs bundler/loader:

```js
npm i --save copy-to-clipboard
```

Can be utilized using xxxx.com. Add following script to your page:

```js
<script src='https://xxxx.com/lib/index.min.js' async></script>
```

You will have window.copyClipboard exposed for you to use.

> See the [package source](https://github.com/nanfeiyan123/js-copy-clipboard) for more details.

**有问题请联系 `3328921305@qq.com`**
