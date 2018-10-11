# web-js-tools
Includes a variety of web JS tools.

### h.placeholder.min.js

The plugin supports placeholder compatibility for input and textarea tags, supports color customization, and automatically reads font-size, text-align, padding/margin, etc. according to the tag style. The plugin is written by native JS and does not require any other plugin support, and is simple to use, just a single JS call.

该插件支持对input、textarea两种标签进行placeholder兼容，支持颜色自定义，并根据标签样式自动读取字体大小、水平对齐方式、内外边距等。插件由原生JS编写，无需任何其他插件支持，并且使用简单，只需一行JS调用即可。

使用方法一：

```
$placeholder.init();
```

使用方法二：

```
$placeholder.init(true,true);
```

使用方法三：

```
$placeholder.init({all:true,color:true});
```

Parameter Description:
First parameter (all): default false

True - displays compatible tags regardless of browser support
False - displays compatible tags only if the browser does not support it
The second parameter (color): default false

True - changes the placeholder color according to the css property of the set input or textarea
False - forces the placeholder color to #ccc when the display is compatible
In addition, the placeholder display is not hidden when the focus is acquired, and is hidden only when there is text input.

参数描述：
第一个参数(all)：默认false

 - true-无论浏览器是否支持，都显示兼容标签
 - false-仅在浏览器不支持时显示兼容标签

第二个参数(color)：默认false

- true-根据设置的input或者textarea的css属性color改变placeholder颜色
- false-在显示兼容时，强制placeholder颜色为#ccc

*另外，在获取到焦点时，placeholder显示不会隐藏，仅在存在文字输入时，才会隐藏。*
