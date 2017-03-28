<button type="button" onclick = "alert('welcome!')">click here </button>

//find the ID to change concept
<!DOCTYPE html>
<html>
<body>

<h1>我的第一段 JavaScript</h1>

<p id="demo">
JavaScript 能改变 HTML 元素的内容。
</p>

<script>
function myFunction()
{
x=document.getElementById("demo");  // find element by id "demo"
x.innerHTML="Hello JavaScript!";    // result will change to this sentence
}
</script>

<button type="button" onclick="myFunction()">点击这里</button>

</body>
</html>

//为空 或者不是数字，弹出提示框
if(x==""||isNaN(x))
	{
	alert("Not Numeric");
	}


/*
请使用 document.write() 仅仅向文档输出写内容。
如果在文档已完成加载后执行 document.write，整个 HTML 页面将被覆盖：
即，script仅能对文档进行修改编写
当在页面加载完毕后，点击click再写入时， 网页全部被更新替换
*/
	
	
//附值后再重新声明变量但不附值，变量仍有值存在且不变
	var carname = "volvo";
	var carname;    //value = "volvo"