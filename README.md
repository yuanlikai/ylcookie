封装cookie

```ruby
var kie =function kie() {
    var u = undefined;
    this.cookie = function (name, value, day) {
        if (value != u) {
            if (day != u) {
                var exp = new Date();
                exp.setTime(exp.getTime() + day * 24 * 60 * 60 * 1000);
                document.cookie = name + '=' + value + ';expires=' + exp.toGMTString();
            } else {
                document.cookie = name + '=' + value;
            }

        } else {
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
export default yl;
```

npm 下载
```ruby
npm install ylcookie --save
```


设置名称为user，值为yuanlikai，储存时间7天
```ruby
yl.cookie('user','yuanlikai',7) 
```

获取cookie
```ruby
yl.cookie('user') 
```

删除cookie
```ruby
yl.removeCookie('user') 
```
    
    
    
