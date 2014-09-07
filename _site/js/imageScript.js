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

})();