// Masonry
var elem = document.querySelector('.grid');
  var msnry = new Masonry( elem, {
    // options
    itemSelector: '.grid-item',
    columnWidth: 300,
    gutter: 20,
    isFitWidth: true
  });

