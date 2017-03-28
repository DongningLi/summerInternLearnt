<!DOCTYPE html>
<html>
<head>
<script src="/jquery/jquery-1.11.1.min.js">
</script>
<script>
$(document).ready(function(){
	//元素同时被div和p标签
  $("div p").first().css("background-color","yellow");
  //仅第一个div元素进行操作
});
</script>

/*
<script>
$(document).ready(function(){
  $("p").eq(1).css("background-color","yellow");

//其实是是从0开始标志地址的，所以是第二个p
<h1>欢迎来到我的主页</h1>
<p>我是唐老鸭 (index 0)。</p>
<p>唐老鸭 (index 1)。</p>
<p>我住在 Duckburg (index 2)。</p>
<p>我最好的朋友是米老鼠 (index 3)。</p>
});
</script>
*/

</head>
<body>

<h1>欢迎来到我的主页</h1>
<div>
<p>这是 div 中的一个段落。</p>
</div>

<div>
<p>这是 div 中的另一个段落。</p>
</div>

<p>这也是段落。</p>

</body>
</html>
