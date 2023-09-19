$(function () {
	// alert('OK!');
	console.log("start");
	$(".js-button").click(function () {//ボタンがクリックされたら
		$(this).toggleClass('is-active');//ボタン自身に activeクラスを付与し
		$(".l-headerNav").toggleClass('is-panelactive');//ナビゲーションにpanelactiveクラスを付与
		$("body").toggleClass('fixed');//bodyにfixedクラスを付与
		$(".l-header").toggleClass('bgcolor');
	});

	var beforePos = 0;//スクロールの値の比較用の設定

//２→（１でスクロールすると呼び出される）スクロール途中でヘッダーが消え、上にスクロールすると復活する設定を関数にまとめる
function ScrollAnime() {
	//console.log("1");
    var elemTop = $('.l-contents').offset().top;//.l-contentsのスクロール位置を取得する
	// ① 
		console.log(elemTop);
	var scroll = $(window).scrollTop();
	// ②
	console.log('これはスクロールの値',scroll);
	// ③
    //ヘッダーの出し入れをする（画面のスクロール位置を取得する）
		console.log('beforePosの値',beforePos)
// ３→現在のスクロール値がl-contentsのスクロール値より大きいと？（分岐点）
if(elemTop < scroll){
// (elemTop > scroll || 0 > scrollPos)→これは、elemTop（固定値202）よりスクロール値が小さいかゼロより小さいときという意味
// ↑上の式だと下の分岐点にはどちらも当てはまらない×ので、結果は何も起こらない・・・
			// console.log("5");
		//4（大きい）→ヘッダーが上に消えて、見えなくなる
		$('.js-headerTop').removeClass('is-downMove');//.js-headerTopにis-downMoveというクラス名を除き(下に下がる動き)
		// console.log("8");
		$('.js-headerTop').addClass('is-upMove');//.js-headerTopに.is-upMove.opacityのクラス名を追加(上に上がる動き)
// console.log("9");
    }else {
		// 4（小さい）→（下にスクロールすると、）ヘッダーが上から出現する
		$('.js-headerTop').removeClass('is-upMove');	//.js-headerTopにis-upMoveというクラス名を除き
		// console.log("6");
		$('.js-headerTop').addClass('is-downMove');//.js-headerTopに.is-downMove.opacityのクラス名を追加
		// console.log("7");
    }
    beforePos = scroll;//５→現在のスクロール値として、比較用のbeforePosに格納される（１へ戻り、繰り返し）
}

// 1→マウスを1回スクロールすると、2の関数を呼び出す（）
$(window).scroll(function () {
	ScrollAnime();
});

// スライドさせる
function checkBreakPoint() {
	w = $(window).width();
	if (w <= 896) {
		// タブレット・スマホ向け（767px以下のとき）
		$('.js-slick').not('.slick-initialized').slick({
			//スライドさせる
			dots: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: true,
			autoplay: false,
			autoplaySpeed: 6000,
			adaptiveHeight: false,
		});
	} else {
		// PC向け
		$('.js-slick.slick-initialized').slick('unslick');
	}
}
// ウインドウがリサイズする度にチェック
$(window).resize(function(){
	checkBreakPoint();
});
// 初回チェック
checkBreakPoint();

});
