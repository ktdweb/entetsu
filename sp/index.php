<!DOCTYPE html>
<html lang="ja">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=320px, user-scalable=no, initial-scale=1, maximum-scale=1" />
<meta name="description" content="">
<meta name="keywords" content="">
<title>遠鉄アシスト</title>
<link rel="stylesheet" href="css/style.css">

</head>
<body>
<div class="topFade">
<div class="topContainer">
    <div class="topBgTop">
    <img src="imgs/start_top.jpg" alt="background" width="100%"></div>
    <div class="topBgBtm">
    <img src="imgs/start_bottom.jpg" alt="background" width="100%"></div>
    <div class="topText"><img src="imgs/start_text.png" width="100%"></div>
</div>
</div>

<script type="text/javascript" src="js/jquery.js"></script>
<script type="text/javascript" src="js/jquery.easing.1.3.js"></script>

<!-- ファーストビュー用 -->
<script>
// フェードインで表示するコンテンツをdisplay:noneで非表示にする
$(window).load(function() {
  // フェードインidを指定と表示速度ミリ秒
  $('.topFade').fadeIn(500);
    $('.topFade').delay(2000).animate({"opacity": 0}, 700, function() {
      location.href = "top.php";
    });
});
</script>
<!-- ファーストビュー用 end -->

</body>
</html>
