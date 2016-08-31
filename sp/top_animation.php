<!DOCTYPE html>
<html lang="ja">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=10.0, user-scalable=yes">
<title>遠鉄アシスト</title>
<?php include 'include/meta.inc'; ?>
<link rel="stylesheet" href="css/flexslider.css">

<link rel="stylesheet" href="css/adv.css">

</head>
<body>
<div id="view">
<div class="wrap">
<?php include 'include/header.inc'; ?>

<div id="contents">
<article>
<div class="workSearch">
	<div class="doorTop"><img src="imgs/search_top.png" alt="お仕事を探す" width="100%"></div>
	<div class="doorBtm"><img src="imgs/search_bottom.png" alt="お仕事を探す" width="100%"></div>
</div>

<div id="search">
    <input type="text" value="フリーワードで仕事を探す" />
    <ul>
        <li><img id="t" src="imgs/btn/time_a.png" alt="img" width="110"></li>
        <li><img id="c" src="imgs/btn/cat_a.png" alt="img" width="110"></li>
        <li><img id="l" src="imgs/btn/loc_a.png" alt="img" width="110"></li>
    </ul>
    
    <ul class="sub">
        <li><img id="ta" src="imgs/btn/time_a_a.png" alt="img" width="110"></li>
        <li><img id="tb" src="imgs/btn/time_b_a.png" alt="img" width="130"></li>
        <li><img id="tc" src="imgs/btn/time_c_a.png" alt="img" width="130"></li>
    </ul>

    <ul class="sub">
        <li></li>
        <li><img id="td" src="imgs/btn/time_d_a.png" alt="img" width="110"></li>
        <li></li>
    </ul>

    <ul class="sub">
        <li></li>
        <li><img id="te" src="imgs/btn/time_e_a.png" alt="img" width="110"></li>
        <li></li>
    </ul>
</div>

</article>
</div>

<?php include 'include/js.inc'; ?>

<script type="text/javascript" src="js/jquery.flexslider.js"></script>
<script type="text/javascript">
	$(window).load(function() {
		$('.flexslider').flexslider({
			animation: "slide",
			controlNav: true,
		});
	});

    $(document).ready(function() {
        var t = $('#t');
        var c = $('#c');
        var l = $('#l');

        var ta = $('#ta');
        var tb = $('#tb');
        var tc = $('#tc');
        var td = $('#td');
        var te = $('#te');

        $('div.doorBtm').on('click', function() {
            $('div.doorBtm').animate({top: '820px'}, 1500);
            t.animate({opacity: 1}, 500);
            c.animate({opacity: 1}, 500);
            l.animate({opacity: 1}, 500);

        });

        t.on('click', function() {
            c.attr('src', 'imgs/btn/cat_d.png');
            l.attr('src', 'imgs/btn/loc_d.png');

            ta.animate({opacity: 1}, 500);
            tb.animate({opacity: 1}, 500);
            tc.animate({opacity: 1}, 500);
        });

        tb.on('click', function() {
            console.log('test');
            ta.attr('src', 'imgs/btn/time_a_d.png');
            tc.attr('src', 'imgs/btn/time_c_d.png');

            td.animate({opacity: 1}, 500);
            te.animate({opacity: 1}, 500);
        });

        te.on('click', function() {
            td.attr('src', 'imgs/btn/time_d_d.png');
        });
    });
</script>

</body>
</html>
