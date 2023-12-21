function disp_prompt()
  {
        notie.input({
                text: '请输入您要查询的学号',
                cancelCallback: function (name) {
		        document.getElementById("log_msg").innerHTML=("你按下了\"取消\"按钮!");
                },
                submitCallback: function (name) {
                        var httpRequest = new XMLHttpRequest();//第一步：建立所需的对象
                        httpRequest.open('GET', '../account/healthy/search?id='+name, true);//第二步：打开连接  将请求参数写在url中  ps:"http://localhost:8080/rest/xxx"
                        httpRequest.send();//第三步：发送请求  将请求参数写在URL中
                        /**
                         * 获取数据后的处理程序
                        */
                        httpRequest.onreadystatechange = function () {
                                var json = httpRequest.responseText;//获取到json字符串，还需解析
                                document.getElementById("log_msg").innerHTML=("学号" + name + "的查询结果：" + json);
                        }
                },
                type: 'text',
                placeholder: '例：0122108******',
                spellcheck: 'flase'
        })
  }
  
function admin_output(){
	notie.input({
                text: '请输入导出数据口令',
                cancelCallback: function (name) {
		        document.getElementById("log_msg").innerHTML=("你按下了\"取消\"按钮!");
                },
                submitCallback: function (name) {
                        var httpRequest = new XMLHttpRequest();
                        httpRequest.open('GET', '../account/healthy/output?name='+name, true);
                        httpRequest.send();
                        httpRequest.onreadystatechange = function () {
                                var json = httpRequest.responseText;//获取到json字符串，还需解析
                                if (json == "数据导出完成，请下载"){
                                	document.getElementById("log_msg").innerHTML=(json + "，<a href='../healthy/output.csv'>下载地址</a>");
                                }else{
                                	document.getElementById("log_msg").innerHTML=(json);
                                }
                        }
                },
                type: 'text',
                spellcheck: 'flase'
        })
}

function split_name(){
        document.getElementById("log_msgs").style.display='block'
	var aa = inputarea.value.split("\n").join(";")
	var httpRequest = new XMLHttpRequest();//第一步：建立所需的对象
        httpRequest.open('GET', '../account/healthy/split?name=' + aa + '&avoid=' + localStorage.avoid_name, true);
        httpRequest.send();//第三步：发送请求  将请求参数写在URL中
        /**
         * 获取数据后的处理程序
         */
        httpRequest.onreadystatechange = function () {
                var json = httpRequest.responseText;//获取到json字符串，还需解析
                document.getElementById('res_msg').innerHTML=json
                var arr = json.split('<br>')
        
        document.getElementById("canvas").height = 30 + arr.length*35;
        var wid = 30;
        var ctx = document.getElementById('canvas').getContext('2d');
        ctx.font = '30px serif';
        for(var item of arr) {
                ctx.fillText(item,15, wid);
                wid = wid + 35; 
                }
                
        const imageData = ctx.getImageData(0, 0, document.getElementById('canvas').width, document.getElementById('canvas').height);
        for (let i = 0; i < imageData.data.length; i += 4) {
        if (imageData.data[i + 3] === 0) {
                imageData.data[i] = 255;
                imageData.data[i + 1] = 255;
                imageData.data[i + 2] = 255;
                imageData.data[i + 3] = 255;
        }
        }
        ctx.putImageData(imageData, 0, 0);
        dataURL = document.getElementById('canvas').toDataURL('image/png');

        document.getElementById("result").src=dataURL;
        document.getElementById("textinput").style.display='none'
        document.getElementById("log_msgs").style.display='none'
        document.getElementById("show_input").style.display='block'
        document.getElementById("none_input").style.display='none'
        document.getElementById("only_one").style.display='none'
        document.getElementById("need").style.display='block'
        }
}

function show_input(){
        document.getElementById("show_input").style.display='none'
        document.getElementById("textinput").style.display='block'
        document.getElementById("none_input").style.display='block'
}

function none_input(){
        document.getElementById("textinput").style.display='none'
        document.getElementById("show_input").style.display='block'
        document.getElementById("none_input").style.display='none'
}

