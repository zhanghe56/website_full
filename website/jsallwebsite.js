function jumptonew() {
window.location.href="https://www.lanzoui.com/ihepBurvhza"}
function closeFunction() {
   document.getElementById('actually').style.display='none';
}
function realFunction() {
   document.getElementById('actually').style.display='block';
}

function getcl(){
 var arr = []//����һ���յ�����
 i =0;//Ϊwhileѭ������i�ĳ�ʼֵ
 C = '0123456789ABCDEF';
 //������ɫ������ַ���
 while(i++ < 6){//ѭ��6��
 x=Math.random()*16;
 //ȡ0-16֮��������������x
 b=parseInt(x);//ȡ0-16֮ǰ������������b
 c=C.substr(b,1);
 //�ɵ�b��0-16֮���������λ��ʼȡһ���ַ�
 arr.push(c);
 //ͨ��6��ѭ���õ������λ��ȡ�õ��ַ������һ���ֵ����arr�������
 }
 var cl = "#"+ arr.join('');
 //ȥ��֮ǰ����֮��Ķ��ţ�ǰ���ټ�һ�����ţ�
 //������ɫ�������ɫ����������ˣ����Ұ���ɫ���븳ֵ������cl
 return cl;//��cl��ֵ���ظ�����getcl()
 }
 //���濪ʼ��div�ı�����ɫ��ֵ
 function setColor(){

 //�½�һ��������ɫ�ĺ���setColor
 document.body.style.background = getcl();
 //������õ��������ɫ���븳ֵ��DIV�ı�����ɫ
 
 } 
 
 function vision(){
 document.getElementById("msg").innerHTML=("���°汾��" + sessionStorage.newvisionname + "." + sessionStorage.newvision);
 }