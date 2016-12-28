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
        <input type="text" value="" placeholder="フリーワードで仕事を探す" />
        <button>検索</button>
    </div>

    <ul>
        <li><img id="t" src="imgs/btn/time_a.png" alt="img" width="100%"></li>
        <li><img id="c" src="imgs/btn/cat_a.png" alt="img" width="82.9268%"></li>
        <li><img id="l" src="imgs/btn/loc_a.png" alt="img" width="82.9268%"></li>
    </ul>
    
    <div class="searchBox">
    	<div class="time">
            <ul class="sub">
                <li><img id="ta" src="imgs/btn/time_b_a.png" alt="img" width="100%"></li>
                <li><img id="tb" src="imgs/btn/time_c_a.png" alt="img" width="100%"></li>
                <li><img id="tc" src="imgs/btn/time_d_a.png" alt="img" width="100%"></li>
            </ul>
        
            <ul class="sub">
                <li></li>
                <li><img id="tb1" src="imgs/btn/time_e_a.png" alt="img" width="82.9268%"></li>
                <li></li>
            </ul>
        
            <ul class="sub">
                <li></li>
                <li><img id="tb2" src="imgs/btn/time_f_a.png" alt="img" width="82.9268%"></li>
                <li></li>
            </ul>
        
            <ul class="sub">
                <li></li>
                <li><img id="tb3" src="imgs/btn/time_g_a.png" alt="img" width="82.9268%"></li>
                <li></li>
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
            
            <ul class="sub">
                <li></li>
                <li><img id="cf" src="imgs/btn/cat_g_a.png" alt="img" width="82.9268%"></li>
                <li></li>
            </ul>
            
            <ul class="sub">
                <li></li>
                <li><img id="cg" src="imgs/btn/cat_h_a.png" alt="img" width="82.9268%"></li>
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
            
            <ul class="sub">
                <li></li>
                <li></li>
                <li><img id="lh" src="imgs/btn/loc_i_a.png" alt="img" width="82.9268%"></li>
            </ul>
        </div>
    	<!-- /.loc -->
    </div>
</div><!-- /#search -->

<div id="contents">
<article>
<section>
<h2 class="stitle"><img src="imgs/new_rec_head.png" alt="新着求人" width="100%"></h2>
<div class="newRec">
        <div class="flexslider">
        <ul class="slides">
        	<li>
            <div class="recruitBoxTop">
            <div class="recruitBoxBtm">
            <div class="recruitBox">
                <div class="recName"><p>ホテル客室整備スタッフ</p>
                <a class="link" href="w01.php">詳細</a></div>
                <div class="recPost">
                    <p>    リゾートホテルのチェックイン後の客室整備・布団敷き・基本和室（約３０部屋程度）での布団敷きの作業です が、時々洋室でのエキストラベッドの準備をして 頂きます。※２～３人１組にて作業</p>
                </div>
                <div class="recPoint"><span class="pay">時給: 860円</span><span class="hour">17:00~19:30</span></div>
            </div>
            </div>
            </div>
            </li>
        	<li>
            <div class="recruitBoxTop">
            <div class="recruitBoxBtm">
            <div class="recruitBox">
                <div class="recName"><p>クリーンスタッフ</p>
                <a class="link" href="w02.php">詳細</a></div>
                <div class="recPost">
                    <p>温浴施設内の日常清掃（脱衣所・洗い場・階段等）</p>
                </div>
                <div class="recPoint"><span class="pay">時給: 940円</span><span class="hour">5:30~8:30</span></div>
            </div>
            </div>
            </div>
            </li>
        	<li>
            <div class="recruitBoxTop">
            <div class="recruitBoxBtm">
            <div class="recruitBox">
                <div class="recName"><p>クリーンスタッフ</p>
                <a class="link" href="w03.php">詳細</a></div>
                <div class="recPost">
                    <p>事務所・工場内の日常清掃（玄関・通路・トイレ等）</p>
                </div>
                <div class="recPoint"><span class="pay">時給: 820円</span><span class="hour">7:30~11:30</span></div>
            </div>
            </div>
            </div>
            </li>
        	<li>
            <div class="recruitBoxTop">
            <div class="recruitBoxBtm">
            <div class="recruitBox">
                <div class="recName"><p>クリーンスタッフ</p>
                <a class="link" href="w04.php">詳細</a></div>
                <div class="recPost">
                    <p>フロア・トイレ等の日常清掃</p>
                </div>
                <div class="recPoint"><span class="pay">時給: 830円</span><span class="hour">8:00~12:00</span></div>
            </div>
            </div>
            </div>
            </li>
        	<li>
            <div class="recruitBoxTop">
            <div class="recruitBoxBtm">
            <div class="recruitBox">
                <div class="recName"><p>A.客室整備　B.客室の布...</p>
                <a class="link" href="w05.php">詳細</a></div>
                <div class="recPost">
                    <p>A.客室整備　B.客室の布団敷き</p>
                </div>
                <div class="recPoint"><span class="pay">時給: 860円</span><span class="hour">9:00~13:00</span></div>
            </div>
            </div>
            </div>
            </li>
        	<li>
            <div class="recruitBoxTop">
            <div class="recruitBoxBtm">
            <div class="recruitBox">
                <div class="recName"><p>駐車場管理業務（浜松...</p>
                <a class="link" href="w06.php">詳細</a></div>
                <div class="recPost">
                    <p>街中の駐車場で、売上金やサービス券の回収・集計、駐車場機械操作、車両誘導などをするお仕事です。未経験者歓迎！</p>
                </div>
                <div class="recPoint"><span class="pay">時給: 800円</span><span class="hour">5:45～20:00</span></div>
            </div>
            </div>
            </div>
            </li>
        </ul>
        </div>
