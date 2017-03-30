<?php
ini_set('allow_url_fopen', 1);
include 'include/env.php';

$url = DOMAIN . 'api/works/latest/';
$works = array();
if (!empty(json_decode(file_get_contents($url), true))) {
    $works = json_decode(file_get_contents($url), true);
}
?>
<!DOCTYPE html>
<html lang="ja">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=320, user-scalable=no, initial-scale=1, maximum-scale=1" />
<title>遠鉄アシスト</title>
<?php include 'include/meta.inc'; ?>
<link rel="stylesheet" href="css/flexslider.css">
<link rel="stylesheet" href="css/adv.css">

    <script type="text/javascript">
        /* 先読みする画像の配列 */
        var images_ary = [
        'imgs/rec_type_time01_t.png',
        'imgs/rec_type_time02_t.png',
        'imgs/rec_type_time03_t.png',
        'imgs/rec_type_time04_t.png',
        'imgs/rec_type_time05_t.png',
        'imgs/rec_type_time06_t.png',
        'imgs/rec_type_time_arrow.png',
        'imgs/rec_type_business01_t.png',
        'imgs/rec_type_business02_t.png',
        'imgs/rec_type_business03_t.png',
        'imgs/rec_type_business04_t.png',
        'imgs/rec_type_business05_t.png',
        'imgs/rec_type_business06_t.png',
        'imgs/rec_type_business07_t.png',
        'imgs/rec_type_business_arrow.png',
        'imgs/rec_type_place01_t.png',
        'imgs/rec_type_place02_t.png',
        'imgs/rec_type_place03_t.png',
        'imgs/rec_type_place04_t.png',
        'imgs/rec_type_place05_t.png',
        'imgs/rec_type_place06_t.png',
        'imgs/rec_type_place07_t.png',
        'imgs/rec_type_place08_t.png',
        'imgs/rec_type_place_arrow.png',
        'imgs/btn/cat_a.png',
        'imgs/btn/cat_b_a.png',
        'imgs/btn/cat_b_d.png',
        'imgs/btn/cat_c_a.png',
        'imgs/btn/cat_c_d.png',
        'imgs/btn/cat_d.png',
        'imgs/btn/cat_d_a.png',
        'imgs/btn/cat_d_d.png',
        'imgs/btn/cat_e_a.png',
        'imgs/btn/cat_e_d.png',
        'imgs/btn/cat_f_a.png',
        'imgs/btn/cat_f_d.png',
        'imgs/btn/cat_g_a.png',
        'imgs/btn/cat_g_d.png',
        'imgs/btn/cat_h_a.png',
        'imgs/btn/cat_h_d.png',
        'imgs/btn/loc_a.png',
        'imgs/btn/loc_b_a.png',
        'imgs/btn/loc_b_d.png',
        'imgs/btn/loc_c_a.png',
        'imgs/btn/loc_c_d.png',
        'imgs/btn/loc_d.png',
        'imgs/btn/loc_d_a.png',
        'imgs/btn/loc_d_d.png',
        'imgs/btn/loc_e_a.png',
        'imgs/btn/loc_e_d.png',
        'imgs/btn/loc_f_a.png',
        'imgs/btn/loc_f_d.png',
        'imgs/btn/loc_g_a.png',
        'imgs/btn/loc_g_d.png',
        'imgs/btn/loc_h_a.png',
        'imgs/btn/loc_h_d.png',
        'imgs/btn/loc_i_a.png',
        'imgs/btn/loc_i_d.png',
        'imgs/btn/search.png',
        'imgs/btn/time_a.png',
        'imgs/btn/time_a_a.png',
        'imgs/btn/time_a_d.png',
        'imgs/btn/time_b_a.png',
        'imgs/btn/time_b_d.png',
        'imgs/btn/time_c_a.png',
        'imgs/btn/time_c_d.png',
        'imgs/btn/time_d.png',
        'imgs/btn/time_d_a.png',
        'imgs/btn/time_d_d.png',
        'imgs/btn/time_e_a.png',
        'imgs/btn/time_e_d.png',
        'imgs/btn/time_f_a.png',
        'imgs/btn/time_f_d.png',
        'imgs/btn/time_g_a.png',
        'imgs/btn/time_g_d.png'
        ];

        /* 画像先読み処理関数 */
        function preLoad(imgAry) {
            var imgMax=imgAry.length;
            var images=new Array(imgMax);
            for (var i=0; i<imgMax; i++) {
                images[i]=new Image();
                images[i].src=imgAry[i];
            }
        }
    </script>

