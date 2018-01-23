==封装cookie

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
    }


    
npm 下载

    npm install ylcookie --save

设置名称为user，值为yuanlikai，储存时间7天

    yl.cookie('user','yuanlikai',7) 

获取cookie

    yl.cookie('user') 

删除cookie

    yl.removeCookie('user') 