function get_avoid(){
	if (localStorage.avoid_name!=null && localStorage.avoid_name!="")
        {
    	document.getElementById("avoid_msg").innerHTML=("检测到当前有保存在本地的忽略数据")
	}else{
		document.getElementById("avoid_msg").innerHTML=("当前暂未设置忽略数据")
	}
}

function show_avoid(){
        var aa = localStorage.avoid_name.split(";").join("\n")
	document.getElementById('inputarea').value = aa;
}

function submit_avoid(){
        var ishttps = 'https:' == document.location.protocol ? true: false;
        if(ishttps){
	        var aa = inputarea.value.split("\n").join(";")
	        localStorage.avoid_name=(aa);
	        notie.alert({ type: 1, text: '保存成功！', time: 2 })
        }else{
                alert('您当前正在使用http协议访问网站。由于http与https协议下网站数据不互通，建议使用https访问网站~本次暂不保存数据');
        }
}

function i_need_word(){
        document.getElementById("result").style.display='none'
        document.getElementById("res_msg").style.display='block'
        document.getElementById("i_need_pic").style=''
        document.getElementById("i_need_word").style.display='none'
}

function i_need_pic(){
        document.getElementById("result").style.display='block'
        document.getElementById("res_msg").style.display='none'
        document.getElementById("i_need_word").style=''
        document.getElementById("i_need_pic").style.display='none'
}

function split_ui(){
        document.getElementById("loading").style='margin-left: 5%;display: block';
        document.getElementById("ls-group").innerHTML = ""
        var aa = floatingTextarea.value.split("\n").join(";")
        var httpRequest = new XMLHttpRequest();//第一步：建立所需的对象
        httpRequest.open('GET', '../account/healthy/split?name=' + aa + '&avoid=' + localStorage.avoid_name, true);
        httpRequest.send();//第三步：发送请求  将请求参数写在URL中
        /**
         * 获取数据后的处理程序
         */
        httpRequest.onreadystatechange = function () {
                var res = ""
                var json = httpRequest.responseText;
                var arr = json.split('<br>')

                document.getElementById("canvas").height = 30 + arr.length*35;
        var wid = 30;
        var ctx = document.getElementById('canvas').getContext('2d');
        ctx.font = '30px serif';
        for(var item of arr) {
                ctx.fillText(item,15, wid);
                wid = wid + 35; 
                if (item != ""){
                        str = '<li class="list-group-item">' + item + '</li>'
                        res = res + str
                }
                }
                
        const imageData = ctx.getImageData(0, 0, document.getElementById('canvas').width, document.getElementById('canvas').height);
        for (let i = 0; i < imageData.data.length; i += 4) {
        if (imageData.data[i + 3] === 0) {
                imageData.data[i] = 255;
                imageData.data[i + 1] = 255;
                imageData.data[i + 2] = 255;
                imageData.data[i + 3] = 255;
        }
        }
        ctx.putImageData(imageData, 0, 0);
        dataURL = document.getElementById('canvas').toDataURL('image/png');

        document.getElementById("loading").style.display='none';
        document.getElementById("textarea-div").style.display='none';
        document.getElementById("show_input").style.display='block';
        document.getElementById("none_input").style.display='none';
        document.getElementById("result").src=dataURL;
        document.getElementById("result").style='margin-left: 5%;display: block';
        document.getElementById("ls-div").style.display='none';
        document.getElementById("ls-group").innerHTML = res;
        document.getElementById("i_need_word").style='margin-left: 5%;margin-top: 15px;margin-bottom: 10px;'
        document.getElementById("i_need_pic").style.display='none'
}
}

function i_need_word_ui(){
        document.getElementById("result").style='margin-left: 5%;display: none';
        document.getElementById("ls-div").style.display='block'
        document.getElementById("i_need_pic").style='margin-left: 5%;margin-top: 15px;margin-bottom: 10px;'
        document.getElementById("i_need_word").style.display='none'
}

function i_need_pic_ui(){
        document.getElementById("result").style='margin-left: 5%;display: block';
        document.getElementById("ls-div").style.display='none'
        document.getElementById("i_need_word").style='margin-left: 5%;margin-top: 15px;margin-bottom: 10px;'
        document.getElementById("i_need_pic").style.display='none'
}

