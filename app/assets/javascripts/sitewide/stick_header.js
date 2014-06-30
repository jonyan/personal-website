// $(function(){
//     // Check the initial Position of the Sticky Header
//     var stickyHeaderTop = ($('#left_bar').offset().top);
//     $('#left_bar').css({position: 'static', "margin-top": '6%'});
//     var documentHeight = ($( document ).height());
//     var SCROLL_FACTOR = "93%";
   
//     $( window ).scroll(function(){
//         if( $( window ).scrollTop() > .93 * documentHeight ) {
//             $('#left_bar').css({position: 'absolute', "margin-top": SCROLL_FACTOR});
//         } else if( $( window ).scrollTop() > stickyHeaderTop ) {
//             $('#left_bar').css({position: 'fixed', top: '0px', "margin-top": '6%'});
//         } else {
//             $('#left_bar').css({position: 'static', "margin-top": '6%'});
//         }
       
//     });
// });

$(function(){
    // Check the initial Position of the Sticky Header
    var stickyHeaderTop_nav_bar = ($('#nav_bar').offset().top) - 15;
    $('#nav_bar').css({position: 'static'});
    var documentHeight_nav_bar = ($(document).height());
    var SCROLL_FACTOR_nav_bar = "93%";

    $( window ).scroll(function(){
        if($(window).scrollTop() > .93 * documentHeight_nav_bar) {
            $('#nav_bar').css({position: 'absolute', "margin-top": SCROLL_FACTOR_nav_bar});
        } else if( $( window ).scrollTop() > stickyHeaderTop_nav_bar ) {
            $('#nav_bar').css({position: 'fixed', top: '15px'});
        } else {
            $('#nav_bar').css({position: 'static'});
        }
       
    });
});

