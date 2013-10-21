/* Generate arbitrary counts for each of eight Tumblr post types */
var data = rnd_hist([
  "video", "link", "photo", "audio", "chat", "quote", "answer", "text"
]);

/* Create SVG element */
var svg = d3.select("body").append("svg")
    .attr("class", "plot")
    .attr("width", 600)
    .attr("height", 300);

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
    .attr("width", function(d) { return d.count; })
    .attr("y", function(d, i) { return i * 20; })
    .attr("height", 10)


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
