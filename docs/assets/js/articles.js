Number.prototype.mod = function(n) {
    return ((this%n)+n)%n;
};

var articles = [
  {
    name: 'Target-seeking AI',
    icon: 'bullseye',
    date: 'MAY 1, 2017',
    author: 'Thomas Wagenaar',
    class: 'targetseeking',
    location: 'targetseeking',
  },
  {
    name: 'Agario AI',
    icon: 'codiepie',
    date: 'APRIL 26, 2017',
    author: 'Thomas Wagenaar',
    class: 'agario',
    location: 'agario'
  },
  {
    name: 'Clasiffiy colors',
    icon: 'eercast',
    date: 'APRIL 9, 2017',
    author: 'Thomas Wagenaar',
    class: 'classifycolors',
    location: 'classifycolors'
  },
  {
    name: 'Crossover sandbox',
    icon: 'venus-mars',
    date: 'APRIL 4, 2017',
    author: 'Thomas Wagenaar',
    class: 'crossover',
    location: 'crossover'
  },
  {
    name: 'XOR evolution',
    icon: 'object-group',
    date: 'APRIL 4, 2017',
    author: 'Thomas Wagenaar',
    class: 'xorevolution',
    location: 'evolvexor'
  },
];

var start = 3;

$( window ).resize(function() {
  drawArticles();
});

$( document ).ready(function() {
  drawArticles();

  $('.lefts').click(function(event){
    event.preventDefault();
    start -= 1;
    drawArticles();
  });

  $('.rights').click(function(event){
    event.preventDefault();
    start += 1;
    drawArticles();
  });
});




function drawArticles(){
  $('.articles').html('');

  var width = $('.articles').width();
  var possible = width - 20 * 2; // padding
  possible = width / (215 + 80); // width + margin-left
  possible = Math.floor(possible);

  var welcome = $('.mainsvg').length ? './articles/': '../';

  for(var i = 0; i < Math.min(possible, articles.length); i++){
    var article = articles[(start + i).mod(articles.length)];
    $('.articles').append(
      `<a class="card ${article.class}" href="${welcome}${article.location}">
        <p class="card-title">${article.name}</p>
        <p class="card-icon"><i class="fa fa-${article.icon} fa-5x"></i></p>
        <p class="card-date">${article.date}</p>
        <p class="card-author">by ${article.author}</p>
      </a>`
    );
  }

}
