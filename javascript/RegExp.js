<html>
<body>

<script type="text/javascript">
var patt1=new RegExp("e");

document.write(patt1.test("The best things in life are free"));
</script>

</body>
</html>

// 找到第一个 "e"，并存储其位置
//如果再次运行 exec()，则从存储的位置开始检索，并找到下一个 //"e"，并存储其位置
<script type="text/javascript">
var patt1=new RegExp("e","g");
do
{
//exec ------ 输出找到的匹配字符
result=patt1.exec("The best things in life are free");
document.write(result);
}
while (result!=null)
</script>
	
	
// compile() 既可以改变检索模式，也可以添加或删除第二个参数
<script type="text/javascript">
var patt1=new RegExp("e");
document.write(patt1.test("The best things in life are free"));
patt1.compile("d");  //将要匹配见所得e换成d
document.write(patt1.test("The best things in life are free"));
</script>