</head>
<body onLoad="preLoad(images_ary);">
<div id="view">
<div class="wrap">
<?php include 'include/header.inc'; ?>

<div class="workSearch">
	<div class="doorTop"><img src="imgs/search_top.png" alt="お仕事を探す" width="100%"></div>
	<div class="doorBtm"><img src="imgs/search_bottom.png" alt="お仕事を探す" width="100%"></div>
</div>

<div id="search">
    <div>
    <form method="post" action="works.php?category=freeword">
        <input type="text" name="keyword" value="" placeholder="フリーワードで仕事を探す" />
        <button>検索</button>
        </form>
    </div>

    <ul>
        <li><img id="t" src="imgs/btn/time_a.png" alt="img" width="100%"></li>
        <li><img id="c" src="imgs/btn/cat_a.png" alt="img" width="82.9268%"></li>
        <li><img id="l" src="imgs/btn/loc_a.png" alt="img" width="82.9268%"></li>
    </ul>
    
    <div class="searchBox">
    	<div class="time">
            <ul class="sub">
                <li><img id="ta" name="9" src="imgs/btn/time_b_a.png" alt="img" width="100%"></li>
                <li><img id="tb" name="10" src="imgs/btn/time_c_a.png" alt="img" width="100%"></li>
                <li><img id="tc" name="11" src="imgs/btn/time_d_a.png" alt="img" width="100%"></li>
            </ul>
        
            <ul class="sub" name="12">
                <li></li>
                <li><img id="tb1" name="12" src="imgs/btn/time_e_a.png" alt="img" width="82.9268%"></li>
                <li></li>
            </ul>
        
            <ul class="sub" name="13">
                <li></li>
                <li><img id="tb2" name="13" src="imgs/btn/time_f_a.png" alt="img" width="82.9268%"></li>
                <li></li>
            </ul>
        
            <ul class="sub" name="14">
                <li></li>
                <li><img id="tb3" name="14" src="imgs/btn/time_g_a.png" alt="img" width="82.9268%"></li>
                <li></li>
            </ul>
        </div>
    	<!-- /.time -->
        
    	<div class="cat">
            <ul class="sub" name="15">
                <li></li>
                <li><img id="ca" name="15" src="imgs/btn/cat_b_a.png" alt="img" width="82.9268%"></li>
                <li></li>
            </ul>
            
            <ul class="sub" name="16">
                <li></li>
                <li><img id="cb" name="16" src="imgs/btn/cat_c_a.png" alt="img" width="82.9268%"></li>
                <li></li>
            </ul>
            
            <ul class="sub" name="17">
                <li></li>
                <li><img id="cc" name="17" src="imgs/btn/cat_d_a.png" alt="img" width="82.9268%"></li>
                <li></li>
            </ul>
            
            <ul class="sub" name="18">
                <li></li>
                <li><img id="cd" name="18" src="imgs/btn/cat_e_a.png" alt="img" width="82.9268%"></li>
                <li></li>
            </ul>
            
            <ul class="sub" name="20">
                <li></li>
                <li><img id="ce" name="20" src="imgs/btn/cat_f_a.png" alt="img" width="82.9268%"></li>
                <li></li>
            </ul>
            
            <ul class="sub" name="21">
                <li></li>
                <li><img id="cf" name="21" src="imgs/btn/cat_g_a.png" alt="img" width="82.9268%"></li>
                <li></li>
            </ul>
            
            <ul class="sub" name="19">
                <li></li>
                <li><img id="cg" name="19" src="imgs/btn/cat_h_a.png" alt="img" width="82.9268%"></li>
                <li></li>
            </ul>
        </div>
    	<!-- /.cat -->

    	<div class="loc">
            <ul class="sub">
                <li></li>
                <li></li>
                <li><img id="la" name="1" src="imgs/btn/loc_b_a.png" alt="img" width="82.9268%"></li>
            </ul>
            
            <ul class="sub">
                <li></li>
                <li></li>
                <li><img id="lb" name="2" src="imgs/btn/loc_c_a.png" alt="img" width="82.9268%"></li>
            </ul>
            
            <ul class="sub">
                <li></li>
                <li></li>
                <li><img id="lc" name="3" src="imgs/btn/loc_d_a.png" alt="img" width="82.9268%"></li>
            </ul>
            
            <ul class="sub">
                <li></li>
                <li></li>
                <li><img id="ld" name="4" src="imgs/btn/loc_e_a.png" alt="img" width="82.9268%"></li>
            </ul>
            
            <ul class="sub" name="5">
                <li></li>
                <li></li>
                <li><img id="le" name="5" src="imgs/btn/loc_f_a.png" alt="img" width="82.9268%"></li>
            </ul>
            
            <ul class="sub" name="6">
                <li></li>
                <li></li>
                <li><img id="lf" name="6" src="imgs/btn/loc_g_a.png" alt="img" width="82.9268%"></li>
            </ul>
            
            <ul class="sub" name="7">
                <li></li>
                <li></li>
                <li><img id="lg" name="7" src="imgs/btn/loc_h_a.png" alt="img" width="82.9268%"></li>
            </ul>
            
            <ul class="sub" name="8">
                <li></li>
                <li></li>
                <li><img id="lh" name="8" src="imgs/btn/loc_i_a.png" alt="img" width="82.9268%"></li>
            </ul>
        </div>
    	<!-- /.loc -->
    </div>
