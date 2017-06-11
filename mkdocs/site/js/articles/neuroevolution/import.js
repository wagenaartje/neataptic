var scripts = [
  { type: 'script', url: "https://wagenaartje.github.io/neataptic/cdn/1.2.22/neataptic.js"},
  { type: 'script', url: "https://cdnjs.cloudflare.com/ajax/libs/d3/3.0.0/d3.js"},
  { type: 'script', url: "../../js/articles/neuroevolution/webcola.js"},
  { type: 'script', url: "../../js/articles/neuroevolution/events.js"},
  { type: 'script', url: "../../js/articles/neuroevolution/graph.js"},
  { type: 'script', url: "../../js/articles/neuroevolution/neural.js"},
  { type: 'css',    url: "../../js/articles/neuroevolution/graph.css"}
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
        stylesheet.addEventListener("load", fulfill);
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
