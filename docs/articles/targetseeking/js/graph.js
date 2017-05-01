var colorTable = [
  '#2124FF', // input
  '#FF2718', // output
  '#1F22C1', // logistic sigmoid
  '#EE8A2A', // tanh
  '#B17516', // identity
  '#B1B0AA', // hlim
  '#2CB11F', // relu
  '#C5B12C', // softsign
  '#E685E7', // sinusoid
  '#257580', // gaussian
  '#B0484B', // softplus
  '#4CB148',  // bent_identity
  '#000000'  // GATE
];

var NODE_RADIUS = 7;
var REPEL_FORCE = 10;
var LINK_DISTANCE = 100;

var drawGraph = function(graph, panel, activation) {
  var d3cola = cola.d3adaptor()
        .avoidOverlaps(true)
        .size([$('.best').width(), $('.best').height()]);

    var svg = d3.select(panel);

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

    graph.nodes.forEach(function (v) { v.height = v.width = 2 * NODE_RADIUS; });

    d3cola
        .nodes(graph.nodes)
        .links(graph.links)
        .symmetricDiffLinkLengths(REPEL_FORCE)
        .linkDistance(LINK_DISTANCE)
        .start(10, 15, 20);

    var path = svg.selectAll(".link")
        .data(graph.links)
        .enter().append('svg:path')
        .attr('class', 'link')
        .style("stroke-width", function (d) {
          if(activation){
            return 1.5;
          } else {
            return 1.5 + Math.sqrt(d.weight * 5);
          }
          })
        .style("stroke", function (d) {
              if(activation){
                return activationColor(d.source.activation * d.weight, graph.main.maxActivation * graph.main.maxWeight);
              } else if(d.gate){
                if(d.source.activation){
                  return activationColor(d.source.activation, graph.main.maxActivation);
                } else{
                  return 'rgb(255,0,0)';
                }
              }
          });

    var node = svg.selectAll(".node")
        .data(graph.nodes)
        .enter().append("circle")
        .attr("class", "node")
        .attr("r", function(d) { return NODE_RADIUS; })
        .style("fill", function (d) {
              if(activation){
                return activationColor(d.activation, graph.main.maxActivation);
              } else {
                return colorTable[d.type];
              }

          })
        .call(d3cola.drag);

    node.append("title")
        .text(function (d) { return d.id; });

    var label = svg.selectAll(".label")
          .data(graph.nodes)
          .enter().append("text")
          .attr("class", "label")
          .text(function (d) { return '(' + d.index + ') ' + d.name; })
          .call(d3cola.drag)

    d3cola.on("tick", function () {
        // draw directed edges with proper padding from node centers
        path.attr('d', function (d) {
            var deltaX = d.target.x - d.source.x,
                deltaY = d.target.y - d.source.y,
                dist = Math.sqrt(deltaX * deltaX + deltaY * deltaY),
                normX = deltaX / dist,
                normY = deltaY / dist;

                if(isNaN(normX)) normX = 0;
                if(isNaN(normY)) normY = 0;

                sourcePadding = NODE_RADIUS,
                targetPadding = NODE_RADIUS + 2,
                sourceX = d.source.x + (sourcePadding * normX),
                sourceY = d.source.y + (sourcePadding * normY),
                targetX = d.target.x - (targetPadding * normX),
                targetY = d.target.y - (targetPadding * normY);

                // Defaults for normal edge.
                drx = 0,
                dry = 0,
                xRotation = 0, // degrees
                largeArc = 0, // 1 or 0
                sweep = 1; // 1 or 0

                // Self edge.
                if (d.source.x === d.target.x && d.source.y === d.target.y) {
                  drx = dist;
                  dry = dist;
                  // Fiddle with this angle to get loop oriented.
                  xRotation = -45;

                  // Needs to be 1.
                  largeArc = 1;

                  // Change sweep to change orientation of loop.
                  //sweep = 0;

                  // Make drx and dry different to get an ellipse
                  // instead of a circle.
                  drx = 20;
                  dry = 20;

                  // For whatever reason the arc collapses to a point if the beginning
                  // and ending points of the arc are the same, so kludge it.
                  targetX = targetX + 1;
                  targetY = targetY + 1;
                }
            return 'M' + sourceX + ',' + sourceY + "A" + drx + "," + dry + " " + xRotation + "," + largeArc + "," + sweep + " " + targetX + ',' + targetY;
        });

        node.attr("cx", function (d) { return d.x; })
            .attr("cy", function (d) { return d.y; })

        label
          .attr("x", function (d) { return d.x + 10; })
          .attr("y", function (d) { return d.y - 10; });
    });
};
