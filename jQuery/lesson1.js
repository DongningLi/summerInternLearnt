<!DOCTYPE html>
<html>
<head>
<script src="/jquery/jquery-1.11.1.min.js">
</script>
<script>
$(document).ready(function(){
  $("p").click(function(){
    $(this).hide();
  });
});
</script>
</head>
<body>
<p>如果您点击我，我会消失。</p>
<p>点击我，我会消失。</p>
<p>也要点击我哦。</p>
</body>
</html>



<script type="text/javascript">
$(document).ready(function(){
$("button").click(function(){
$("p").hide();
});
});
</script>



$(selector).action()
//美元符号定义 jQuery
//选择符（selector）“查询”和“查找” HTML 元素
//jQuery 的 action() 执行对元素的操作
// 示例
$(this).hide() - 隐藏当前元素
$("p").hide() - 隐藏所有段落   //"" 用来指代所有的<>
$(".test").hide() - 隐藏所有 class="test" 的所有元素
$("#test").hide() - 隐藏所有 id="test" 的元素
$("p#demo") 选取所有 id="demo" 的 <p> 元素。
$("[href!='#']") 选取所有带有 href 值不等于 "#" 的元素。
$("[href$='.jpg']") 选取所有 href 值以 ".jpg" 结尾的元素。


$(selector).hide(speed,callback)
//callback 参数是一个在 hide 操作完成后被执行的函数。
//否则先弹提示框 后消失
$("p").hide(1000,function(){
alert("The paragraph is now hidden");
});


//下面的例子把 css(), slideUp(), and slideDown() 链接在一起。
//"p1" 元素首先会变为红色，然后向上滑动，然后向下滑动：
$("#p1").css("color","red").slideUp(2000).slideDown(2000);