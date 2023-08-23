$(function () {
	// alert('OK!');
	console.log("start");
	$(".l-headerButtonOpenbtn").click(function () {//ボタンがクリックされたら
		$(this).toggleClass('is-active');//ボタン自身に activeクラスを付与し
		$(".l-headerNav").toggleClass('is-panelactive');//ナビゲーションにpanelactiveクラスを付与
		$("body").toggleClass('fixed');//bodyにfixedクラスを付与
	});
});
