封装cookie
------

直接使用或者 `npm install ylcookie --save` 下载

```javascript
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

设置 `name` 为 `user` ， `value` 为 `yuanlikai` ，储存时间 `7` 天

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

假设在 `erp.neimaiba.cn/demo/` 文件下创建 `cookie` ，那么在 `/demo/` 这个路径下的所有页面默认就能取到 `cookie` 信息。
可在默认情况下 如： `erp.neimaiba.cn` 或者 `上级目录` 访问不了这个 `cookie` 。
如果想让这个 `cookie` 能被其他目录或者父级的目录访问类，通过设置 `ylcookie path` 的路径就可以实现。代码如下：

```ruby
yl.cookie('user','yuanlikai',{
    path:'/'
}) 
```

ylcookie域概念
------
如需同域之间访问 `cookie` ，如： `erp.neimaiba.cn` 下的 `cookie` 能被 `kd.neimaiba.cn` 访问到 `cookie` ，这个时候我们就可以将 `path` 设置为 `path:'/'` ， `domain` 设置为 `neimaiba.cn` 来实现，代码如下：

```ruby
yl.cookie('user','yuanlikai',{
    path:'/',
    domain:'neimaiba.cn'
}) 
```
