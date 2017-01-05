<?php
ini_set('allow_url_fopen', 1);
include 'include/env.php';

$id = $_GET['id'];
$url = DOMAIN . 'api/works/detail/'. $id;
$w = array();
if (!empty(json_decode(file_get_contents($url), true))) {
    $w = json_decode(file_get_contents($url), true)[0];
}
?>
<!DOCTYPE html>
<html lang="ja">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=320px, user-scalable=no, initial-scale=1, maximum-scale=1" />
<title>遠鉄アシスト｜仕事を探す</title>
<?php include 'include/meta.inc'; ?>

</head>
<body>
<div id="view">
<div class="wrap">
<?php include 'include/header.inc'; ?>

<div id="contents">
<article>
<h2 class="stitle">
    <img src="imgs/title_works.png" alt="検索結果" width="100%">
</h2>
<section>
<div class="worksDetail">
    <div class="workData">
    <div class="workName"><?php echo $w['title'] ;?></div>
        <ul class="workPoint">
        <li><?php 
            echo $w['unit_wage'] . ' : ' . $w['abbr_wage'] . '円';
        ?></li>
            <li><?php echo $w['abbr_time']; ?></li>
        </ul>
        <dl class="workInfo">
        	<dt>仕事の内容</dt>
            <dd><?php echo $w['detail']; ?></dd>

            <dt>勤務地</dt>
            <dd><?php echo $w['location']; ?></dd>

            <dt>時間</dt>
            <dd><?php echo $w['time']; ?></dd>

            <dt>休憩時間</dt>
            <dd><?php echo $w['break']; ?></dd>

            <dt>給与</dt>
            <dd><?php echo $w['wage']; ?></dd>

            <dt>日数</dt>
            <dd><?php echo $w['days']; ?></dd>

            <dt>休日</dt>
            <dd><?php echo $w['holidays']; ?></dd>

            <dt>雇用形態</dt>
            <dd><?php echo $w['type']; ?></dd>

            <dt>雇用期間</dt>
            <dd><?php echo $w['term']; ?></dd>

            <dt>学歴</dt>
            <dd><?php echo $w['career']; ?></dd>

            <dt>職場の雰囲気</dt>
            <dd><?php echo $w['selling']; ?></dd>

            <dt>資格</dt>
            <dd><?php echo $w['cert']; ?></dd>

            <dt>備考</dt>
            <dd><?php echo $w['desc']; ?></dd>
        </dl>

        <div class="worksBtnBox">
        	<a class="btnBack" href="top.php">戻る</a>
        </div>
    </div>
</div>
</section>

</article>
</div><!-- /.contents -->

<footer>
<div class="fContact">
    電話でのお問い合わせは...
    <p><?php echo $w['tel']; ?></p>
    （受付時間 平日9：00～18：00）
</div>
<div class="copyright">
	<div class="pagetop"><a href="#view"><img src="imgs/pagetop.png" alt="ページの先頭へ" width="100%"></a></div>
    <p>Copyright(C) Entetsu Assist Co.,Ltd. All Rights Reserved</p>
</div>
</footer>

</div><!-- /.wrap -->
</div><!-- /#view -->

<?php include 'include/js.inc'; ?>


</body>
</html>
