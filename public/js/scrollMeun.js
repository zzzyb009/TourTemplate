/*
* @Author: zyb
* @Date:   2017-04-17 21:57:52
* @Last Modified by:   zyb
* @Last Modified time: 2017-04-22 12:58:31
*/
$(function(){
	$(window).scroll(function(event) {
		$("input[name='search']").blur();
		if($(document).scrollTop() > 520){
			$("#header").addClass('headerWhite');
		}else{
			$("#header").removeClass('headerWhite');
		}
	});
	$("input[name='search']").focus(function(){
		$("#header").addClass('headerWhite');
	});
	$("input[name='search']").blur(function(){
		$("#header").removeClass('headerWhite');
	});
	let myA = $(".mya");
	for (let i = 0,a;a= myA[i++];){
		$(a).click(function(event) {
			// console.log($(this));
			for(let j=0,b;b=myA[j++];){
				$(b).removeClass('aStyle');
			}
			$(this).addClass('aStyle');
		});
	}
	//锚点跳转滑动效果
  $('a[href*=#],area[href*=#]').click(function() {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
          var $target = $(this.hash);
          $target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']');
          if ($target.length) {
              var targetOffset = $target.offset().top;
              $('html,body').animate({
                          scrollTop: targetOffset
                      },
                      500);
              return false;
          }
      }
  });
  // 背包客的日记的滚动效果

});