封装cookie
------

直接使用或者npm install ylcookie --save 下载

```ruby
var kie = function () {
    var u = undefined;
    this.cookie = function (name, value, str) {
        if (value != u) {
            if (str != u) {
                var exp = new Date();
                exp.setTime(exp.getTime() + str.expires * 24 * 60 * 60 * 1000);
                document.cookie = name + '=' + value + ';expires=' + exp.toGMTString()+';path='+str.path+';domain='+str.domain;
            } else {
                document.cookie = name + '=' + value;
            }
        } else {  //获取cookie
            var str = document.cookie.split('; ');
            for (var i = 0; i < str.length; i++) {
                var er = str[i].split('=');
                if (er[0] == name) {
                    return er[1]
                }
            }
        }
    };
};
var yl = new kie();
kie.prototype.removeCookie=function(name){
    yl.cookie(name,'',-1)
};
```

ylcookie基本用法
------

设置name为user，value为yuanlikai，储存时间7天

```ruby
yl.cookie('user','yuanlikai',{
    expires:7
}) 
```

获取cookie

```ruby
yl.cookie('user') 
```

删除cookie

```ruby
yl.removeCookie('user') 
```

ylcookie路径概念
------

在 "http://erp.neimaiba.cn/demo/" 这个页面创建一个cookie，那么在"/demo/"这个路径下的页面如： "http://erp.neimaiba.cn/demo/2018-01-24/index.html" 这个页面默认就能取到cookie信息。
可在默认情况下， "http://www.cnblogs.com"或者 "http://www.cnblogs.com/xxxx/" 就不可以访问这个 cookie（光看没用，实践出真理^_^）。

　　那么如何让这个 cookie 能被其他目录或者父级的目录访问类，通过设置 cookie 的路径就可以实现。例子如下：
    
    
