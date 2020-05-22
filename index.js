// https://www.cnblogs.com/zimengxiyu/p/11158934.html
!(function (window) {
  function copyClipboard(params) {
    let str = '\n';
    for (let val of params) {
      str += val + '\n';
    }
    window.document.addEventListener('copy', function (event) {
      // console.log('复制了');
      // 使用ClipboardApi来设置剪贴板里的内容
      var clipboardData = event.clipboardData || window.clipboardData;
      if (!clipboardData) {
        return;
      }
      var text = window.getSelection().toString();
      if (text) {
        event.preventDefault();
        clipboardData.setData('text/plain', text + str);
      }
    });
  }
  if (
    typeof define === 'function' &&
    typeof define.amd === 'object' &&
    define.amd
  ) {
    // AMD. Register as an anonymous module.
    define(function () {
      return copyClipboard;
    });
  } else if (typeof module !== 'undefined' && module.exports) {
    module.exports = copyClipboard;
    module.exports.copyClipboard = copyClipboard;
  } else {
    window.copyClipboard = copyClipboard;
  }
})(window);

// 作者：哩白
// 链接：https://www.jianshu.com/p/9266bb7d95be
// 来源：简书
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
