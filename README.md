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

ylcookie使用方法
------

设置name为user，value为yuanlikai，储存时间7天

```ruby
yl.cookie('user','yuanlikai',{
    expires:7,
    path:'/',
    domain:'neimaiba.com',
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
    
    
    
