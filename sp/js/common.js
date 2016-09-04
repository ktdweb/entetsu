$(".service li a img ").hover( 
	function(){
		$(this).stop().animate({ opacity: 0.7	}, 200 );
	}, function(){
		$(this).stop().animate({ opacity: 1	}, 200 );
	}
);

$(".serviceBg .serviceBox").click(
	function(){
	var url = $(this).find('a').attr('href');
	location.href = url;
	}
); 

$(".typeList li").click(
	function(){
	var url = $(this).find('a').attr('href');
	location.href = url;
	}
); 

$(".recruitBox").click(
	function(){
	var url = $(this).find('a').attr('href');
	location.href = url;
	}
); 
