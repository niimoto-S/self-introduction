/**
 *
 */
'use strict';

//任意のタブにURLからリンクするための設定
function GethashID(hashIDName) {
	if (hashIDName) {
		//タブ設定
		$('.tab li').find('a').each(function() { //タブ内のaタグ全てを取得
			let idName = $(this).attr('href'); //タブ内のaタグのリンク名（例）#lunchの値を取得
			if (idName == hashIDName) { //リンク元の指定されたURLのハッシュタグ（例）http://example.com/#lunch←この#の値とタブ内のリンク名（例）#lunchが同じかをチェック
				let parentElm = $(this).parent(); //タブ内のaタグの親要素（li）を取得
				$('.tab li').removeClass("active"); //タブ内のliについているactiveクラスを取り除き
				$(parentElm).addClass("active"); //リンク元の指定されたURLのハッシュタグとタブ内のリンク名が同じであれば、liにactiveクラスを追加
				//表示させるエリア設定
				$(".area").removeClass("is-active"); //もともとついているis-activeクラスを取り除き
				$(hashIDName).addClass("is-active"); //表示させたいエリアのタブリンク名をクリックしたら、表示エリアにis-activeクラスを追加
			}
		});
	}
}

jQuery(function() {
  let appear = false;
  let pagetop = $('#page_top');
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      if (appear == false) {
        appear = true;
        pagetop.stop().animate({
          'right': '0px'
        }, 300);
      }
    } else {
      if (appear) {
        appear = false;
        pagetop.stop().animate({
          'right': '-50px'
        }, 300);
      }
    }
  });
  pagetop.click(function () {
    $('body, html').animate({ scrollTop: 0 }, 500);
    return false;
  });
});




//ここから消す
//テキストのカウントアップ+バーの設定

