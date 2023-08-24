$(function () {
	// alert('OK!');
	console.log("start");
	$(".l-headerButtonOpenbtn").click(function () {//ボタンがクリックされたら
		$(this).toggleClass('is-active');//ボタン自身に activeクラスを付与し
		$(".l-headerNav").toggleClass('is-panelactive');//ナビゲーションにpanelactiveクラスを付与
		$("body").toggleClass('fixed');//bodyにfixedクラスを付与
	});

	var beforePos = 0;//スクロールの値の比較用の設定

//２→（１でスクロールすると呼び出される）スクロール途中でヘッダーが消え、上にスクロールすると復活する設定を関数にまとめる
function ScrollAnime() {
	//console.log("1");
    var elemTop = $('.l-contents').offset().top;//.l-contentsのスクロール位置を取得する
		 console.log(elemTop);
	var scroll = $(window).scrollTop();
	console.log('これはスクロールの値',scroll);
    //ヘッダーの出し入れをする（画面のスクロール位置を取得する）
		console.log('beforePosの値',beforePos)
// ３→現在のスクロール値がl-contentsのスクロール値より大きいと？（分岐点）
if(elemTop > scroll || 0 > scrollPos){
			// console.log("5");
		//ヘッダーが上から出現する
		$('.l-headerTopJs').removeClass('.UpMove');	//.l-headerTopJsにUpMoveというクラス名を除き
		// console.log("6");
		$('.l-headerTopJs').addClass('.DownMove');//.l-headerTopJsにDownMoveのクラス名を追加
		// console.log("7");
    }else {
		//ヘッダーが上に消える
        $('.l-headerTopJs').removeClass('.DownMove');//.l-headerTopJsにDownMoveというクラス名を除き(下に下がる動き)
				// console.log("8");
		$('.l-headerTopJs').addClass('.UpMove');//.l-headerTopJsにUpMoveのクラス名を追加(上に上がる動き)
		// console.log("9");
    }
    
    beforePos = scroll;//現在のスクロール値を比較用のbeforePosに格納
}


// 1→マウスを1回スクロールすると、2の関数を呼び出す（）
$(window).scroll(function () {
	ScrollAnime();
});
});
