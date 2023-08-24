$(function () {
	// alert('OK!');
	console.log("start");
	$(".l-headerButtonOpenbtn").click(function () {//ボタンがクリックされたら
		$(this).toggleClass('is-active');//ボタン自身に activeクラスを付与し
		$(".l-headerNav").toggleClass('is-panelactive');//ナビゲーションにpanelactiveクラスを付与
		$("body").toggleClass('fixed');//bodyにfixedクラスを付与
	});

	var beforePos = 0;//スクロールの値の比較用の設定

//スクロール途中でヘッダーが消え、上にスクロールすると復活する設定を関数にまとめる
function ScrollAnime() {
	console.log("1");
    var elemTop = $('.l-contents').offset().top;//.l-contentsSampleの垂直（縦）位置を取得したら
		console.log("2");
	var scroll = $(window).scrollTop();
	console.log("3");
    //ヘッダーの出し入れをする（画面のスクロール位置を取得する）
    if(scroll == beforePos) {
			console.log("4");
		//IE11対策で処理を入れない
    }else if(elemTop > scroll || 0 > scroll - beforePos){
			console.log("5");
		//ヘッダーが上から出現する
		$('.l-headerTopJs').removeClass('.UpMove');	//.l-headerTopJsにUpMoveというクラス名を除き
		console.log("6");
		$('.l-headerTopJs').addClass('.DownMove');//.l-headerTopJsにDownMoveのクラス名を追加
		console.log("7");
    }else {
		//ヘッダーが上に消える
        $('.l-headerTopJs').removeClass('.DownMove');//.l-headerTopJsにDownMoveというクラス名を除き(下に下がる動き)
				console.log("8");
		$('.l-headerTopJs').addClass('.UpMove');//.l-headerTopJsにUpMoveのクラス名を追加(上に上がる動き)
		console.log("9");
    }
    
    beforePos = scroll;//現在のスクロール値を比較用のbeforePosに格納
}


// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
	ScrollAnime();//スクロール途中でヘッダーが消え、上にスクロールすると復活する関数を呼ぶ
});
});
