$(function(){
    $('.click').click(function(){
        $('.popup').fadeIn();//show();
    });
    $('.click2').click(function(){
        $('.popup2').fadeIn();//show();
    });
    $('.click3').click(function(){
        $('.popup3').fadeIn();//show();
    });

    $('.x_btn').click(function(){
        $('.popup, .popup2, .popup3').fadeOut();//hide();
    });
});


