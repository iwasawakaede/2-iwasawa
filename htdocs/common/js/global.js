$(function () {
	$(".js-button").click(function () {
		$(this).toggleClass('is-active');
		$(".l-headerNav").toggleClass('is-panelactive');
		$("body").toggleClass('is-fixed');
		$(".l-header").toggleClass('bgcolor');
	});
	var beforePos = 0;
function ScrollAnime() {
	var elemTop = $('.l-contents').offset().top;
	var scroll = $(window).scrollTop();

if(elemTop < scroll){
	$('.js-headerTop').removeClass('is-downMove');
	$('.js-headerTop').addClass('is-upMove');
	$('.js-updown').addClass('is-upMove');
	$('.js-updown').removeClass('is-downMove');
	}else {
	$('.js-headerTop').removeClass('is-upMove');
	$('.js-headerTop').addClass('is-downMove');
	$('.js-updown').removeClass('is-upMove');
	$('.js-updown').addClass('is-downMove');
		}
		beforePos = scroll;
}
$(window).scroll(function () {
	ScrollAnime();
});
function checkBreakPoint() {
	w = $(window).width();
	if (w <= 896) {
		$('.js-slick').not('.slick-initialized').slick({
			dots: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: true,
			autoplay: false,
			autoplaySpeed: 6000,
			adaptiveHeight: false,
		});
	} else {
		$('.js-slick.slick-initialized').slick('unslick');
	}
}
$(window).resize(function(){
	checkBreakPoint();
});
	checkBreakPoint();
		$('.js-syousai').click(function () {
			var findElm = $(this).next(".js-accordion");
			console.log(findElm);
			$(findElm).slideToggle();
			if ($(this).hasClass('close')) {
				console.log('1');
				$(this).removeClass('close');
				$(this).find('.js-title').removeClass('show');
			} else {
				$(this).addClass('close');
				$(this).find('.js-title').addClass('show');
				console.log('3');
			}
		});
$('input').on('change', function () {
	var file = $(this).prop('files')[0];
	$('.select-image').text(file.name);
});
const modal = $(".js-modal");
const overlay = $(".js-overlay");
const close = $(".js-close");
const open = $(".js-open");
	open.on('click', function () {
	modal.addClass("open");
	overlay.addClass("open");
});
close.on('click', function () {
	modal.removeClass("open");
	overlay.removeClass("open");
});
});
