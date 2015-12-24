$( document ).ready(function() {

  $( "#ben" ).mouseover(function() {
    $( "#benText" ).animate({
          'marginTop' : "-=100px",
          }, 400, function() {});
    $( "#benAppearingText" ).fadeTo( 1000 , 1, function() {});
    $( "#benText" ).addClass( "textOver" );
  });
  $( "#ben" ).mouseout(function() {
    $( "#benText" ).animate({
          'marginTop' : "+=100px"
          }, 400, function() {});
    $( "#benAppearingText" ).fadeTo( "fast" , 0, function() {});
    $( "#benText" ).removeClass( "textOver" );
  });

  $( "#chuck" ).mouseover(function() {
    $( "#chuckText" ).animate({
          'marginTop' : "-=70px",
          }, 400, function() {});
    $( "#chuckAppearingText" ).fadeTo( 1000 , 1, function() {});
    $( "#chuckText" ).addClass( "textOver" );
  });
  $( "#chuck" ).mouseout(function() {
    $( "#chuckText" ).animate({
          'marginTop' : "+=70px"
          }, 400, function() {});
    $( "#chuckAppearingText" ).fadeTo( "fast" , 0, function() {});
    $( "#chuckText" ).removeClass( "textOver" );
  });

  $( "#davina" ).mouseover(function() {
    $( "#davinaText" ).animate({
          'marginTop' : "-=70px",
          }, 400, function() {});
    $( "#davinaAppearingText" ).fadeTo( 1000 , 1, function() {});
    $( "#davinaText" ).addClass( "textOver" );
  });
  $( "#davina" ).mouseout(function() {
    $( "#davinaText" ).animate({
          'marginTop' : "+=70px"
          }, 400, function() {});
    $( "#davinaAppearingText" ).fadeTo( "fast" , 0, function() {});
    $( "#davinaText" ).removeClass( "textOver" );
  });

  $( "#hillary" ).mouseover(function() {
    $( "#hillaryText" ).animate({
          'marginTop' : "-=40px",
          }, 400, function() {});
    $( "#hillaryAppearingText" ).fadeTo( 1000 , 1, function() {});
    $( "#hillaryText" ).addClass( "textOver" );
  });
  $( "#hillary" ).mouseout(function() {
    $( "#hillaryText" ).animate({
          'marginTop' : "+=40px"
          }, 400, function() {});
    $( "#hillaryAppearingText" ).fadeTo( "fast" , 0, function() {});
    $( "#hillaryText" ).removeClass( "textOver" );
  });

  $( "#keynote" ).mouseover(function() {
    $( "#keynoteText" ).animate({
          'marginTop' : "-=30px",
          }, 400, function() {});
    $( "#keynoteAppearingText" ).fadeTo( 1000 , 1, function() {});
    $( "#keynoteText" ).addClass( "textOver" );
  });
  $( "#keynote" ).mouseout(function() {
    $( "#keynoteText" ).animate({
          'marginTop' : "+=30px"
          }, 400, function() {});
    $( "#keynoteAppearingText" ).fadeTo( "fast" , 0, function() {});
    $( "#keynoteText" ).removeClass( "textOver" );
  });

  $( "#mic" ).mouseover(function() {
    $( "#micText" ).animate({
          'marginTop' : "-=60px",
          }, 400, function() {});
    $( "#micAppearingText" ).fadeTo( 1000 , 1, function() {});
    $( "#micText" ).addClass( "textOver" );
  });
  $( "#mic" ).mouseout(function() {
    $( "#micText" ).animate({
          'marginTop' : "+=60px"
          }, 400, function() {});
    $( "#micAppearingText" ).fadeTo( "fast" , 0, function() {});
    $( "#micText" ).removeClass( "textOver" );
  });

  $( "#tony" ).mouseover(function() {
    $( "#tonyText" ).animate({
          'marginTop' : "-=30px",
          }, 400, function() {});
    $( "#tonyAppearingText" ).fadeTo( 1000 , 1, function() {});
    $( "#tonyText" ).addClass( "textOver" );
  });
  $( "#tony" ).mouseout(function() {
    $( "#tonyText" ).animate({
          'marginTop' : "+=30px"
          }, 400, function() {});
    $( "#tonyAppearingText" ).fadeTo( "fast" , 0, function() {});
    $( "#tonyText" ).removeClass( "textOver" );
  });


});
