$(document).ready(function(){
    $('.menu-toggle').click(function(){
        $('nav').toggleClass('active')
         
    })
})
$(document).ready(function(){
    $(' .li').click(function(){
        $('nav').toggleClass('active')
         
    })
})
 
     

 
jQuery(function ($) {

    'use strict';

    



    // ------------------------------------------------------------------
    // sticky menu
    // ------------------------------------------------------------------
 




    // -------------------------------------------------------------
    // mobile menu
    // -------------------------------------------------------------
     

    // ------------------------------------------------------------------
    // jQuery for back to Top
    // ------------------------------------------------------------------
    (function(){

          $('body').append('<div id="toTop"><i class="fa fa-angle-up"></i></div>');

            $(window).scroll(function () {
                if ($(this).scrollTop() != 0) {
                    $('#toTop').fadeIn();
                } else {
                    $('#toTop').fadeOut();
                }
            }); 

        $('#toTop').on('click',function(){
            $("html, body").animate({ scrollTop: 0 }, 600);
            return false;
        });

    }());


   


}); // JQuery end