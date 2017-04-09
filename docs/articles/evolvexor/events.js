$( document ).ready(function() {
  $( ".start" ).click(function() {
    $( ".start" ).html('<span class="glyphicon glyphicon-dashboard" aria-hidden="true"></span> Running...');
    newNeat();
    loop();
  });
});
