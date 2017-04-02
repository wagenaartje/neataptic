var names = [
  "input",
  "output",
  "sigmoid",
  "tanh",
  "identity",
  "hlim",
  "relu",
  "softsign",
  "sinusoid",
  "gaussian"
];

var colorTable = [
  '#2124FF', // input
  '#FF2718', // output
  '#1F22C1', // logistic sigmoid
  '#EE8A2A', // tanh
  '#B17516', // identity
  '#B1B0AA', // hlim
  '#2CB11F', // relu
  '#C5B12C', // softsign
  '#E685E7',  // sinusoid
  '#257580',  // gaussian
];

var width = 400;
var height = 400;
var nodeRadius = 7;
var repelForce = 10;

var d3cola1 = cola.d3adaptor()
      .avoidOverlaps(true)
      .size([$('.parent1').width(), $('.parent1').height()]);

var d3cola2 = cola.d3adaptor()
      .avoidOverlaps(true)
      .size([$('.parent2').width(), $('.parent2').height()]);

var d3cola3 = cola.d3adaptor()
      .avoidOverlaps(true)
      .size([$('.offspring').width(), $('.offspring').height()]);

var drawGraph = function(graph, panel) {
    svg = d3.select(panel);
    if(panel == ".parent1"){
      var d3cola = d3cola1;
    } else if(panel == ".parent2") {
      var d3cola = d3cola2;
    } else {
      var d3cola = d3cola3;
    }

    d3.selectAll(panel + "> *").remove();

    // define arrow markers for graph links
    svg.append('svg:defs').append('svg:marker')
        .attr('id', 'end-arrow')
        .attr('viewBox', '0 -5 10 10')
        .attr('refX', 6)
        .attr('markerWidth', 5)
        .attr('markerHeight', 5)
        .attr('orient', 'auto')
        .append('svg:path')
        .attr('d', 'M0,-5L10,0L0,5')
        .attr('fill', '#000');

    graph.nodes.forEach(function (v) { v.height = v.width = 2 * nodeRadius; });

    d3cola
        .nodes(graph.nodes)
        .links(graph.links)
        .constraints(graph.constraints)
        .symmetricDiffLinkLengths(repelForce)
        .linkDistance(50)
        .start(10, 15, 20);

    var path = svg.selectAll(".link")
        .data(graph.links)
        .enter().append('svg:path')
        .attr('class', 'link')
        .style("stroke-width", function (d) { return 1.5 + Math.sqrt(d.weight * 5); });

    var node = svg.selectAll(".node")
        .data(graph.nodes)
        .enter().append("circle")
        .attr("class", "node")
        .attr("r", function(d) { return nodeRadius; })
        .style("fill", function (d) {
              return colorTable[d.type];
          })
        .call(d3cola.drag);

    node.append("title")
        .text(function (d) { return d.id; });

    var label = svg.selectAll(".label")
          .data(graph.nodes)
          .enter().append("text")
          .attr("class", "label")
          .text(function (d) { return "(" + d.id + ") " + names[d.type]; })
          .call(d3cola.drag)

    d3cola.on("tick", function () {
        // draw directed edges with proper padding from node centers
        path.attr('d', function (d) {
            var deltaX = d.target.x - d.source.x,
                deltaY = d.target.y - d.source.y,
                dist = Math.sqrt(deltaX * deltaX + deltaY * deltaY),
                normX = deltaX / dist,
                normY = deltaY / dist,
                sourcePadding = nodeRadius,
                targetPadding = nodeRadius + 2,
                sourceX = d.source.x + (sourcePadding * normX),
                sourceY = d.source.y + (sourcePadding * normY),
                targetX = d.target.x - (targetPadding * normX),
                targetY = d.target.y - (targetPadding * normY);
            return 'M' + sourceX + ',' + sourceY + 'L' + targetX + ',' + targetY;
        });

        node.attr("cx", function (d) { return d.x; })
            .attr("cy", function (d) { return d.y; });

        label
          .attr("x", function (d) { return d.x + 10; })
          .attr("y", function (d) { return d.y - 10; });
    });
};


$( document ).ready(function() {
  $( ".addnode" ).click(function() {
    if($(this).data('parent') == '1'){
      parent1.mutate(Methods.Mutation.ADD_NODE);
    } else {
      parent2.mutate(Methods.Mutation.ADD_NODE);
    }

    refresh($(this).data('parent'));
  });
  $( ".subnode" ).click(function() {
    if($(this).data('parent') == '1'){
      parent1.mutate(Methods.Mutation.REMOVE_NODE);
    } else {
      parent2.mutate(Methods.Mutation.REMOVE_NODE);
    }

    refresh($(this).data('parent'));
  });

  $( ".addconn" ).click(function() {
    if($(this).data('parent') == '1'){
      parent1.mutate(Methods.Mutation.ADD_CONN);
    } else {
      parent2.mutate(Methods.Mutation.ADD_CONN);
    }

    refresh($(this).data('parent'));
  });


  $( ".crossover" ).click(function() {
    parent1.score = 1;
    if($("#p1").is(":checked")){
      parent2.score = 0;
    } else if($("#p2").is(":checked")){
      parent2.score = 2;
    } else {
      parent2.score = 1;
    }
    offspring = Network.crossOver(parent1, parent2, 'some method');

    drawGraph(
      offspring.graph($('.offspring').width(), $('.offspring').height()),
      '.offspring'
    );
  });
});

function refresh(panel){
  if(panel == '1'){
    drawGraph(
      parent1.graph($('.parent1').width(), $('.parent1').height()),
      ".parent1"
    );
  } else {
    drawGraph(
      parent2.graph($('.parent2').width(), $('.parent2').height()),
      ".parent2"
    );
  }
}
