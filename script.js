/* アコーディオンメニュー */
$(function(){
    //if(window.matchMedia('(min-width: 1200px)').matches) {
    $('.menu-title').hover(function(){
        $(this).children('.sub-menu').stop().slideToggle();
    });
    //};
});

$(function(){
    $('.burger').click(function(){
        $('.Nav__body ul .menu-title').slideToggle();
        $('.burger').toggleClass('close');
    });
    $('.Nav__body ul li.close').hover(function(){
        $(this).toggleClass('add');
    });
});

/*コード見本
$(function(){
    $(".Nav__body .menu > .menu-item .sub-menu").on("click", function(){
        $(this).next().slideToggle();//①メニュータイトルをクリックしたら中身が表示非表示
        $(this).toggleClass("open");//②クリックしたらプラスマークをマイナスにする
    })
});
*/