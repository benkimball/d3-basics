var data = rnd_hist([
  "video", "link", "photo", "audio", "chat", "quote", "answer", "text"
]);

d3.select("body").selectAll(".category")
    .data(data)
  .enter().append("p")
    .attr("class", "category")
    .html(function(d) {
      return "The '"+d.category+"' category contains "+d.count+" thing(s).";
    });

function rnd_hist(labels) {
  var hist = [], ct = 0;
  labels.forEach(function(label) {
    ct = Math.floor(Math.random()*100);
    hist.push({category:label, count:ct});
  });
  return(hist);
}
