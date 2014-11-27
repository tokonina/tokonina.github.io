;(function() {
  // Initialize
  var bLazy = new Blazy({ 
    breakpoints: [{
      width: 480 // max-width
      , src: 'data-src-small'
    },
    {
      width: 784 // max-width
      , src: 'data-src-medium'
    },
    {
      width: 1024 // max-width
      , src: 'data-src-large'
    }]
  });

  // Active state on menu
  if(location.pathname === "/") {
    $('.mainnav').find('li:first-child a').addClass('active');
  } else {
    $('.mainnav a[href^="/' + location.pathname.split("/")[1] + '"]').addClass('active');
  }

  if ($('.map').length) {
    initializeRoute();
  } 
<<<<<<< HEAD
=======

  ////////
  // Cookiebar
  $.cookieCuttr();  
  ////////

>>>>>>> 3f0f37c6fe3290b69c72741d76db0405039abd69
})();