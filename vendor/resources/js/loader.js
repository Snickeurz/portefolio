// A $( document ).ready() block.
$( document ).ready(function() {
    $("#parallaxContent").addClass("hide");
    setTimeout(function(){
        $('#loader').addClass("hide");
    }, 3000);

    setTimeout(function(){
        $("#parallaxContent").removeClass("hide");
    }, 3000);
});