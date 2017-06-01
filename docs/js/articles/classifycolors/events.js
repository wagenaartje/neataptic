$('.colors').change(function(){
  var color = $(this).attr('value');
   if($(this).is(":checked")) {
     COLORS.push(color);
   } else {
     COLORS.splice(COLORS.indexOf(color), 1);
   }

   set = createSet();
   visualiseSet();
});
$('.start').click(function(e){
  e.preventDefault();
  if(running == false){
    running = true;
    iteration = 0;
    createNeat();
    $(this).html('<span class="glyphicon glyphicon-pause"></span> Stop evolution');
    setTimeout(loop, 1);
  } else {
    running = false;
    $(this).html('<span class="glyphicon glyphicon-play"></span> Start evolution');
  }
});
