lp.jQuery(document).ready(function() {
  var regex = /#lp-pom-button-\d+\s*:\s*(hover|active)\s*{\s*background-image\s*:\s*url\(\s*["']?([^"']+?)["']?\s*\).*?}/g;
  var matches = null;
  var urls = [];
  
  while (matches = regex.exec(lp.jQuery('head style[title=page-styles]').html())) {
    var url = matches[2];
    if (lp.jQuery.inArray( url, urls ) === -1) urls.push(url);
  }

  for (var i=0,l=urls.length; i<l; i++) {
    document.createElement('img').src = urls[i];
  }
});
