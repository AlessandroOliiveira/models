$(document).ready(function () {
    $(window).scroll(function () {
        if (this.scrollY > 20)
            $(".navbar").addClass("sticky");
        else
            $(".navbar").removeClass("sticky");

    });
    $('.MudarMenu').click(function(){
    $(this).toggleClass ("pressionar");
    $(".menu").toggleClass("pressionar");
     
    });
});