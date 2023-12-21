function jumptonew() {
   window.location.href = "https://wwzx.lanzouw.com/iBMO61c03sdi"
}
function jumptobanner() {
   window.location.replace("activity/ver2.5/banner.html")
}
function checkvision() {
   sessionStorage.newvision = ("99999");
   sessionStorage.updateday = ("2022.05.29");
   sessionStorage.newvisionname = ("已经停用");
   window.XB.actionFromJsWithParam('当前版本号' + sessionStorage.visionname + "." + sessionStorage.visioncode);
   if (sessionStorage.visioncode == sessionStorage.newvision) {
      if (sessionStorage.visionname.indexOf(sessionStorage.newvisionname) != -1) {
         notie.alert({ type: 1, text: "已经是最新版本！本页面更新日期：" + sessionStorage.updateday, time: 2 })
         document.getElementById("log_msg").innerHTML = ("已经是最新版本：" + sessionStorage.newvision + "！本页面更新日期：" + sessionStorage.updateday);
      } else {
         notie.confirm({
            text: '有个小更新~可以选择下载~~~本页面更新日期：' + sessionStorage.updateday,
            cancelCallback: function () {
               document.getElementById("log_msg").innerHTML = ("有个小更新，用户取消了下载动作，最新版本号：" + sessionStorage.newvision + "。本页面更新日期：" + sessionStorage.updateday);
            },
            submitCallback: function () {
               document.getElementById("log_msg").innerHTML = ("有个小更新，主版本已经是最新版本：" + sessionStorage.newvision + "！本页面更新日期：" + sessionStorage.updateday);
               document.getElementById('log_msg_button').style.display = 'block';
            }
         })
      }
   }
   else {
      if (sessionStorage.visioncode == "null") {
         document.getElementById("log_msg").innerHTML = ("出现问题。最新版本：" + sessionStorage.newvision + "。本页面更新日期：" + sessionStorage.updateday);
         document.getElementById('log_msg_button').style.display = 'block';
      }
      else {
         notie.confirm({
            text: '不是最新版本！点击确定去更新！本更新系统已经停用，请尽快升级以使用新版更新系统。本页面更新日期：' + sessionStorage.updateday,
            cancelCallback: function () {
               document.getElementById("log_msg").innerHTML = ("不是最新版本，用户取消了下载动作，最新版本号：" + sessionStorage.newvision + "。本页面即将停用，请尽快升级。本页面更新日期：" + sessionStorage.updateday);
            },
            submitCallback: function () {
               document.getElementById("log_msg").innerHTML = ("已经去下载最新版本：" + sessionStorage.newvision + "。本页面即将停用，请尽快升级。本页面更新日期：" + sessionStorage.updateday);
               document.getElementById('log_msg_button').style.display = 'block';
            }
         })
      }
   }
}
function jumptoheal() {
   window.location.href = "http://47.115.214.72/healthy"
}

function checkonlineres() {

}

function sleep(d) {
   for (var t = Date.now(); Date.now() - t <= d;);
}

function updateFunction() {
   window.XB.openwithbrowser('https://zhanghe56.pages.dev/webservice/jumptonew.html');
}


function closeFunction() {
   document.getElementById('actually').style.display = 'none';
}
function realFunction() {
   document.getElementById('actually').style.display = 'block';
}

function getcl() {
   var arr = []//定义一个空的数组
   i = 0;//为while循环定义i的初始值
   C = '0123456789ABCDEF';
   //定义颜色代码的字符串
   while (i++ < 6) {//循环6次
      x = Math.random() * 16;
      //取0-16之间的随机数给变量x
      b = parseInt(x);//取0-16之前的整数给变量b
      c = C.substr(b, 1);
      //由第b（0-16之间的整数）位开始取一个字符
      arr.push(c);
      //通过6次循环得到的随机位置取得的字符组合在一起把值给到arr这个数组
   }
   var cl = "#" + arr.join('');
   //去掉之前数组之间的逗号，前面再加一个井号，
   //这样颜色随机的颜色代码就生成了，并且把颜色代码赋值给变量cl
   return cl;//把cl的值返回给函数getcl()
}
//下面开始给div的背景颜色赋值
function setColor() {

   //新建一个设置颜色的函数setColor
   document.body.style.background = getcl();
   //把上面得到的随机颜色代码赋值给DIV的背景颜色

}

function vscodesFunction() {
   function Request(strName) {
      var strHref = location.href;
      var intPos = strHref.indexOf("?");
      var strRight = strHref.substr(intPos + 1);
      var arrTmp = strRight.split("&");
      for (var i = 0; i < arrTmp.length; i++) {
         var arrTemp = arrTmp[i].split("=");
         if (arrTemp[0].toUpperCase() == strName.toUpperCase()) return arrTemp[1];
      }
      return "";
   }

   var idvn = Request("idvn");

   var idvc = Request("idvc");

   var nightc = Request("nightc");

   if (idvc == "") {
      sessionStorage.visioncode = ("0");
      localStorage.nightlyIsDark = (nightc);
   }
   else {
      sessionStorage.visioncode = (idvc);
      sessionStorage.visionname = (idvn);
      localStorage.nightlyIsDark = (nightc);
   }
}


function checkxbclient() {
   var str = navigator.userAgent;
   var reg = RegExp(/XBclient/);
   if (str.match(reg)) {
      //包含
   }
   else {
      window.location.href = "noclient.html";
   }
}