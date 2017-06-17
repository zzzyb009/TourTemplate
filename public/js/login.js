/*
* @Author: zyb
* @Date:   2017-04-20 20:48:39
* @Last Modified by:   zyb
* @Last Modified time: 2017-04-20 21:57:03
*/

$(function(){
	function confirmWindow(id,id2,widths,titles){
		$(id).dialogBox({
			width:widths,
			hasClose: true,
			hasMask: true,
			hasBtn: true,
			confirmValue: '登录',
			confirm: function(){
				// alert('this is callback function');
			},
			cancel:function(){
				// alert("cancel");
			},
			cancelValue: '取消',
			title: titles,
			content: $(id2).html()
		});
	};
	$("#login").click(function(){
		confirmWindow("#showLogin","#showLogin1","400","Login");
	});
	$(".icon-chevron-up").click(function(){
		$(document).scrollTop(0);
	});
});