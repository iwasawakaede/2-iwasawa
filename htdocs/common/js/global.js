$(function () {
	alert('OK!');
	console.log("start");
	$(".l-headerButtonOpenbtn").click(function () {//ボタンがクリックされたら
		$(this).toggleClass('active');//ボタン自身に activeクラスを付与し
		$(".l-headerBlock").toggleClass('panelactive');//ナビゲーションにpanelactiveクラスを付与
	});
});
