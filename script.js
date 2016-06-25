function squareThis(element, ratio, minLimit) {
  // First of all, let's square the element
  square(ratio, minLimit);

  // Now we'll add an event listener so it happens automatically
  window.addEventListener('resize', function(event) {
    square(ratio, minLimit);
  });

  // This is just an inner function to help us keep DRY
  function square(ratio, minLimit) {
    if (typeof(ratio) === "undefined") {
      ratio = 1;
    }
    if (typeof(minLimit) === "undefined") {
      minLimit = 0;
    }
    var viewportWidth = window.innerWidth;

    if (viewportWidth >= minLimit) {
      var newElementHeight = $(element).width() * ratio;
      $(element).height(newElementHeight);
    } else {
      $(element).height('auto');
    }
  }
}

$(document).ready(function() {
  squareThis('.circle');
  squareThis('.parent');
  $(".left").click(function() {
    $("i").addClass("rotateleft").delay(1000).queue(function() {
      $(".cv").addClass("active");
      if (window.history && window.history.pushState) {
        window.history.pushState('forward', null, './#cv');
        $(window).on('popstate', function() {
          location.reload();
        });
      }
    });
  });
  $(".right").click(function() {
    $("i").toggleClass("rotateright").delay(1000).queue(function() {
      $(".projets").addClass("active");
      if (window.history && window.history.pushState) {
        window.history.pushState('forward', null, './#projets');
        $(window).on('popstate', function() {
          location.reload();
        });
      }
    });
  });
});
