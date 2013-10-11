lp.jQuery(document).ready(function() {
  var adjustments = [];
  var debug = '';
  var adjustTextHeight = function(e, h) {
    var adjust = 1;
    var maxAdjust = 30;
    var w = parseInt(e.style.width, 10);

    while (e.offsetHeight > h && adjust < maxAdjust) {
      e.style.width = (w + adjust) + 'px';
      adjust++;
    }
    adjustments.push(adjust);
  };

  lp.jQuery(".lp-pom-text").each(function(i, e) {
    var designHeight = parseInt(e.style.height, 10);

    e.style.height = 'auto';
    debug += e.id+':  '+designHeight+' '+e.offsetHeight+'\n';
    if (e.offsetHeight > designHeight) {
     adjustTextHeight(e, designHeight);
   }
  });
});
