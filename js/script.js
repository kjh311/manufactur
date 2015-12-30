$( document ).ready(function() {

  $( "#ben" ).mouseover(function() {
    $( "#benText" ).animate({
          'marginTop' : "-=100px",
          }, 400, function() {});
    $( "#benAppearingText" ).fadeTo( 1000 , 1, function() {});
    $( "#benText" ).addClass( "textOver" );
    $( "#keynote").addClass( "marginTop");
    $( "#hillary").addClass( "marginTop");
    $( "#mic").addClass( "marginTop");
    $( "#tony").addClass( "marginTop");
  });
  $( "#ben" ).mouseout(function() {
    $( "#benText" ).animate({
          'marginTop' : "+=100px"
          }, 400, function() {});
    $( "#benAppearingText" ).fadeTo( "fast" , 0, function() {});
    $( "#keynote").removeClass( "marginTop");
    $( "#hillary").removeClass( "marginTop");
    $( "#mic").removeClass( "marginTop");
    $( "#tony").removeClass( "marginTop");

    function removeText(){
    $( "#benText" ).removeClass( "textOver" );
    }
    setTimeout(removeText, 500);
  });


  $( "#chuck" ).mouseover(function() {
    $( "#chuckText" ).animate({
          'marginTop' : "-=70px",
          }, 400, function() {});
    $( "#chuckAppearingText" ).fadeTo( 1000 , 1, function() {});
    $( "#chuckText" ).addClass( "textOver" );
    $( "#davina").addClass( "chuckMargin");
  });
  $( "#chuck" ).mouseout(function() {
    $( "#chuckText" ).animate({
          'marginTop' : "+=70px"
          }, 400, function() {});
    $( "#chuckAppearingText" ).fadeTo( "fast" , 0, function() {});
    $( "#davina").removeClass( "chuckMargin");
    function removeText(){
    $( "#chuckText" ).removeClass( "textOver" );
    }
    setTimeout(removeText, 500);
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
    function removeText(){
    $( "#davinaText" ).removeClass( "textOver" );
    }
    setTimeout(removeText, 500);
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
    function removeText(){
    $( "#hillaryText" ).removeClass( "textOver" );
    }
    setTimeout(removeText, 500);
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
    function removeText(){
    $( "#keynoteText" ).removeClass( "textOver" );
    }
    setTimeout(removeText, 500);
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
    function removeText(){
    $( "#micText" ).removeClass( "textOver" );
    }
    setTimeout(removeText, 500);
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
    function removeText(){
    $( "#tonyText" ).removeClass( "textOver" );
    }
    setTimeout(removeText, 500);
  });


});
