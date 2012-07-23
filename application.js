window.addEventListener('resize', function(event) {
  document.querySelector('#content').setAttribute('style', 'display: none;');
  setTimeout(function() {
    document.querySelector('#content').removeAttribute('style');
  }, 0);
});