</div><!-- /#search -->

<div id="contents">
<article>
<section>
<h2 class="stitle"><img src="imgs/new_rec_head.png" alt="新着求人" width="100%"></h2>
<div class="newRec" style="z-index: 1000;">
        <div>
        <ul class="slides">
            <?php for ($i = 0; $i < 3; $i++) { ?>

        	<li style="margin-bottom: 20px;">
            <div class="recruitBoxTop">
            <div class="recruitBoxBtm">
            <div class="recruitBox">
                <div class="recName"><p><?php echo mb_substr($works[$i]['title'], 0, 12) . '…'; ?></p>
                <a class="link" href="works_detail.php?id=4">詳細</a></div>
                <div class="recPost">
                <p><?php echo $works[$i]['detail']; ?></p>
                </div>
                <div class="recPoint">
                <span class="pay"><?php echo $works[$i]['unit_wage']; ?>: <?php echo $works[$i]['abbr_wage']; ?>円</span>
                    <span class="hour"><?php echo $works[$i]['abbr_time']; ?></span>
                </div>
            </div>
            </div>
            </div>
            </li>
            <?php } ?>
        </ul>
        </div>
</div>
</section>

<section>
	<div class="searchTime">
	<div class="recTypeTime"><img src="imgs/rec_type_time_bg.png" alt="Time zone" width="100%" class="target">
    <ul class="typeList">
    	<li class="target"><a href="works.php?category=9"><img src="imgs/rec_type_time01_t.png" alt="フルタイム" width="82.05%" class="target"><img src="imgs/rec_type_time_arrow.png" alt="arrow" width="17.95%" class="target"></a></li>
    	<li class="target"><a href="works.php?category=10"><img src="imgs/rec_type_time02_t.png" alt="短時間" width="82.05%" class="target"><img src="imgs/rec_type_time_arrow.png" alt="arrow" width="17.95%" class="target"></a></li>
    	<li class="target"><a href="works.php?category=11"><img src="imgs/rec_type_time03_t.png" alt="短期" width="82.05%" class="target"><img src="imgs/rec_type_time_arrow.png" alt="arrow" width="17.95%" class="target"></a></li>
    	<li class="target"><a href="works.php?category=12"><img src="imgs/rec_type_time04_t.png" alt="午前中" width="82.05%" class="target"><img src="imgs/rec_type_time_arrow.png" alt="arrow" width="17.95%" class="target"></a></li>
    	<li class="target"><a href="works.php?category=13"><img src="imgs/rec_type_time05_t.png" alt="午後" width="82.05%" class="target"><img src="imgs/rec_type_time_arrow.png" alt="arrow" width="17.95%" class="target"></a></li>
    	<li class="target"><a href="works.php?category=14"><img src="imgs/rec_type_time06_t.png" alt="夕方" width="82.05%" class="target"><img src="imgs/rec_type_time_arrow.png" alt="arrow" width="17.95%" class="target"></a></li>
    </ul>
    <div class="recBar target"><img src="imgs/rec_bar_black.png" alt="image" width="100%"></div>
    </div>
    </div>

	<div class="searchBusiness">
	<div class="recTypeBusiness"><img src="imgs/rec_type_business_bg.png" alt="Business" width="100%" class="target">
    <ul id="categoryBtn" class="typeList">
    	<li class="target"><a href="works.php?category=15"><img src="imgs/rec_type_business01_t.png" alt="清掃職" width="82.05%" class="target"><img src="imgs/rec_type_business_arrow.png" alt="arrow" width="17.95%" class="target"></a></li>
    	<li class="target"><a href="works.php?category=16"><img src="imgs/rec_type_business02_t.png" alt="ドライバー" width="82.05%" class="target"><img src="imgs/rec_type_business_arrow.png" alt="arrow" width="17.95%" class="target"></a></li>
    	<li class="target"><a href="works.php?category=17"><img src="imgs/rec_type_business03_t.png" alt="ビル管理スタッフ" width="82.05%" class="target"><img src="imgs/rec_type_business_arrow.png" alt="arrow" width="17.95%" class="target"></a></li>
    	<li class="target"><a href="works.php?category=18"><img src="imgs/rec_type_business04_t.png" alt="営業・事務職" width="82.05%" class="target"><img src="imgs/rec_type_business_arrow.png" alt="arrow" width="17.95%" class="target"></a></li>
    	<li class="target"><a href="works.php?category=20"><img src="imgs/rec_type_business05_t.png" alt="食品検査技師" width="82.05%" class="target"><img src="imgs/rec_type_business_arrow.png" alt="arrow" width="17.95%" class="target"></a></li>
    	<li class="target"><a href="works.php?category=21"><img src="imgs/rec_type_business06_t.png" alt="新卒" width="82.05%" class="target"><img src="imgs/rec_type_business_arrow.png" alt="arrow" width="17.95%" class="target"></a></li>
    	<li class="target"><a href="works.php?category=19"><img src="imgs/rec_type_business07_t.png" alt="その他" width="82.05%" class="target"><img src="imgs/rec_type_business_arrow.png" alt="arrow" width="17.95%" class="target"></a></li>
    </ul>
    <div class="recBar target"><img src="imgs/rec_bar_black.png" alt="image" width="100%"></div>
    </div>
    </div>

	<div class="searchPlace">
	<div class="recTypePlace"><img src="imgs/rec_type_place_bg.png" alt="Business" width="100%" class="target">
    <ul  id="locationBtn" class="typeList">
    	<li class="target"><a href="works.php?category=1"><img src="imgs/rec_type_place01_t.png" alt="中区" width="82.05%" class="target nn"><img src="imgs/rec_type_place_arrow.png" alt="arrow" width="17.95%" class="target"></a></li>
    	<li class="target"><a href="works.php?category=2"><img src="imgs/rec_type_place02_t.png" alt="北区" width="82.05%" class="target"><img src="imgs/rec_type_place_arrow.png" alt="arrow" width="17.95%" class="target"></a></li>
    	<li class="target"><a href="works.php?category=3"><img src="imgs/rec_type_place03_t.png" alt="東区" width="82.05%" class="target"><img src="imgs/rec_type_place_arrow.png" alt="arrow" width="17.95%" class="target"></a></li>
    	<li class="target"><a href="works.php?category=4"><img src="imgs/rec_type_place04_t.png" alt="西区" width="82.05%" class="target"><img src="imgs/rec_type_place_arrow.png" alt="arrow" width="17.95%" class="target"></a></li>
    	<li class="target"><a href="works.php?category=5"><img src="imgs/rec_type_place05_t.png" alt="南区" width="82.05%" class="target"><img src="imgs/rec_type_place_arrow.png" alt="arrow" width="17.95%" class="target"></a></li>
    	<li class="target"><a href="works.php?category=6"><img src="imgs/rec_type_place06_t.png" alt="浜北区" width="82.05%" class="target"><img src="imgs/rec_type_place_arrow.png" alt="arrow" width="17.95%" class="target"></a></li>
    	<li class="target"><a href="works.php?category=7"><img src="imgs/rec_type_place07_t.png" alt="天竜区" width="82.05%" class="target"><img src="imgs/rec_type_place_arrow.png" alt="arrow" width="17.95%" class="target"></a></li>
    	<li class="target"><a href="works.php?category=8"><img src="imgs/rec_type_place08_t.png" alt="市外" width="82.05%" class="target"><img src="imgs/rec_type_place_arrow.png" alt="arrow" width="17.95%" class="target"></a></li>
    </ul>
    </div>
    </div>    
