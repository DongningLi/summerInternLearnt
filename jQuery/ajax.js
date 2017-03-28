
<!DOCTYPE html>
<html>
<head>
<script src="/jquery/jquery-1.11.1.min.js"></script>
<script>
$(document).ready(function(){
  $("button").click(function(){
	  //仅调用p1元素 如果用全部的文档 则去除#p1不写
    $("#div1").load("/example/jquery/demo_test.txt #p1");
  });
});
</script>
</head>
<body>

<div id="div1"><h2>使用 jQuery AJAX 来改变文本</h2></div>
<button>获得外部内容</button>

</body>
</html>



//调取内容时 alert提示
/*
responseTxt - 包含调用成功时的结果内容
statusTXT - 包含调用的状态
xhr - 包含 XMLHttpRequest 对象
*/
$("#div1").load("/example/jquery/demo_test.txt",function(responseTxt,statusTxt,xhr){
      if(statusTxt=="success")
        alert("外部内容加载成功！");
      if(statusTxt=="error")
        alert("Error: "+xhr.status+": "+xhr.statusText);
    });
	

//get AND post
//$.get(URL,callback);
//$.post(URL,data,callback);
<!DOCTYPE html>
<html>
<head>
<script src="/jquery/jquery-1.11.1.min.js"></script>
<script>
$(document).ready(function(){
  $("button").click(function(){
    $.get("/example/jquery/demo_test.asp",function(data,status){
      alert("数据：" + data + "\n状态：" + status);
    });
  });
});
</script>
/*
<script>
$(document).ready(function(){
  $("button").click(function(){
    $.post("/example/jquery/demo_test_post.asp",
    {
      name:"Donald Duck",
      city:"Duckburg"
    },
    function(data,status){
      alert("数据：" + data + "\n状态：" + status);
    });
  });
});
</script>
*/
</head>
<body>
<button>向页面发送 HTTP GET 请求，然后获得返回的结果</button>
</body>
</html>

