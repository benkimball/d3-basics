/* Generate arbitrary counts for each of eight Tumblr post types */
var category_names = [
  "video", "link", "photo", "audio", "chat", "quote", "answer", "text"
]; 
var data = rnd_hist(category_names);

var width = 600,
    height = 300;

/*
 * Set up scales for the X and Y axes.
 */
var x = d3.scale.linear()
        .domain([0, 99])
        .rangeRound([0, width]),
    y = d3.scale.ordinal()
        .domain(category_names)
        .rangeRoundBands([0, height], .1);

/* Create SVG element */
var svg = d3.select("body").append("svg")
    .attr("class", "plot")
    .attr("width", width)
    .attr("height", height);

/*
 * Bind data to plot element, and for each unrepresented datum, draw a
 * 10px tall left-aligned rectangle whose width in pixels matches its
 * category's count. Space each rectangle 20px down the page.
 */
svg.selectAll(".category")
    .data(data.sort(category_order))
  .enter().append("rect")
    .attr("class", "category")
    .attr("x", 0)
    .attr("width", function(d) { return x(d.count); })
    .attr("y", function(d) { return y(d.category); })
    .attr("height", y.rangeBand());


/* ******************************************************************
 * Utility functions
 */
function rnd_hist(labels) {
  var hist = [], ct = 0;
  labels.forEach(function(label) {
    ct = Math.floor(Math.random()*100);
    hist.push({category:label, count:ct});
  });
  return(hist);
}

function category_order(a, b) {
  if(a.category > b.category) return 1;
  else if(a.category < b.category) return -1;
  return 0;
}
