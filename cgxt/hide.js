function nicknameFunction(){
function Request(strName){
var strHref = location.href;
var intPos = strHref.indexOf("?");
var strRight = strHref.substr(intPos + 1);
var arrTmp = strRight.split("&");
for(var i = 0; i < arrTmp.length; i++) {
var arrTemp = arrTmp[i].split("=");
if(arrTemp[0].toUpperCase() == strName.toUpperCase()) return arrTemp[1];
}
return "";
}
var idvn=Request("nickname");
var idvc=Request("major");

 document.getElementById("name1").innerHTML = decodeURIComponent(idvn);
 document.getElementById("name2").innerHTML = decodeURIComponent(idvn);
 document.getElementById("major1").innerHTML = " 所属专业：" + decodeURIComponent(idvc);

}