
## document.referrer

> 返回载入当前文档的文档的 URL 可实现返回上一页功能

#### 下面的场景无法获得 referrer 信息  

1. 直接在浏览器中输入地址  
2. 使用location.reload()刷新（location.href或者location.replace()刷新有信息）  
3. 在微信对话框中，点击进入微信自身浏览器
4. 扫码进入微信或QQ的浏览器
5. 直接新窗口打开一个页面
6. 从https的网站直接进入一个http协议的网站（Chrome下亲测）
7. a标签设置rel="noreferrer"（兼容IE7+）
8. meta标签来控制不让浏览器发送referer
9. 点击 flash 内部链接
10. Chrome4.0以下，IE 5.5+以下返回空的字符串
11. 使用 修改 Location 进行页面导航的方法，会导致在IE下丢失 referrer，这可能是IE的一个BUG
跨域
12. <meta content="never" name="referrer">
```js
//用法
if (typeof document.referrer === '') {
    // 没有来源页面信息的时候，改成首页URL地址
    $('.jsBack').attr('href', '/');
}else{
    //do
}
```
## history.pushState(state, title, url);

> state：一个与指定历史记录相关联的状态对象，当popstate事件触发时，会把该对象传入回调函数。如果不需要用到，可以传null。
> title：页面的标题。但当前大多数浏览器都不支持或忽略这个值。可以传null。
> url：添加或修改的history的网址。为了安全性，必须保持与当前URL同一个域。
```js

 history.pushState('aaaa', "");//激活历史记录条目
    window.onpopstate = function (event) {
        //前进和后退都会触发
        //这里可以监听到浏览器的返回事件，并做你想做的事情，
        //例如：跳转到另一个网页
       
    };
```
