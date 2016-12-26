<!DOCTYPE html>
<html lang="ja">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=320px, user-scalable=no, initial-scale=1, maximum-scale=1" />
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
        <li><img id="t" src="imgs/btn/time_a.png" alt="img" width="100%"></li>
        <li><img id="c" src="imgs/btn/cat_a.png" alt="img" width="82.9268%"></li>
        <li><img id="l" src="imgs/btn/loc_a.png" alt="img" width="82.9268%"></li>
    </ul>
    
    <div class="searchBox">
    	<div class="time">
            <ul class="sub">
                <li><img id="ta" src="imgs/btn/time_a_a.png" alt="img" width="100%"></li>
                <li><img id="tb" src="imgs/btn/time_b_a.png" alt="img" width="100%"></li>
                <li><img id="tc" src="imgs/btn/time_c_a.png" alt="img" width="100%"></li>
            </ul>
        
            <ul class="sub">
                <li><img id="ta1" src="imgs/btn/time_d_a.png" alt="img" width="100%"></li>
                <li><img id="tb1" src="imgs/btn/time_d_a.png" alt="img" width="82.9268%"></li>
                <li><img id="tc1" src="imgs/btn/time_d_a.png" alt="img" width="82.9268%"></li>
            </ul>
        
            <ul class="sub">
                <li><img id="ta2" src="imgs/btn/time_e_a.png" alt="img" width="100%"></li>
                <li><img id="tb2" src="imgs/btn/time_e_a.png" alt="img" width="82.9268%"></li>
                <li><img id="tc2" src="imgs/btn/time_e_a.png" alt="img" width="82.9268%"></li>
            </ul>
        </div>
    	<!-- /.time -->
        
    	<div class="cat">
            <ul class="sub">
                <li></li>
                <li><img id="ca" src="imgs/btn/cat_b_a.png" alt="img" width="82.9268%"></li>
                <li></li>
            </ul>
            
            <ul class="sub">
                <li></li>
                <li><img id="cb" src="imgs/btn/cat_c_a.png" alt="img" width="82.9268%"></li>
                <li></li>
            </ul>
            
            <ul class="sub">
                <li></li>
                <li><img id="cc" src="imgs/btn/cat_d_a.png" alt="img" width="82.9268%"></li>
                <li></li>
            </ul>
            
            <ul class="sub">
                <li></li>
                <li><img id="cd" src="imgs/btn/cat_e_a.png" alt="img" width="82.9268%"></li>
                <li></li>
            </ul>
            
            <ul class="sub">
                <li></li>
                <li><img id="ce" src="imgs/btn/cat_f_a.png" alt="img" width="82.9268%"></li>
                <li></li>
            </ul>
        </div>
    	<!-- /.cat -->

    	<div class="loc">
            <ul class="sub">
                <li></li>
                <li></li>
                <li><img id="la" src="imgs/btn/loc_b_a.png" alt="img" width="82.9268%"></li>
            </ul>
            
            <ul class="sub">
                <li></li>
                <li></li>
                <li><img id="lb" src="imgs/btn/loc_c_a.png" alt="img" width="82.9268%"></li>
            </ul>
            
            <ul class="sub">
                <li></li>
                <li></li>
                <li><img id="lc" src="imgs/btn/loc_d_a.png" alt="img" width="82.9268%"></li>
            </ul>
            
            <ul class="sub">
                <li></li>
                <li></li>
                <li><img id="ld" src="imgs/btn/loc_e_a.png" alt="img" width="82.9268%"></li>
            </ul>
            
            <ul class="sub">
                <li></li>
                <li></li>
                <li><img id="le" src="imgs/btn/loc_f_a.png" alt="img" width="82.9268%"></li>
            </ul>
            
            <ul class="sub">
                <li></li>
                <li></li>
                <li><img id="lf" src="imgs/btn/loc_g_a.png" alt="img" width="82.9268%"></li>
            </ul>
            
            <ul class="sub">
                <li></li>
                <li></li>
                <li><img id="lg" src="imgs/btn/loc_h_a.png" alt="img" width="82.9268%"></li>
            </ul>
        </div>
    	<!-- /.loc -->
    </div>
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
        var ta1 = $('#ta1');
        var ta2 = $('#ta2');
        var tb1 = $('#tb1');
        var tb2 = $('#tb2');
        var tc1 = $('#tc1');
        var tc2 = $('#tc2');

        var ca = $('#ca');
        var cb = $('#cb');
        var cc = $('#cc');
        var cd = $('#cd');
        var ce = $('#ce');

        var la = $('#la');
        var lb = $('#lb');
        var lc = $('#lc');
        var ld = $('#ld');
        var le = $('#le');
        var lf = $('#lf');
        var lg = $('#lg');

        $('div.doorBtm').on('click', function() {
            $('div.doorBtm').animate({top: '1250px'}, 1500);
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

        c.on('click', function() {
            t.attr('src', 'imgs/btn/time_d.png');
            l.attr('src', 'imgs/btn/loc_d.png');

            ca.animate({opacity: 1}, 500);
            cb.animate({opacity: 1}, 500);
            cc.animate({opacity: 1}, 500);
            cd.animate({opacity: 1}, 500);
            ce.animate({opacity: 1}, 500);
        });

        l.on('click', function() {
            t.attr('src', 'imgs/btn/time_d.png');
            c.attr('src', 'imgs/btn/cat_d.png');

            la.animate({opacity: 1}, 500);
            lb.animate({opacity: 1}, 500);
            lc.animate({opacity: 1}, 500);
            ld.animate({opacity: 1}, 500);
            le.animate({opacity: 1}, 500);
            lf.animate({opacity: 1}, 500);
            lg.animate({opacity: 1}, 500);
        });

        ta.on('click', function() {
            console.log('test');
            tb.attr('src', 'imgs/btn/time_b_d.png');
            tc.attr('src', 'imgs/btn/time_c_d.png');

            ta1.animate({opacity: 1}, 500);
            ta2.animate({opacity: 1}, 500);
        });

        tb.on('click', function() {
            console.log('test');
            ta.attr('src', 'imgs/btn/time_a_d.png');
            tc.attr('src', 'imgs/btn/time_c_d.png');

            tb1.animate({opacity: 1}, 500);
            tb2.animate({opacity: 1}, 500);
        });

        tc.on('click', function() {
            console.log('test');
            ta.attr('src', 'imgs/btn/time_a_d.png');
            tb.attr('src', 'imgs/btn/time_b_d.png');

            tc1.animate({opacity: 1}, 500);
            tc2.animate({opacity: 1}, 500);
        });

        ta1.on('click', function() {
            ta2.attr('src', 'imgs/btn/time_e_d.png');
        });

        ta2.on('click', function() {
            ta1.attr('src', 'imgs/btn/time_d_d.png');
        });

        tb1.on('click', function() {
            tb2.attr('src', 'imgs/btn/time_e_d.png');
        });

        tb2.on('click', function() {
            tb1.attr('src', 'imgs/btn/time_d_d.png');
        });

        tc1.on('click', function() {
            tc2.attr('src', 'imgs/btn/time_e_d.png');
        });

        tc2.on('click', function() {
            tc1.attr('src', 'imgs/btn/time_d_d.png');
        });
    });
</script>

</body>
</html>
