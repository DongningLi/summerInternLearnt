/*requirejs优点
防止js家在阻塞页面渲染（防止先弹出alert后出现页面）
使用程序调用的方法加载js
//<header>里面加入requirejs方法：
    <script type="text/javascript" src="require.js"></script>
*/

//加载调用requirejs模块的时候不能写后缀

//调用requirejs文件
//本地
require(["js/a"],function(){  //模块中require的依赖必须是一个数组形式
    alert("load finished");
})
//服务器等云端js文件
require.config({
    paths : {
        "jquery" : ["http://libs.baidu.com/jquery/2.0.3/jquery"]   
    }
})
require(["jquery","js/a"],function($){
    $(function(){
        alert("load finished");  
    })
})
//上述版本精简化的代码
require.config({
    paths : {
		//"jquery" : ["http://libs.baidu.com/jquery/2.0.3/jquery" ,"js/jquery"], 可在云端不成功时候，加载本地服务器中js目录下的jquery
        "jquery" : ["http://libs.baidu.com/jquery/2.0.3/jquery" ],
        "a" : "js/a"   
    }
})
require(["jquery","a"],function($){
    $(function(){
        alert("load finished");  
    })
})