// var header = document.getElementById('#header-laptop');
// var logo = document.getElementById('#nav-laptop-logo');
// var navi = document.getElementById('#nav-laptop-header')
// // $scrollTopDistance = window.scrollTop();
// var headerHeight = header.outerHeight(true);

// $(function() {
//     $(window).on('load scroll', function() {
//         　　　　//スクロール量を取得
//         var scrollPos = $(this).scrollTop()
//             // $scrollTopDistance = $(this).scrollTop();
//         　　　　//もしスクロール量がヘッダーの上回ったら
//             if(scrollPos > 100){
//         　　　　　　　　　//クラスを追加する
//         $('#header-laptop').addClass('is-scrolled');
//                 // logo.addClass('is-scrolled');
//                 // navi.addClass('is-scrolled');
//         　　　　//もしスクロール量がヘッダーの高さを下回ったら。
//             } else {
//         　　　　　　　　　//クラスを除去する
//         $('#header-laptop').removeClass('is-scrolled');
//                 // logo.removeClass('is-scrolled');
//                 // navi.removeClass('is-scrolled');
//             }
//         });
// });


// $(function() {
// 	$(window).on('load scroll', function() {
// 		var scrollPos = $(this).scrollTop();
// 		if ( scrollPos > 100 ) {
// 			header.addClass('is-scrolled');
// 		} else {
// 			header.removeClass('is-scrolled');
// 		}
// 	});
// });	

$(function() {
	$(window).on('load scroll', function() {
		var scrollPos = $(this).scrollTop();
		if ( scrollPos > 100 ) {
            $('header').addClass('is-scrolled');
            $('#nav-laptop-logo').addClass('is-scrolled-logo');
		} else {
            $('header').removeClass('is-scrolled');
            $('#nav-laptop-logo').removeClass('is-scrolled-logo');
		}
	});
});	