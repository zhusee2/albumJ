window.addEventListener('resize', function(event) {
  var currentScroll = {x: window.scrollX, y: window.scrollY};
  document.querySelector('#content').setAttribute('style', 'display: none;');
  setTimeout(function() {
    document.querySelector('#content').removeAttribute('style');
    if (currentScroll.x != 0) window.scrollTo(currentScroll.x, currentScroll.y)
  }, 0);
});