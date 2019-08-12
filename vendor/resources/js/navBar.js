$( document ).ready(function() {

    // if in guard page
   if ($(location).attr('pathname') === "/moi/") {
       $("#navigationBar").addClass("collapse");
   }
});


// Scrolling Effect

$(window).on("scroll", function() {
    if($(window).scrollTop())
    {
        $('nav').addClass('black');
    }
    else
    {
        $('nav').removeClass('black');
    }
});