
# 语法
* 缩进使用4空格
* 属性使用双引号
* 属性名全小写，用中划线做分隔符
---

# 基本页面模板
```html
<!DOCTYPE html>
<!-- 明确lang属性有助于语音和翻译工具识别 -->
<html lang="zh-cn">
    <head>
        <!-- 声明一个明确的字符编码，让浏览器轻松、快速的确定适合网页内容的渲染方式 -->
        <meta charset="UTF-8">
        <!-- 指定页面应该用什么版本的IE来渲染 -->
        <meta http-equiv="X-UA-Compatible" content="IE=Edge">
        <!-- 引入CSS和JS时不需要指明 type -->
        <link rel="stylesheet" href="code_guide.css">
        <script src="code_guide.js"></script>
    </head>
    <body>

    </body>
</html>
```
---

# 属性顺序

* class
* id
* name
* data-*
* src,for,type,href,value,max-length,max,min,pattern
* placeholder,title,alt
* aria-*,role
* required,readonly,disabled

---
