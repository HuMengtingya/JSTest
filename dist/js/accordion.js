$(function () {
    $(".txts").mouseover(function () {
        $(this).parent().stop(true,true).animate({"width":"780px"}).siblings().stop(true,true).animate({"width":"100px"})
    });
});