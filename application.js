window.addEventListener('resize', function(event) {
  var currentScroll = {x: window.scrollX, y: window.scrollY};
  document.querySelector('#content').setAttribute('style', 'display: none;');
  setTimeout(function() {
    document.querySelector('#content').removeAttribute('style');
    window.scrollTo(currentScroll.x, currentScroll.y)
  }, 0);
});