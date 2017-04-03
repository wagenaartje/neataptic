$( document ).ready(function() {
  $( ".start" ).click(function() {
    $( ".start" ).text('Running...');
    newNeat();
    loop();
  });
});
