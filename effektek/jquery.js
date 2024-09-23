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

    $(".sarga").click(function(){
        $(this).slideUp(1000).slideDown(1000);
    });

    $(".piros").click(function(){
        $(this).slideUp(1000).slideDown(1000);
    });

    $("[type=range]").change(function(){
        let r = $("[name=red]").val();
        let g = $("[name=green]").val(); 
        let b = $("[name=blue]").val();
        let rgb = `rgb(${r}, ${g}, ${b})`;
        $("span").text(rgb);
        $("span").css("background-color", rgb);
    });
});