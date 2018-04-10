window.onload=function(){
    resize(720,"x");
    // 设计稿的尺寸自己传值（1080）
}
function resize(originSize,type){
    // originSize = 750;
    // type = x
    type = type || "x";
    if(type=="x"){
        var width = document.documentElement.clientWidth;//设备的宽度
        var scale = width/originSize*100+"px";
        document.getElementsByTagName("html")[0].style.fontSize=scale;
    }else if(type=="y"){
        var height = document.documentElement.clientHeight;
        var scale = height/originSize+"px";
        document.getElementsByTagName("html")[0].style.fontSize=scale;
    }
}
resize(720,"x");

window.onresize = function(){
   resize(720,"x"); 
}