function get_avoid_ui(){
        if (localStorage.avoid_name!=null && localStorage.avoid_name!="")
        {
    	        document.getElementById("avoid_msg").innerHTML=('检测到当前有保存在本地的忽略数据，<a  class="alert-link" href="avoid.html">去设置忽略数据</a>')
	}else{
		document.getElementById("avoid_msg").innerHTML=('当前暂未设置忽略数据，<a  class="alert-link" href="avoid.html">去设置忽略数据</a>')
	}
}

function show_input_ui(){
        document.getElementById("show_input").style.display='none'
        document.getElementById("textarea-div").style='margin-left: 10%;margin-right: 10%;margin-top: 20px;margin-bottom: 20px;'
        document.getElementById("none_input").style.display='block'
}

function none_input_ui(){
        document.getElementById("textarea-div").style.display='none'
        document.getElementById("show_input").style.display='block'
        document.getElementById("none_input").style.display='none'
}

function disp_prompt_ui()
  {
        notie.input({
                text: '请输入您要查询的学号',
                submitCallback: function (name) {
                        document.getElementById("loading").style='margin-left: 5%;display: block';
                        var httpRequest = new XMLHttpRequest();//第一步：建立所需的对象
                        httpRequest.open('GET', '../account/healthy/search?id='+name, true);//第二步：打开连接  将请求参数写在url中  ps:"http://localhost:8080/rest/xxx"
                        httpRequest.send();//第三步：发送请求  将请求参数写在URL中
                        /**
                         * 获取数据后的处理程序
                        */
                        httpRequest.onreadystatechange = function () {
                                var json = httpRequest.responseText;//获取到json字符串，还需解析
                                if (json == "未找到结果"){
                                        document.getElementById("card-title").innerHTML=("未找到结果");
                                        document.getElementById("card-text").innerHTML=("对不起，数据库中暂无该学号的信息！");
                                }else{
                                        var arr = json.split('！');
                                        document.getElementById("card-title").innerHTML=(arr[0] + "！");
                                        document.getElementById("card-text").innerHTML=(arr[1]);
                                }
                                document.getElementById("card-header").innerHTML=(name + "的查询结果");
                                document.getElementById("card-footer").innerHTML=("查询时间：" + dateFormat("YYYY-mm-dd HH:MM", new Date()))
                                document.getElementById("result").style.display="block"
                                document.getElementById("loading").style.display='none';
                        }
                        
                },
                type: 'text',
                placeholder: '例：0122108******',
                spellcheck: 'flase'
        })
  }

function dateFormat(fmt, date) {
        let ret;
        const opt = {
            "Y+": date.getFullYear().toString(),        // 年
            "m+": (date.getMonth() + 1).toString(),     // 月
            "d+": date.getDate().toString(),            // 日
            "H+": date.getHours().toString(),           // 时
            "M+": date.getMinutes().toString(),         // 分
            "S+": date.getSeconds().toString()          // 秒
        };
        for (let k in opt) {
            ret = new RegExp("(" + k + ")").exec(fmt);
            if (ret) {
                fmt = fmt.replace(ret[1], (ret[1].length == 1) ? (opt[k]) : (opt[k].padStart(ret[1].length, "0")))
            };
        };
        return fmt;
    }

function admin_output_ui(){
	notie.input({
                text: '请输入导出数据口令',
                submitCallback: function (name) {
                        document.getElementById("loading").style='margin-left: 5%;display: block';
                        var httpRequest = new XMLHttpRequest();
                        httpRequest.open('GET', '../account/healthy/output?name='+name, true);
                        httpRequest.send();
                        httpRequest.onreadystatechange = function () {
                                var json = httpRequest.responseText;//获取到json字符串，还需解析
                                if (json == "数据导出完成，请下载"){
                                	document.getElementById("log_msg").innerHTML=(json + "，<a class='alert-link' href='../healthy/output.csv'>下载地址</a>");
                                }else{
                                	document.getElementById("log_msg").innerHTML=(json);
                                }
                                document.getElementById("log_msg").style.display="block"
                                document.getElementById("loading").style.display='none';
                        }
                },
                type: 'text',
                spellcheck: 'flase'
        })
}

function jumptonew(){
        window.top.location='http://47.115.214.72/healthy/';
}