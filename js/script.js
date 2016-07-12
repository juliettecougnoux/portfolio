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
    squareThis('.image');
    $('.cv').scroll(function() {
        $(".s1, .s2, .s3, .s4, .s5, .s6, .s7, .s8, .s9, .s10").addClass("opacity");
        $(".navbar1").addClass("navbar-fixed-top");
        $(".cv h1").css("padding-top", "5%");
        $(".cv h1").css("padding-bottom", "3%");
    });
    $('.projets').scroll(function() {
        $(".navbar2").addClass("navbar-fixed-top");
        $(".projets h1").css("padding-top", "5%");
        $(".projets h1").css("padding-bottom", "3%");
    });
    $(".loader").delay(1000).fadeOut(2000);

    $("#particles-js-link1").click(function() {
      $(".cv").css("transition", "2s");
      $(".projets").css("transition", "2s");
        $("i").removeClass("rotateleft");
        $(".cv").delay(2000).removeClass("active");
        $(".cv").delay(2000).removeClass("overflow");
        if (".navbar-fixed-top") {
            $(".navbar1").removeClass("navbar-fixed-top");
        }
    });
    $(".left").click(function() {
        $("#arrow").addClass("rotateleft");
        setTimeout(function() {
            $(".cv").addClass("active");
            $(".cv").addClass("overflow");
        }, 1000);
    });
    $("#projets-link").click(function() {
      $(".cv").css("transition", "2s");
      $(".projets").css("transition", "2s");
        $(".projets").addClass("active");
        $(".projets").addClass("overflow");
        $(".cv").delay(2000).removeClass("active");
        $("i").removeClass("rotateleft");
    });
    $(".right").click(function() {
        $("#arrow").addClass("rotateright");
        setTimeout(function() {
            $(".projets").addClass("active");
            $(".projets").addClass("overflow");
        }, 1000);
    });
    $("#cv-link").click(function() {
      $(".cv").css("transition", "2s");
      $(".projets").css("transition", "2s");
        $(".cv").addClass("active");
        $(".cv").addClass("overflow");
        $(".projets").delay(2000).removeClass("active");
        $("#arrow").removeClass("rotateright");
    })
    $("#particles-js-link2").click(function() {
      $(".cv").css("transition", "2s");
      $(".projets").css("transition", "2s");
        $("#arrow").removeClass("rotateright");
        $(".projets").delay(2000).removeClass("active");
        $(".projets").delay(2000).removeClass("overflow");
        if (".navbar-fixed-top") {
            $(".navbar2").removeClass("navbar-fixed-top");
        }
    });
 $(window).on("resize", function() {
        $(".cv").css("transition", "0s");
        $(".projets").css("transition", "0s");
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


    var titleNumber = 0;

    function changeTitle() {
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
