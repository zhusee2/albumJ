window.addEventListener('load', function(event) {
  var boxes = document.querySelectorAll('.article'),
      totalWidth = 0;
  for (var i = 0; i < boxes.length; i++) {
    totalWidth += boxes[i].offsetWidth;
  }
  document.querySelector('#content').setAttribute('style', 'width: ' + totalWidth + 'px;');
});