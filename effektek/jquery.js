const { speed } = require("jquery");

$(document).ready(function(){});
$(function(){
    let r = 128;
    let g = 128;
    let b = 128;

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
        console.log($("[name=red]").val());
        let element = $(this);
        switch (element.attr("name")) {
            case "red":
                r = element.val();
            case "green":
                g = element.val();
            case "blue":
                b = element.val();
        }
        $("span").text(`rgb(${r}, ${g}, ${b})`)
    
    
    });
    
});