window.addEventListener('resize', foreceRedraw);
window.addEventListener('load', foreceRedraw);

function foreceRedraw() {
  var currentScroll = {x: window.scrollX, y: window.scrollY};
  document.querySelector('#content').setAttribute('style', 'display: none;');
  setTimeout(function() {
    document.querySelector('#content').removeAttribute('style');
    if (currentScroll.x != 0) window.scrollTo(currentScroll.x, currentScroll.y)
  }, 0);
}

window.addEventListener('load', function(event) {
  setTimeout(function() {
    var boxes = document.querySelectorAll('.post');
    
    for (var i = 0; i < boxes.length; i++) {
      var pic = boxes[i].querySelector('img'),
          classString = boxes[i].getAttribute('class') + ' explicit';
      
      if (pic.offsetHeight > pic.offsetWidth) boxes[i].setAttribute('class', classString);
    }
  }, 50);
});