</section>

<!--section>
	<div class="topSeminar"><img src="imgs/seminar_img.png" alt="お仕事セミナー開催中" width="100%"></div>
</section-->

</article>

<?php include 'include/footer.inc'; ?>
</div><!-- /#contents -->

</div><!-- /.wrap -->
</div><!-- /#view -->

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
        var ta3 = $('#ta3');
        var tb1 = $('#tb1');
        var tb2 = $('#tb2');
        var tb3 = $('#tb3');
        var tc1 = $('#tc1');
        var tc2 = $('#tc2');
        var tc3 = $('#tc3');

        var ca = $('#ca');
        var cb = $('#cb');
        var cc = $('#cc');
        var cd = $('#cd');
        var ce = $('#ce');
        var cf = $('#cf');
        var cg = $('#cg');

        var la = $('#la');
        var lb = $('#lb');
        var lc = $('#lc');
        var ld = $('#ld');
        var le = $('#le');
        var lf = $('#lf');
        var lg = $('#lg');
        var lh = $('#lh');

        var flag = false;
        var openflag = false;
        var cat = '';

        $('div.doorBtm').on('click', function() {
            $('div.doorBtm').animate({top: '1400px'}, 1500);
            $('#contents').animate({paddingTop: '1400px'}, 1500);
            t.animate({opacity: 1}, 500);
            c.animate({opacity: 1}, 500);
            l.animate({opacity: 1}, 500);

            openflag = true;

        });

        t.on('click', function() {
            cat = 'time';
            t.attr('src', 'imgs/btn/time_a.png');
            c.attr('src', 'imgs/btn/cat_d.png');
            l.attr('src', 'imgs/btn/loc_d.png');

            ta.animate({opacity: 1}, 500).css({'visibility':'visible'}).addClass('timea');
            tb.animate({opacity: 1}, 500).css({'visibility':'visible'}).addClass('timea');
            tc.animate({opacity: 1}, 500).css({'visibility':'visible'}).addClass('timea');

            ca.animate({opacity: 0}, 500);
            cb.animate({opacity: 0}, 500);
            cc.animate({opacity: 0}, 500);
            cd.animate({opacity: 0}, 500);
            ce.animate({opacity: 0}, 500);
            cf.animate({opacity: 0}, 500);
            cg.animate({opacity: 0}, 500);

            la.animate({opacity: 0}, 500);
            lb.animate({opacity: 0}, 500);
            lc.animate({opacity: 0}, 500);
            ld.animate({opacity: 0}, 500);
            le.animate({opacity: 0}, 500);
            lf.animate({opacity: 0}, 500);
            lg.animate({opacity: 0}, 500);
            lh.animate({opacity: 0}, 500);
        });

        c.on('click', function() {
            flag = false;
            cat = 'category';

            t.attr('src', 'imgs/btn/time_d.png');
            c.attr('src', 'imgs/btn/cat_a.png');
            l.attr('src', 'imgs/btn/loc_d.png');

            ta.animate({opacity: 0}, 500).css({'visibility':'hidden'}).removeClass('timea');
            tb.animate({opacity: 0}, 500).css({'visibility':'hidden'}).removeClass('timea');
            tc.animate({opacity: 0}, 500).css({'visibility':'hidden'}).removeClass('timea');
            tb1.animate({opacity: 0}, 500).css({'visibility':'hidden'});
            tb2.animate({opacity: 0}, 500).css({'visibility':'hidden'});
            tb3.animate({opacity: 0}, 500).css({'visibility':'hidden'});

            ca.animate({opacity: 1}, 500);
            cb.animate({opacity: 1}, 500);
            cc.animate({opacity: 1}, 500);
            cd.animate({opacity: 1}, 500);
            ce.animate({opacity: 1}, 500);
            cf.animate({opacity: 1}, 500);
            cg.animate({opacity: 1}, 500);

            la.animate({opacity: 0}, 500);
            lb.animate({opacity: 0}, 500);
            lc.animate({opacity: 0}, 500);
            ld.animate({opacity: 0}, 500);
            le.animate({opacity: 0}, 500);
            lf.animate({opacity: 0}, 500);
            lg.animate({opacity: 0}, 500);
            lh.animate({opacity: 0}, 500);
        });

        l.on('click', function() {
            flag = false;
            cat = 'location';

            t.attr('src', 'imgs/btn/time_d.png');
            c.attr('src', 'imgs/btn/cat_d.png');
            l.attr('src', 'imgs/btn/loc_a.png');

            ta.animate({opacity: 0}, 500).css({'visibility':'hidden'}).removeClass('timea');
            tb.animate({opacity: 0}, 500).css({'visibility':'hidden'}).removeClass('timea');
            tc.animate({opacity: 0}, 500).css({'visibility':'hidden'}).removeClass('timea');
            tb1.animate({opacity: 0}, 500).css({'visibility':'hidden'});
            tb2.animate({opacity: 0}, 500).css({'visibility':'hidden'});
            tb3.animate({opacity: 0}, 500).css({'visibility':'hidden'});

            ca.animate({opacity: 0}, 500);
            cb.animate({opacity: 0}, 500);
            cc.animate({opacity: 0}, 500);
            cd.animate({opacity: 0}, 500);
            ce.animate({opacity: 0}, 500);
            cf.animate({opacity: 0}, 500);
            cg.animate({opacity: 0}, 500);

            la.animate({opacity: 1}, 500);
            lb.animate({opacity: 1}, 500);
            lc.animate({opacity: 1}, 500);
            ld.animate({opacity: 1}, 500);
            le.animate({opacity: 1}, 500);
            lf.animate({opacity: 1}, 500);
            lg.animate({opacity: 1}, 500);
            lh.animate({opacity: 1}, 500);
        });

        ta.on('click', function() {
            ta.attr('src', 'imgs/btn/time_b_a.png');
            tb.attr('src', 'imgs/btn/time_c_d.png');
            tc.attr('src', 'imgs/btn/time_d_d.png');

            tb1.animate({opacity: 0}, 500).css({'visibility':'visible'});
            tb2.animate({opacity: 0}, 500).css({'visibility':'visible'});
            tb3.animate({opacity: 0}, 500).css({'visibility':'visible'});
        });

        tb.on('click', function() {
            flag = true;
            ta.attr('src', 'imgs/btn/time_b_d.png');
            tb.attr('src', 'imgs/btn/time_c_a.png');
            tc.attr('src', 'imgs/btn/time_d_d.png');

            tb1.animate({opacity: 1}, 500).css({'visibility':'visible'});
            tb2.animate({opacity: 1}, 500).css({'visibility':'visible'});
            tb3.animate({opacity: 1}, 500).css({'visibility':'visible'});
        });

        tc.on('click', function() {
            ta.attr('src', 'imgs/btn/time_b_d.png');
            tb.attr('src', 'imgs/btn/time_c_d.png');
            tc.attr('src', 'imgs/btn/time_d_a.png');

            tb1.animate({opacity: 0}, 500).css({'visibility':'visible'});
            tb2.animate({opacity: 0}, 500).css({'visibility':'visible'});
            tb3.animate({opacity: 0}, 500).css({'visibility':'visible'});
        });

        tb1.on('click', function() {
            tb1.attr('src', 'imgs/btn/time_e_a.png');
            tb2.attr('src', 'imgs/btn/time_f_d.png');
            tb3.attr('src', 'imgs/btn/time_g_d.png');
            if (openflag) {
            window.location.href = 'works.php?category=12';
            }
        });

        tb2.on('click', function() {
            tb1.attr('src', 'imgs/btn/time_e_d.png');
            tb2.attr('src', 'imgs/btn/time_f_a.png');
            tb3.attr('src', 'imgs/btn/time_g_d.png');
            if (openflag) {
            window.location.href = 'works.php?category=13';
            }
        });

        tb3.on('click', function() {
            tb1.attr('src', 'imgs/btn/time_e_d.png');
            tb2.attr('src', 'imgs/btn/time_f_d.png');
            tb3.attr('src', 'imgs/btn/time_g_a.png');
            if (openflag) {
                window.location.href = 'works.php?category=14';
            }
        });
        
        $('.sub').on('click', function(e) {
            var id = e.currentTarget.getAttribute('name');
            if (id == undefined) {
              id = 0;
            }

            if (cat == 'time') {
                id = e.target.name;
            }

            if (cat == 'category') {
                switch (parseInt(id)) {
                  case 0:
                    id = 15;
                    break;
                  case 12:
                    id = 16;
                    break;
                  case 13:
                    id = 17;
                    break;
                  case 14:
                    id = 18;
                    break;
                  case 5:
                    id = 20;
                    break;
                  case 6:
                    id = 21;
                    break;
                  case 7:
                    id = 19;
                    break;
                  default:
                    // no op
                    break;
                }
            }

            if (cat == 'location') {
                switch (parseInt(id)) {
                  case 0:
                    id = 1;
                    break;
                  case 12:
                    id = 2;
                    break;
                  case 13:
                    id = 3;
                    break;
                  case 14:
                    id = 4;
                    break;
                  default:
                    id = e.target.name;
                    break;
                }
            }

            if (openflag && (!flag || id != 10)) {
              window.location.href = 'works.php?category=' +  id;
            }
        });

        $('#search button').on('click', function() {
            window.location.href = 'works.php';
        });
    });
</script>

<script type="text/javascript" src="js/jquery-scrollInTurn.js"></script>
<script type="text/javascript">
    $(document).ready(function() {
        $('.searchTime').scrollInTurn();
    });

    $(document).ready(function() {
        $('.searchBusiness').scrollInTurn();
    });

    $(document).ready(function() {
        $('.searchPlace').scrollInTurn();
    });
</script>

</body>
</html>
