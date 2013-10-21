/*
 * Plot a histogram of category counts.
 */
function plot(data, dimensions) {
  /* accessors */
  function category(d) { return d.category; }
  function count(d) { return d.count; }

  /* comparators */
  function category_order(a, b) {
    if(a.category > b.category) return 1;
    else if(a.category < b.category) return -1;
    return 0;
  }
  
  data = data.sort(category_order);

  /* d3 "Conventional Margins": http://bl.ocks.org/mbostock/3019563 */
  var margin = {top:20, right:10, bottom:20, left:60};
  var width = dimensions.width - margin.left - margin.right,
      height = dimensions.height - margin.top - margin.bottom;
  var svg = d3.select("body").append("svg")
      .attr("class", "plot")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
    .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  /*
   * Set up scales for the X and Y axes.
   */
  var x = d3.scale.linear()
          .domain([0, 100])
          .rangeRound([0, width]),
      y = d3.scale.ordinal()
          .domain(data.map(category))
          .rangeRoundBands([0, height], .1);

  /*
   * Set up SVG axes for the plot.
   */
  var xAxis = d3.svg.axis().scale(x),
      yAxis = d3.svg.axis().scale(y).orient('left');

  /*
   * Draw the axes.
   */
  svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0,"+height+")")
      .call(xAxis);
  svg.append("g")
      .attr("class", "y axis")
      .call(yAxis);

  /*
   * Bind data to plot element, and for each unrepresented datum, draw a
   * 10px tall left-aligned rectangle whose width in pixels matches its
   * category's count. Space each rectangle 20px down the page.
   */
  svg.selectAll(".category")
      .data(data)
    .enter().append("rect")
      .attr("class", "category")
      .attr("x", 0)
      .attr("width", function(d) { return x(d.count); })
      .attr("y", function(d) { return y(d.category); })
      .attr("height", y.rangeBand())
    .append("title")
      .text(category);
}
