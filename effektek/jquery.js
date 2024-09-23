$(document).ready(function(){});
$(function(){
    $(".piros").on("click", function(){
        $(this).hide(1000);
    });

    $(".sarga").dblclick(function(){
        $(this).fadeOut(1000).fadeIn(3000);
    });

    $("button").click(function(){
        $("div").show(1000);
    });
});