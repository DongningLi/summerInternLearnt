//先引进同文件夹下的文件，并且定义名字供调用
// active时 调用名字下相应的函数

//在tab初始化的时候，对其进行绑定事件
define(['charts'], function(charts) {
    var tabDataId = {};
    var indexId = "111111111111111";
    var tab = {
        init: function() {
            var tabs = $( "#tabs" ).tabs({
                    activate:function (event,ui) {
                       if($(event.currentTarget).attr('id') === 'a-111111111111111') {
                           charts.resizeCurrentChart();
                       }
                    }
                });

            $(document).on("keydown",tab.refresh);
            $(document).on("keydown",tab.closeTabShotcut);
			
			
		    $(window).bind("resize",function () {
		                   myChart.resize(); //使图表适应窗口
		               });
			
			resizeCurrentChart: function() {
				$(window).trigger('resize'); //出发resize事件，配合上述应用，改变大小
			        }