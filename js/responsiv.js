$(function (){
    if($(window).width() <= 950){
        $('body > header .nav_bar').hide();
        lst_nav_bar_item = $('body > header .nav_bar').eq(0).find('.nav_item');
        $('body > header .nav_bar').eq(1).append(lst_nav_bar_item);
        $('body > header').append($('body > header .nav_bar').eq(1));
    }
    isNavBarHidden = true;
    $('#menu_icon').click(function (){
        if(isNavBarHidden){
            $('body > header .nav_bar').show();
            isNavBarHidden = false;
        }
        else{
            $('body > header .nav_bar').hide();
            isNavBarHidden = true;
        }
    });
});