require.config({
	baseUrl:'js',
	paths:{
		jquery:'jquery-2.1.4'			//could not add the extend name after the file name
	}
});
/*
require(['jquery','scrollTo'],function($,scrollTo){
	var scroll = new scrollTo.ScrollTo({
		dest:0,
		speed:500
	});
	
	$('#backTop').on('click', $.proxy(scroll.move, scroll));
	$(window).on('scroll',function(){
		checkPosition($(window).height());
	});
	checkPosition($(window).height());
	
	function checkPosition(pos){
		if($(window).scrollTop()>pos){
			$('#backTop').fadeIn();
		}else{
			$('#backTop').fadeOut();
		}
	}
});
*/
require(['jquery','backTop'], function($,backTop){
	//------------------------------------
	// instance method call
	//------------------------------------
	/*new backTop.BackTop($('#backTop'),{
		mode : 'move',
		dest : 0,
		speed : 500
	});*/
	/*new backTop.BackTop($('#backTop'),{
		mode : 'go'
	});*/
	//------------------------------------
	// plugin method call
	//------------------------------------
	$('#backTop').backTop({
		mode : 'move',
		dest : 0,
		speed : 500
	});
});