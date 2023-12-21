function jumptonew() {
window.location.href="https://www.lanzoui.com/ihepBurvhza"}
function closeFunction() {
   document.getElementById('actually').style.display='none';
}
function realFunction() {
   document.getElementById('actually').style.display='block';
}

function getcl(){
 var arr = []//定义一个空的数组
 i =0;//为while循环定义i的初始值
 C = '0123456789ABCDEF';
 //定义颜色代码的字符串
 while(i++ < 6){//循环6次
 x=Math.random()*16;
 //取0-16之间的随机数给变量x
 b=parseInt(x);//取0-16之前的整数给变量b
 c=C.substr(b,1);
 //由第b（0-16之间的整数）位开始取一个字符
 arr.push(c);
 //通过6次循环得到的随机位置取得的字符组合在一起把值给到arr这个数组
 }
 var cl = "#"+ arr.join('');
 //去掉之前数组之间的逗号，前面再加一个井号，
 //这样颜色随机的颜色代码就生成了，并且把颜色代码赋值给变量cl
 return cl;//把cl的值返回给函数getcl()
 }
 //下面开始给div的背景颜色赋值
 function setColor(){

 //新建一个设置颜色的函数setColor
 document.body.style.background = getcl();
 //把上面得到的随机颜色代码赋值给DIV的背景颜色
 
 } 
 
 function vision(){
 document.getElementById("msg").innerHTML=("最新版本：" + sessionStorage.newvisionname + "." + sessionStorage.newvision);
 }