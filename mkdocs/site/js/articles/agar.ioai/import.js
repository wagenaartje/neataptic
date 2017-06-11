var scripts = [
  { type: 'script', url: "https://cdn.rawgit.com/wagenaartje/neataptic/a7610e38/dist/neataptic.js"},
  { type: 'script', url: "https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.10/p5.js"},
  { type: 'script', url: "../../js/articles/agar.ioai/main.js"},
  { type: 'script', url: "../../js/articles/agar.ioai/population.js"},
  { type: 'script', url: "../../js/articles/agar.ioai/player.js"},
  { type: 'script', url: "../../js/articles/agar.ioai/food.js"},
  { type: 'script', url: "../../js/articles/agar.ioai/field.js"}
];

/** https://stackoverflow.com/questions/33330636/load-javascript-dynamically-and-sequentially **/
function require(list) {
  function loadScript(link) {
    return new Promise(function(fulfill, reject) {
      if(link.type == 'script'){
        var script = document.createElement("script");
        script.addEventListener("load", fulfill);
        script.src = link.url;
        document.head.appendChild(script);
      } else if(link.type == 'css'){
        var stylesheet  = document.createElement('link');
        stylesheet.rel  = 'stylesheet';
        stylesheet.type = 'text/css';
        stylesheet.href = link.url;
        stylesheet.media = "screen,print";
        document.head.appendChild(stylesheet);
      }
    });
  }
  loadScript(list.shift()).then(function() {
    if (list.length > 0) {
      require(list);
    }
  })
}

require(scripts);
