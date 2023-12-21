function client()
{
var str = navigator.userAgent;
var chrome = RegExp(/Chrome/);
var phone = RegExp(/Mobile/);
var XBcl = RegExp(/XBclient/);
var wx = RegExp(/MicroMessenger/);
var qq = RegExp(/QQ/);
if(str.match(chrome)){
    //包含
if(str.match(phone)){

if(str.match(XBcl)){
   document.getElementById("clientlogo").src="clientlogo/xb.jpg";
    document.getElementById("clienttext").innerHTML = "您正在使用安全，快速的XB小报APP浏览本网页";
}
else{
if(str.match(wx)){
   document.getElementById("clientlogo").src="clientlogo/wechat.jpg";
    document.getElementById("clienttext").innerHTML = "您正在使用微信内置浏览器浏览本网页";
}
else{
if(str.match(qq)){
      document.getElementById("clientlogo").src="clientlogo/qq.jpg";
    document.getElementById("clienttext").innerHTML = "您正在使用QQ内置浏览器或QQ浏览器浏览本网页"; 
}
else{

   document.getElementById("clientlogo").src="clientlogo/chrome.jpg";
    document.getElementById("clienttext").innerHTML = "您正在使用手机Chrome浏览本网页";
    /*此处可以续写*/

}
}
}

}
else{
   document.getElementById("clientlogo").src="clientlogo/chrome.jpg";
    document.getElementById("clienttext").innerHTML = "您正在使用电脑Chrome浏览本网页";

}

}
else
{
    document.getElementById("clientlogo").src="clientlogo/error.jpg";
    document.getElementById("clienttext").innerHTML = "很抱歉，看不出你的浏览器~";
}
}