<html>
<body>

<script type="text/javascript">
var b1=new Boolean( 0)
var b2=new Boolean(1)
var b3=new Boolean("")
var b4=new Boolean(null)
var b5=new Boolean(NaN)
var b6=new Boolean("false")

document.write("0 是逻辑的 "+ b1 +"<br />")
document.write("1 是逻辑的 "+ b2 +"<br />")
document.write("空字符串是逻辑的 "+ b3 + "<br />")
document.write("null 是逻辑的 "+ b4+ "<br />")
document.write("NaN 是逻辑的 "+ b5 +"<br />")
document.write("字符串 'false' 是逻辑的 "+ b6 +"<br />")
</script>

</body>
</html>

/*
0 是逻辑的 false
1 是逻辑的 true
空字符串是逻辑的 false
null 是逻辑的 false
NaN 是逻辑的 false
字符串 'false' 是逻辑的 true
*/