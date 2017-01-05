<?php
ini_set('allow_url_fopen', 1);
include 'include/env.php';

$category = $_GET['category'];
$url = DOMAIN . 'api/works/category/'. $category;
$w = array();
if (!empty(json_decode(file_get_contents($url), true))) {
    $works = json_decode(file_get_contents($url), true);
}
?>
<!DOCTYPE html>
<html lang="ja">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=320px, user-scalable=no, initial-scale=1, maximum-scale=1" />
<title>遠鉄アシスト</title>
<?php include 'include/meta.inc'; ?>
<link rel="stylesheet" href="css/flexslider.css">

</head>
<body>
<div id="view">
<div class="wrap">
<?php include 'include/header.inc'; ?>

<div id="contents">

<section>
<div class="worksBg">
    <p>&nbsp;</p>

    <?php if (empty($works)) : ?>
        <p class="empty">検索結果が0件でした</p>
    <?php else : ?>
    <?php foreach ($works as $w) :  ?>    
    <div class="worksBox">
    <div class="recruitBox">
    <div class="recName"><p><?php echo $w['title']; ?></p>
        <a class="link" href="works_detail.php?id=<?php echo $w['id']; ?>">
            詳細
        </a></div>
        <div class="recPost">
        <p><?php echo $w['detail']; ?></p>
        </div>
        <div class="recPoint">
            <span class="pay"><?php
                echo $w['unit_wage'] . ' : ' . $w['abbr_wage'] . '円';
            ?></span>
            <span class="hour">
                <?php echo $w['abbr_time']; ?>
            </span></div>
        </div>

    </div>
    <?php endforeach; ?>
    <?php endif; ?>

    <div class="worksBtnBox">
        <a class="btnBack" href="top.php">戻る</a>
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
