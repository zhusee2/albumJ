window.addEventListener('resize', foreceRedraw);
window.addEventListener('load', foreceRedraw);

function foreceRedraw() {
  var currentScroll = {x: window.scrollX, y: window.scrollY};
  document.querySelector('#content').setAttribute('style', 'display: none;');
  setTimeout(function() {
    document.querySelector('#content').removeAttribute('style');
    if (currentScroll.x != 0) window.scrollTo(currentScroll.x, currentScroll.y)
    
    var boxes = document.querySelectorAll('.post');
    
    for (var i = 0; i < boxes.length; i++) {
      var anchor = boxes[i].querySelector('a');
      
      if (anchor.offsetHeight > boxes[i].offsetHeight) {
        var img = anchor.querySelector('img'),
            newHeight = boxes[i].offsetHeight,
            newWidth = newHeight * img.offsetWidth / img.offsetHeight;
        
        anchor.setAttribute('style', 'width: ' + newWidth + 'px; height: ' + newHeight + 'px;');
      }
    }
  }, 0);
}