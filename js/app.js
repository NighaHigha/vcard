$(document).ready(function () {
    (function(){
        var $links = $('.js_inner-link');
        var $body = $('body');

        $links.click(function(e){
            e.preventDefault();
            var $link = $(this);

            $body.fadeOut(300, function () {
                window.location.href = $link.attr('href');
            });

        });
    })();
    
    (function(){
        $(document).ready(function(){
            $('.js_smoothscrolling').click(function(e){
                e.preventDefault();
                
                var href = $(this).attr('href');
                
                $('html, body').animate({
                    scrollTop: $(href).offset().top
                }, 500, 'linear');
            });
        });
    })();
    
    
    (function(){
        var $intro = $('.overlay_border');
        var $menu_button = $('.menu');
        var intro_height = $intro.height();
    
        $menu_button.click(function (e) {
            e.preventDefault();

            $('body').toggleClass('nav_openned');
        });
        $('nav a').click(function() {
            $('body').removeClass('nav_openned');
        });
        
        
        $(window).scroll(function(e){
            e.preventDefault();

            var scrollTop = $(this).scrollTop();

            if(scrollTop > intro_height){
                $menu_button.addClass('menu--highlight');
            }else{
                $menu_button.removeClass('menu--highlight');
            }
        });
    })();
    
    $('a[href^="#"]').click(function(){
        var theId = $(this).attr("href");

        $('html, body').animate({
            scrollTop:$(theId).offset().top
        }, 'slow');
        return false;
    });
});

    