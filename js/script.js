$( document ).ready(function() {

$( "#ben" ).mouseover(function() {
  $( "#benText" ).animate({
        'marginTop' : "-=70px"
        });
});

$( "#ben" ).mouseout(function() {
  $( "#benText" ).animate({
        'marginTop' : "+=70px"
        }, "fast");
});



});
