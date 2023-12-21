function checkder(){
    if(typeof(Storage) !== "undefined") {
        if (localStorage.der) {
         document.getElementById("derresult").innerHTML = localStorage.der;
         var checkpoint=localStorage.der;
         if (checkpoint>99)
         {
         //99以上
         if (checkpoint>999)
         {
         	
         if (checkpoint>2999)
         {
         	if (checkpoint>5999)
         {
//100000以上
document.getElementById("derimg").src = "people5.png";
document.getElementById("derlevel").innerHTML = "der哥";
}
         else{
         	//10000~100000
         document.getElementById("derimg").src = "people4.png";
         document.getElementById("derlevel").innerHTML = "绝世der帝";
}
         	}
         else{
         	//1000~10000
         	document.getElementById("derimg").src = "people3.png";
document.getElementById("derlevel").innerHTML = "渐入der境";
       }  }
         else
         {
         	//100~1000
         	document.getElementById("derimg").src = "people2.png";
         document.getElementById("derlevel").innerHTML = "稍微有点der";
          }        
         }
         else{
//99以下
document.getElementById("derlevel").innerHTML = "一点也不der";
}       
        } else {
            alert("这里有充实的游戏，这里有精湛的美工，这里有一切你想要的！欢迎游玩由XB小报实属灵魂画师团队出品的新游戏——史上最der的游戏！您要做的只有点击那个漂亮的小人。开始游戏吧~PS：特别感谢你寒王提供素材。der等级共5段，0~99，100~1k，1k~3k，3k~6k以及6k以上");
           localStorage.der = "0"
           document.getElementById("derresult").innerHTML = localStorage.der;
           document.getElementById("derlevel").innerHTML = "一点也不der";
 }
    } else {
        alert("抱歉！您的浏览器不支持 Web Storage，无法使用本功能！");
    } 
}

function derderder(){
var nextcache=localStorage.der;
nextcache ++
localStorage.der=nextcache
document.getElementById("derresult").innerHTML = localStorage.der;
}

function introduction(){
alert("这里有充实的游戏，这里有精湛的美工，这里有一切你想要的！欢迎游玩由XB小报实属灵魂画师团队出品的新游戏——史上最der的游戏！您要做的只有点击那个漂亮的小人。开始游戏吧~PS：特别感谢你寒王提供素材。der等级共5段，0~99，100~1k，1k~3k，3k~6k以及6k以上");
}

function clearall(){
alert("还原成功！");
           localStorage.der = "0"
           document.getElementById("derresult").innerHTML = localStorage.der;
           document.getElementById("derlevel").innerHTML = "一点也不der";
}
