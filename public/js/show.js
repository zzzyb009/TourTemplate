/*
* @Author: zyb
* @Date:   2017-04-19 18:51:17
* @Last Modified by:   zyb
* @Last Modified time: 2017-04-20 19:00:03
*/

$(function(){
	$(document).ready(function(){
		$(".article0Cont").fadeIn(1000).animate({top:"200px",opacity:"1"}, 1000 );
	});
	$(window).scroll(function(){
		if ($(document).scrollTop()>480) {
			$(".article1Cont").fadeIn(1000).animate({left:"100px",opacity:"1"}, 1000 );
		}
		if ($(document).scrollTop()>1400) {
			$(".article2Cont").fadeIn(1000).animate({left:"100px",opacity:"1"}, 1000 );
		}
	});
	$(".words").mouseover(function(){
		$(".group").fadeIn().addClass('changeheight');
	});
	$(".up").mouseout(function(){
		$(".group").removeClass('changeheight');
	});


});