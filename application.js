window.addEventListener('resize', foreceRedraw);
window.addEventListener('load', foreceRedraw);

function foreceRedraw() {
  var currentScroll = {x: window.scrollX, y: window.scrollY};
  $('#content').attr('style', 'display: none;');
  
  setTimeout(function() {
    // Make #content visible again so browser would redraw it.
    document.querySelector('#content').removeAttribute('style');
    if (currentScroll.x != 0) window.scrollTo(currentScroll.x, currentScroll.y)
    
    // Reset all anchor set with diemenstions
    $('.post a[style]').removeAttr('style');
    
    // Find anchors with over-height images and then set explicit dimensions.
    $('.post a').each(function(i, e) {
      if ($(e).height() > $(e).parent().height()) {
        var img = $(e).children('img'),
            newHeight = $(e).parent().height(),
            newWidth = newHeight * img.width() / img.height();
        $(e).width(newWidth).height(newHeight);
      }
    });
  }, 0);
}