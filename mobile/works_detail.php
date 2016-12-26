<?php
ini_set('allow_url_fopen', 1);
define('DOMAIN', 'http://localhost:8080/api/works/detail/');
// define('DOMAIN', 'http://entetsu-assist.co.jp/api/works/');

$id = 4;
$url = DOMAIN . $id;

print_r(file_get_contents($url));
$data = json_decode(file_get_contents($url), true);
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
<h2 class="stitle"><img src="imgs/title_works.png" alt="検索結果" width="100%"></h2>
<section>
<div class="worksDetail">
    <div class="workData">
        <div class="workName">ホテル客室整備スタッフ</div>
        <ul class="workPoint">
        	<li>時給: 860円</li>
        	<li>17:00～19:30 </li>
        </ul>
        <dl class="workInfo">
        	<dt>仕事の内容</dt>
            <dd>リゾートホテルのチェックイン後の客室整備・布団敷き・基本和室（約３０部屋程度）での布団敷きの作業です が、時々洋室でのエキストラベッドの準備をして 頂きます。※２～３人１組にて作業</dd>
            
            <dt>勤務地</dt>
            <dd>浜松市東区</dd>
            
            <dt>時間</dt>
            <dd>17:00～19:30</dd>
            
            <dt>休憩時間</dt>
            <dd>0分</dd>
            
            <dt>給与</dt>
            <dd>時給860円</dd>
            
            <dt>日数</dt>
            <dd>週5日程度</dd>
            
            <dt>休日</dt>
            <dd>週休シフト制</dd>
            
            <dt>雇用形態</dt>
            <dd>パート</dd>
            
            <dt>雇用期間</dt>
            <dd>長期</dd>
            
            <dt>学歴</dt>
            <dd>不問</dd>
            
            <dt>職場の雰囲気</dt>
            <dd>仲の良い楽しい職場です。20～50代の幅広い女性がいます。</dd>
            
            <dt>資格</dt>
            <dd>普通運転免許</dd>
            
            <dt>備考</dt>
            <dd>シフトは融通がききます。</dd>
        </dl>

        <div class="worksBtnBox">
        	<!--a class="btnOther" href="works.php">似た仕事を検索</a-->
        	<a class="btnBack" href="top.php">戻る</a>
        </div>
    </div>
</div>
</section>

</article>
</div><!-- /.contents -->

<?php include 'include/footer.inc'; ?>

</div><!-- /.wrap -->
</div><!-- /#view -->

<?php include 'include/js.inc'; ?>


</body>
</html>
