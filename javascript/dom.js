//search for different ID/tagname
var x=document.getElementById("main");
var y=x.getElementsByTagName("p");

document.getElementById("image").src = ""; //改变链接的地址
document.getElementById("image").innerHTML = "new content" //改变标签包裹中的内容

//隐藏显示文本
<body>
<p id="p1">这是一段文本。</p>
<input type="button" value="隐藏文本" onclick="document.getElementById('p1').style.visibility='hidden'" />
<input type="button" value="显示文本" onclick="document.getElementById('p1').style.visibility='visible'" />
</body>


//改变css样式－－－－－－－getElement.style.color
<body>
<h1 id="id1">My Heading 1</h1>
<button type="button" 
onclick="document.getElementById('id1').style.color='red'">
点击这里！</button>
</body>


//点击按钮出现日期
<!DOCTYPE html>
<html>
<head>
</head>
<body>
//<em>表示斜体
<p>点击按钮就可以执行 <em>displayDate()</em> 函数。</p>
<button id="myBtn">点击这里</button>
<script>
//找到该id元素调用函数
document.getElementById("myBtn").onclick=function(){displayDate()};
//对函数进行编写，另一个id内部显示日期
function displayDate()
{
document.getElementById("demo").innerHTML=Date();
}
</script>
<p id="demo"></p>
</body>
</html> 



onload 和 onunload 事件会在用户进入或离开页面时被触发。！！！！！！！！！！！！！！

onchange 事件常结合对输入字段的验证来使用。即输入字段改变的时候，就调用函数
//x.value=x.value.toUpperCase(); －－－－－－－－  变所有字符为大写字符

onmouseover 和 onmouseout 事件可用于在用户的鼠标移至 HTML 元素上方或移出元素时触发函数。

onmousedown, onmouseup 以及 onclick 构成了鼠标点击事件的所有部分。
首先当点击鼠标按钮时，会触发 onmousedown 事件，
当释放鼠标按钮时，会触发 onmouseup 事件，
最后，当完成鼠标点击时，会触发 onclick 事件。
onfocus：输入的字段获得聚焦的时候触发
<!DOCTYPE html>
<html>
<head>
<script>
function myFunction(x)
{
	x.style.background="yellow";  //背景颜色不能变回原来颜色
}
</script>
</head>
<body>

请输入英文字符：<input type="text" onfocus="myFunction(this)">

<p>当输入字段获得焦点时，会触发改变背景颜色的函数。</p>

</body>
</html>



//向get到的元素 追加新的该种元素
<!DOCTYPE html>
<html>
<body>

<div id="div1">
<p id="p1">这是一个段落。</p>
<p id="p2">这是另一个段落。</p>
</div>

<script>
var para=document.createElement("p"); //添加新的p元素
var node=document.createTextNode("这是新段落。");//添加新的文本节点
para.appendChild(node); //向p追加该文本节点
var element=document.getElementById("div1"); 
element.appendChild(para);//向已有元素追加新的p元素
</script>
</body>
</html>


//删除节点必须先找到其父节点，从其父节点删除
var child=document.getElementById("p1");
child.parentNode.removeChild(child);