</div>
</section>

<section>
	<div class="searchTime">
	<div class="recTypeTime"><img src="imgs/rec_type_time_bg.png" alt="Time zone" width="100%" class="target">
    <ul class="typeList">
    	<li class="target"><a href="works.php"><img src="imgs/rec_type_time01_t.png" alt="フルタイム" width="82.05%" class="target"><img src="imgs/rec_type_time_arrow.png" alt="arrow" width="17.95%" class="target"></a></li>
    	<li class="target"><a href="works.php"><img src="imgs/rec_type_time02_t.png" alt="短時間" width="82.05%" class="target"><img src="imgs/rec_type_time_arrow.png" alt="arrow" width="17.95%" class="target"></a></li>
    	<li class="target"><a href="works.php"><img src="imgs/rec_type_time03_t.png" alt="短期" width="82.05%" class="target"><img src="imgs/rec_type_time_arrow.png" alt="arrow" width="17.95%" class="target"></a></li>
    	<li class="target"><a href="works.php"><img src="imgs/rec_type_time04_t.png" alt="午前中" width="82.05%" class="target"><img src="imgs/rec_type_time_arrow.png" alt="arrow" width="17.95%" class="target"></a></li>
    	<li class="target"><a href="works.php"><img src="imgs/rec_type_time05_t.png" alt="午後" width="82.05%" class="target"><img src="imgs/rec_type_time_arrow.png" alt="arrow" width="17.95%" class="target"></a></li>
    	<li class="target"><a href="works.php"><img src="imgs/rec_type_time06_t.png" alt="夕方" width="82.05%" class="target"><img src="imgs/rec_type_time_arrow.png" alt="arrow" width="17.95%" class="target"></a></li>
    </ul>
    <div class="recBar target"><img src="imgs/rec_bar_black.png" alt="image" width="100%"></div>
    </div>
    </div>

	<div class="searchBusiness">
	<div class="recTypeBusiness"><img src="imgs/rec_type_business_bg.png" alt="Business" width="100%" class="target">
    <ul id="categoryBtn" class="typeList">
    	<li class="target"><a href="works.php"><img src="imgs/rec_type_business01_t.png" alt="清掃職" width="82.05%" class="target"><img src="imgs/rec_type_business_arrow.png" alt="arrow" width="17.95%" class="target"></a></li>
    	<li class="target"><a href="works.php"><img src="imgs/rec_type_business02_t.png" alt="ドライバー" width="82.05%" class="target"><img src="imgs/rec_type_business_arrow.png" alt="arrow" width="17.95%" class="target"></a></li>
    	<li class="target"><a href="works.php"><img src="imgs/rec_type_business03_t.png" alt="ビル管理スタッフ" width="82.05%" class="target"><img src="imgs/rec_type_business_arrow.png" alt="arrow" width="17.95%" class="target"></a></li>
    	<li class="target"><a href="works.php"><img src="imgs/rec_type_business04_t.png" alt="営業・事務職" width="82.05%" class="target"><img src="imgs/rec_type_business_arrow.png" alt="arrow" width="17.95%" class="target"></a></li>
    	<li class="target"><a href="works.php"><img src="imgs/rec_type_business05_t.png" alt="食品検査技師" width="82.05%" class="target"><img src="imgs/rec_type_business_arrow.png" alt="arrow" width="17.95%" class="target"></a></li>
    	<li class="target"><a href="works.php"><img src="imgs/rec_type_business06_t.png" alt="新卒" width="82.05%" class="target"><img src="imgs/rec_type_business_arrow.png" alt="arrow" width="17.95%" class="target"></a></li>
    	<li class="target"><a href="works.php"><img src="imgs/rec_type_business07_t.png" alt="その他" width="82.05%" class="target"><img src="imgs/rec_type_business_arrow.png" alt="arrow" width="17.95%" class="target"></a></li>
    </ul>
    <div class="recBar target"><img src="imgs/rec_bar_black.png" alt="image" width="100%"></div>
    </div>
    </div>

	<div class="searchPlace">
	<div class="recTypePlace"><img src="imgs/rec_type_place_bg.png" alt="Business" width="100%" class="target">
    <ul  id="locationBtn" class="typeList">
    	<li class="target"><a href="works.php"><img src="imgs/rec_type_place01_t.png" alt="中区" width="82.05%" class="target nn"><img src="imgs/rec_type_place_arrow.png" alt="arrow" width="17.95%" class="target"></a></li>
    	<li class="target"><a href="works.php"><img src="imgs/rec_type_place02_t.png" alt="北区" width="82.05%" class="target"><img src="imgs/rec_type_place_arrow.png" alt="arrow" width="17.95%" class="target"></a></li>
    	<li class="target"><a href="works.php"><img src="imgs/rec_type_place03_t.png" alt="東区" width="82.05%" class="target"><img src="imgs/rec_type_place_arrow.png" alt="arrow" width="17.95%" class="target"></a></li>
    	<li class="target"><a href="works.php"><img src="imgs/rec_type_place04_t.png" alt="西区" width="82.05%" class="target"><img src="imgs/rec_type_place_arrow.png" alt="arrow" width="17.95%" class="target"></a></li>
    	<li class="target"><a href="works.php"><img src="imgs/rec_type_place05_t.png" alt="南区" width="82.05%" class="target"><img src="imgs/rec_type_place_arrow.png" alt="arrow" width="17.95%" class="target"></a></li>
    	<li class="target"><a href="works.php"><img src="imgs/rec_type_place06_t.png" alt="浜北区" width="82.05%" class="target"><img src="imgs/rec_type_place_arrow.png" alt="arrow" width="17.95%" class="target"></a></li>
    	<li class="target"><a href="works.php"><img src="imgs/rec_type_place07_t.png" alt="天竜区" width="82.05%" class="target"><img src="imgs/rec_type_place_arrow.png" alt="arrow" width="17.95%" class="target"></a></li>
    	<li class="target"><a href="works.php"><img src="imgs/rec_type_place08_t.png" alt="市外" width="82.05%" class="target"><img src="imgs/rec_type_place_arrow.png" alt="arrow" width="17.95%" class="target"></a></li>
    </ul>
    </div>
    </div>    
</section>

<section>
	<div class="topSeminar"><img src="imgs/seminar_img.png" alt="お仕事セミナー開催中" width="100%"></div>
</section>
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

        $('div.doorBtm').on('click', function() {
            $('div.doorBtm').animate({top: '1400px'}, 1500);
            $('#contents').animate({paddingTop: '1400px'}, 1500);
            t.animate({opacity: 1}, 500);
            c.animate({opacity: 1}, 500);
            l.animate({opacity: 1}, 500);

        });

        t.on('click', function() {
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
            window.location.href = 'works.php';
        });

        tb2.on('click', function() {
            tb1.attr('src', 'imgs/btn/time_e_d.png');
            tb2.attr('src', 'imgs/btn/time_f_a.png');
            tb3.attr('src', 'imgs/btn/time_g_d.png');
            window.location.href = 'works.php';
        });

        tb3.on('click', function() {
            tb1.attr('src', 'imgs/btn/time_e_d.png');
            tb2.attr('src', 'imgs/btn/time_f_d.png');
            tb3.attr('src', 'imgs/btn/time_g_a.png');
            window.location.href = 'works.php';
        });
        
        $('.sub').on('click', function() {
            if (!flag) {
                window.location.href = 'works.php';
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
