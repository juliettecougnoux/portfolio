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
  squareThis('.loadingImg');
  $('.cv').scroll(function() {
    $(".s1").delay(1000).fadeIn(1000);
    $(".s2").delay(1500).fadeIn(1000);
    $(".s3").delay(2000).fadeIn(1000);
    $(".s4").delay(2500).fadeIn(1000);
    $(".s5").delay(3000).fadeIn(1000);
    $(".s6").delay(3500).fadeIn(1000);
    $(".s7").delay(4000).fadeIn(1000);
    $(".s8").delay(4500).fadeIn(1000);
    $(".s9").delay(5000).fadeIn(1000);
  });
  $(".loader").delay(1000).fadeOut(2000);
  $(".left").click(function() {
    $("i").addClass("rotateleft").delay(1000).queue(function() {
      $(".cv").addClass("active");
      $(".cv").addClass("overflow");
      // if (window.history && window.history.pushState) {
      //   window.history.pushState('forward', null, './#cv');
      //   $(window).on('popstate', function() {
      //     location.reload();
      //   });
      // }
    });
  });
  $(".right").click(function() {
    $("i").toggleClass("rotateright").delay(1000).queue(function() {
      $(".projets").addClass("active");
      $(".projets").addClass("overflow");
      // if (window.history && window.history.pushState) {
      //   window.history.pushState('forward', null, './#projets');
      //   $(window).on('popstate', function() {
      //     location.reload();
      //   });
      // }
    });
  });
});

(function($) {

  $.fn.shuffleLetters = function(prop) {

    var options = $.extend({
      "step": 8, // How many times should the letters be changed
      "fps": 25, // Frames Per Second
      "text": "", // Use this text instead of the contents
      "callback": function() {} // Run once the animation is complete
    }, prop)

    return this.each(function() {

      var el = $(this),
        str = "";


      // Preventing parallel animations using a flag;

      if (el.data('animated')) {
        return true;
      }

      el.data('animated', true);


      if (options.text) {
        str = options.text.split('');
      } else {
        str = el.text().split('');
      }

      // The types array holds the type for each character;
      // Letters holds the positions of non-space characters;

      var types = [],
        letters = [];

      // Looping through all the chars of the string

      for (var i = 0; i < str.length; i++) {

        var ch = str[i];

        if (ch == " ") {
          types[i] = "space";
          continue;
        } else if (/[a-z]/.test(ch)) {
          types[i] = "lowerLetter";
        } else if (/[A-Z]/.test(ch)) {
          types[i] = "upperLetter";
        } else {
          types[i] = "symbol";
        }

        letters.push(i);
      }

      el.html("");

      // Self executing named function expression:

      (function shuffle(start) {

        // This code is run options.fps times per second
        // and updates the contents of the page element

        var i,
          len = letters.length,
          strCopy = str.slice(0); // Fresh copy of the string

        if (start > len) {

          // The animation is complete. Updating the
          // flag and triggering the callback;

          el.data('animated', false);
          options.callback(el);
          return;
        }

        // All the work gets done here
        for (i = Math.max(start, 0); i < len; i++) {

          // The start argument and options.step limit
          // the characters we will be working on at once

          if (i < start + options.step) {
            // Generate a random character at thsi position
            strCopy[letters[i]] = randomChar(types[letters[i]]);
          } else {
            strCopy[letters[i]] = "";
          }
        }

        el.text(strCopy.join(""));

        setTimeout(function() {

          shuffle(start + 1);

        }, 1000 / options.fps);

      })(-options.step);


    });
  };

  function randomChar(type) {
    var pool = "";

    if (type == "lowerLetter") {
      pool = "abcdefghijklmnopqrstuvwxyz0123456789";
    } else if (type == "upperLetter") {
      pool = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    } else if (type == "symbol") {
      pool = ",.?/\\(^)![]{}*&^%$#'\"";
    }

    var arr = pool.split('');
    return arr[Math.floor(Math.random() * arr.length)];
  }

})(jQuery);

$(function() {

  // container is the DOM element;
  // myText is all the different text

  var container = $("#container")
    // userText = $('#userText');
    // var containerTitleBig = $("#containerTitleBig");


  var titleNumber = 0;

  function changeTitle() {
    // if (_lng == "fr") {
    var titleArray = [
      "Communicante & Développeuse web",
      "Passionnée par la culture numérique, mon parcous l'illustre bien.",
      "Des expériences variées et enrichissantes ; une suite logique et cohérente !",
      "Quand la technique rencontre la créativité le champs du possible devient immense !",
      "Le web apporte chaque jour de nouveaux défis que je souhaite relever.",
      "HTML5, CSS3, JS, PHP, MySQL, SEO, SMO et bien plus encore ...",
      "La stratégie de communication liée aux outils digitaux pour une infinité de possibilités.",
      "Inventivité et rigueur, la clé de la réussite !",
      "Avec le web, l'imagination n'a plus de limite."
    ];
    // } else {
    // 	var titleArray = [
    // 	"Creative Websites That Work.",
    // 	"All round web aficionado looking to work on exciting projects",
    // 	"Full of energy, experience, hard work and enthusiasm",
    // 	"Always up for new challenges",
    // 	"HTML5, CSS3, JS, PHP, MySQL, SEO and plenty still to learn",
    // 	"I offer my expertise in the industry since 1998",
    // 	"Looking for a double skill creative & technological ?",
    // 	"I make bespoke web site & mobile app tailored to your needs",
    // 	"I'm a freelance web designer & developer"
    // 	];
    // }

    var tempTitleLength = titleArray.length;
    titleNumber++;
    if (titleNumber > tempTitleLength) {
      titleNumber = 0;
    }
    container.shuffleLetters({
      "text": titleArray[titleNumber - 1]
    });
    titleTimer();
  }

  // Leave a 5 or 12 seconds pause between text depending on the mouse
  var textTimer;
  var intervalFirstTimer = 3000;
  var intervalSpeedTimer = 8000;
  var intervalRegularTimer = 6000;
  var isMouseintheAera = false;

  function titleTimer() {
    var intervalTimer;
    if (isMouseintheAera) {
      intervalTimer = intervalSpeedTimer;
    } else {
      intervalTimer = intervalRegularTimer;
    }
    clearTimeout(textTimer);
    textTimer = setTimeout(changeTitle, intervalTimer);
  }

  if (!Modernizr.touch) {
    textTimer = setTimeout(changeTitle, intervalFirstTimer);
    $(".heading-1").hover(function() {
      clearTimeout(textTimer);
      isMouseintheAera = true;
      changeTitle();
    }, function() {
      isMouseintheAera = false;
    });
  }
});
