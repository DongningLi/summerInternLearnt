// 双引号括起来的自负需要对双引号转义，单引号则不用
var name = "Nicholas says, \"Hi.\"";
var name = 'Nicholas says, "Hi"';




//不要用null和未初始的变量比较 不要用null检测是否传入参数
//不要的例子！！！不好的！！！
var person;
if(person !== null){
	....;
}

function doSomething(arg1, arg2, arg3){
	if(arg3 != null){
		......;
	}
}
//好的例子
var person = null;
function getPerson(){
	if(condition){
		return new Person("Nicholas");
	}else {
		return null;
	}
}

var person = getPerson();
if(person !== null){
	....;
}




//{}赋值
var book = new object();
book.title = "maintainable js";
book.author = "ldnnn"
//equivalent to 
var book = {
	title: "maintainable js",
	author: "ldnnn"
}




//变量声明的时候所有var合并成一个语句，每个变量初始化独占一行
var value =10,
 result = value + 10,
 i,
 len;
 
 
 
 
 (function(){
	 ....;
 })()   //表示立即执行的函数
 
 
 
 
//equal to
//string转为数字 boolean转为数字
//使用 === 和 !== 可以避免类型转换带来的虚假值想等
 5 == "5"; //true
 25 == "0x10"; //true
 1 == true;  //true
 2 == true; //false
 0 == false; //true
 
 
 
 
 //监听按钮
 function doSomething(){
 	//code
 }
 var btn = document.getElementById("action-btn");
 addListener(btn, "click", doSomething);
 /*jQuery 写法
  $("#action-btn").on("click", doSomething);
 */
 
 
 
 
 //全局变量 局部变量
 function doSomething(){
	 var count = 10;
	 name ="Nichol"； // 第一个var后 ;即下一个全局变量（因为且没有var）,为局部变量
 }
 
 
 
 
 //检测当前变量是什么类型， 可用来判断传入的值是否正确
 //检测原始值
 typeof name === "string";
 typeof count ==="number";
 typeof found === "boolean" && found; //即found也找到了
 typeof myapp === "undefined";
 element === null;
 element !== null;
//检测引用值
 value instanceof Date;
 value instanceof RegExp;
 value instanceof Error;
 //检测object
 var object = {
 	count : 0,
	 related:null
 };
 if( "related" in object )
 
 
 
 
 //判断何种服务器
	 if(navigator.userAgent.indexOf("MSIE") > -1){
	 	//is Internet Explorer
	 }else{
	 	//is NOT IE
	 }
	 
	 //特性检测不同浏览器
	 funciton setAnimation(callback){
		 if(window.requestAnimationFrame){ //标准
			 return requestAnimationFrame(callback);
			 
		 }else if (window.mozRequestAnimationFrame){  //Firefox
			 return mozRequestAnimationFrame(callback);
			 	
		 }else if (window.webkitRequestAnimationFrame){  //Webkit
			 return webkitRequestAnimationFrame(callback);
		 	
		 }else if (window.oRequestAnimationFrame){  //opera
			 return oRequestAnimationFrame(callback);
		 	
		 }else if (window.msRequestAnimationFrame){  //IE
			 return msRequestAnimationFrame(callback);
		 	
		 }else {
			 return setTimeout (callback, 0);
		 }
	 }
	 
	 
	 
	 