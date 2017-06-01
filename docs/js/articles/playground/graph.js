var NODE_RADIUS = 7;
var GATE_RADIUS = 2;
var REPEL_FORCE = 0;
var LINK_DISTANCE = 100;

var WIDTH = 500;
var HEIGHT = 600;

var d3cola = cola.d3adaptor()
      .avoidOverlaps(true)
      .size([WIDTH, HEIGHT]);

var drawGraph = function(graph, panel) {
    var svg = d3.select(panel);

    d3.selectAll(panel + "> *").remove();

    // define arrow markers for graph links
    svg.append('svg:defs').append('svg:marker')
        .attr('id', 'end-arrow')
        .attr('viewBox', '0 -5 10 10')
        .attr('refX', 6)
        .attr('markerWidth', 4)
        .attr('markerHeight', 4)
        .attr('orient', 'auto')
        .append('svg:path')
        .attr('d', 'M0,-5L10,0L0,5')

    graph.nodes.forEach(function(v){
      v.height = v.width = 2 * (v.name == 'GATE' ? GATE_RADIUS : NODE_RADIUS); }
    );

    d3cola
        .nodes(graph.nodes)
        .links(graph.links)
        .constraints(graph.constraints)
        .symmetricDiffLinkLengths(REPEL_FORCE)
        .linkDistance(LINK_DISTANCE)
        .start(10, 15, 20);

    var path = svg.selectAll(".link")
        .data(graph.links)
        .enter().append('svg:path')
        .attr('class', 'link')

    path.append("title")
      .text(function (d) {
        var text = "";
        text += "Weight: " + Math.round(d.weight*1000)/1000 + "\n";;
        text += "Source: " + d.source.id + "\n";;
        text += "Target: " + d.target.id;
        return text;
      });

    var node = svg.selectAll(".node")
        .data(graph.nodes)
        .enter().append("circle")
        .attr("class", function(d){
          return "node " + d.name;
        })
        .attr("r", function(d) { return d.name == 'GATE' ? GATE_RADIUS : NODE_RADIUS; })

        .call(d3cola.drag);

    node.append("title")
        .text(function (d){
           var text = "";
           text += "Activation: " + Math.round(d.activation*1000)/1000 + "\n";
           text += "Bias: " + Math.round(d.bias*1000)/1000 + "\n";
           text += "Position: " + d.id;
           return text;
         });

    var label = svg.selectAll(".label")
          .data(graph.nodes)
          .enter().append("text")
          .attr("class", "label")
          .text(function (d){return '(' + d.index + ') ' + d.name; })
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

                sourcePadding = d.source.width / 2,
                targetPadding = d.target.width / 2 + 2,
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
                  xRotation = -45;
                  largeArc = 1;
                  drx = 20;
                  dry = 20;
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
