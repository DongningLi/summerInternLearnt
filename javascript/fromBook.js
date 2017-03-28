var answer = confirm("ready?!!!") //an alert ONLY with confirm button
if (answer) window.location = ".......URL Address......."



//防止<被当作标签符号。 < 用 &lt; 替代
if(a &lt; b)

或者将function放在CData内部，并为了兼容各个浏览器，再将其注释掉
<script>
//<![CDATA[
	function(){
		if(a<b)
	}
//]]>
	]
</script>
	
	
	

// NaN与任何值都不等，计算是NaN自己也不相等
alert(NaN==NaN)  //false




//document.get 与 $()的不同
document.getelementbyid 是HTMLDOM对象
$('#id')是jquery对象

相互转化方法
jquery object to html dom
   $('#MyUL').get(0)
html dom to jquery 
   $(document.getElementById("MyUL"))
	
	

    $('#attrdisplay').on('click', '.classname', function(e) {
        console.log($(e.target).parents('tr[role="row"]').attr('id'))
        attrDisplayD.delattr(e);
    });
	
	
	
	
	//查找时有无空格的区别
	//input的子元素中查找
	$("input .couriermatch_province")
	//input中查找
	$("input.couriermatch_province")
