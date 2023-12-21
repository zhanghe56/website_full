function uppage(){
 if (localStorage.pages) {
var upcache=localStorage.pages;
if (upcache<2){
notie.alert({ type: 2, text: "已经是第一章了~", time: 1 })
document.getElementById("zhangjie").innerHTML="当前章节：" + localStorage.pages; 
document.getElementById("main").src=localStorage.pages + ".html";
}
else
{
upcache --
localStorage.pages=upcache
            document.getElementById("main").src=localStorage.pages + ".html";
document.getElementById("zhangjie").innerHTML="当前章节：" + localStorage.pages; 
}
}
else{
            localStorage.pages = 1;
document.getElementById("main").src=localStorage.pages + ".html";
            document.getElementById("zhangjie").innerHTML="当前章节：" + localStorage.pages; 
}
}

function nextpage(){
 if (localStorage.pages) {
var nextcache=localStorage.pages;
nextcache ++
localStorage.pages=nextcache        
document.getElementById("zhangjie").innerHTML="当前章节：" + localStorage.pages;    
document.getElementById("main").src=localStorage.pages + ".html";        
        } else {
            localStorage.pages = 1;
            document.getElementById("main").src=localStorage.pages + ".html";
            document.getElementById("zhangjie").innerHTML="当前章节：" + localStorage.pages; 
        }
}