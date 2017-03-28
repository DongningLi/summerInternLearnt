//prompt提示框，后一个为默认值
<html>
<head>
<script type="text/javascript">
function disp_prompt()
  {
  var name=prompt("请输入您的名字","Bill Gates")
  if (name!=null && name!="")
    {
    document.write("你好！" + name + " 今天过得怎么样？")
    }
  }
</script>
</head>
<body>

<input type="button" onclick="disp_prompt()" value="显示提示框" />

</body>
</html>



//警告框    \n：表示换行
  <html>
  <head>
  <script type="text/javascript">
  function disp_alert()
  {
  alert("再次向您问好！在这里，我们向您演示" + '\n' + "如何向警告框添加折行。")
  }
  </script>
  </head>
  <body>

  <input type="button" onclick="disp_alert()" value="显示警告框" />

  </body>
  </html>
