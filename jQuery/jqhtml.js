<!DOCTYPE html>
<html>
<head>
<script src="/jquery/jquery-1.11.1.min.js"></script>
<script>
$(document).ready(function(){
  $("#btn1").click(function(){
    alert("Text: " + $("#test").text());
  });
  $("#btn2").click(function(){
    alert("HTML: " + $("#test").html());
  });
});
</script>
</head>
/* 效果
text() - 设置或返回所选元素的文本内容
html() - 设置或返回所选元素的内容（包括 HTML 标记）
第二个按钮效果：HTML: 这是段落中的<b>粗体</b>文本。
*/
<body>
<p id="test">这是段落中的<b>粗体</b>文本。</p>
<button id="btn1">显示文本</button>
<button id="btn2">显示 HTML</button>
</body>
</html>


//val() - 设置或返回表单字段的值
<body>
<p>姓名：<input type="text" id="test" value="米老鼠"></p>
<button>显示值</button>
</body>




//对段落进行更改设置，text和html调用不同，效果可加html形
<!DOCTYPE html>
<html>
<head>
<script src="/jquery/jquery-1.11.1.min.js"></script>
<script>
$(document).ready(function(){
  $("#btn1").click(function(){
    $("#test1").text("Hello world!");
  });
  $("#btn2").click(function(){
    $("#test2").html("<b>Hello world!</b>");
  });
  $("#btn3").click(function(){
	  $("#test3").val("Dolly Duck"); //表单的value值，input那种你懂的
  });
});
</script>
</head>

<body>
<p id="test1">这是段落。</p>
<p id="test2">这是另一个段落。</p>
<p>Input field: <input type="text" id="test3" value="Mickey Mouse"></p>
<button id="btn1">设置文本</button>
<button id="btn2">设置 HTML</button>
<button id="btn3">设置值</button>
</body>
</html>



<!DOCTYPE html>
<html>
<head>
<script src="/jquery/jquery-1.11.1.min.js"></script>
<script>
function afterText()
{
var txt1="<b>I </b>";                    // 以 HTML 创建元素
var txt2=$("<i></i>").text("love ");     // 通过 jQuery 创建元素
var txt3=document.createElement("big");  // 通过 DOM 创建元素
txt3.innerHTML="jQuery!";         //向元素里面添加文本内容 格式为大号字体
$("img").after(txt1,txt2,txt3);          // 在 img 之后插入新元素
}
</script>
</head>
<body>
<img src="/i/eg_w3school.gif" alt="W3School Logo" />
<br><br>
<button onclick="afterText()">在图片后面添加文本</button>
</body>
</html>

/* DOM使用
<!DOCTYPE html>
<html>
<body>
<div id="div1">
<p id="p1">This is a paragraph.</p>
<p id="p2">This is another paragraph.</p>
</div>

<script>
var para=document.createElement("p");
var node=document.createTextNode("This is new."); //p只是加重节点 不能添加文本
para.appendChild(node);
var element=document.getElementById("div1");
element.appendChild(para);
</script>
</body>
</html>

这段代码创建了一个新的 <p> 元素：
var para=document.createElement("p");
如需向 <p> 元素添加文本，您首先必须创建文本节点。这段代码创建文本节点：
var node=document.createTextNode("This is a new paragraph.");
然后您必须向 <p> 元素追加文本节点：
para.appendChild(node);
最后，您必须向已有元素追加这个新元素。
这段代码查找到一个已有的元素：
var element=document.getElementById("div1");
这段代码向这个已存在的元素追加新元素：
element.appendChild(para);
*/

