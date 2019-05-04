var vh = Math.max(
    document.documentElement.clientHeight,
    window.innerHeight || 0
);

// Nav item on click
$("li.nav-item").click(function() {
    $("li.nav-item").removeClass("active");
    $(this).addClass("active");
});

// Scroll to element
$(".scroll-to-content").click(function(e) {
    // prevent default action
    e.preventDefault();

    // get id of target div (placed in href attribute of anchor element)
    // and pass it to the scrollToElement function
    // also, use 2000 as an argument for the scroll speed (2 seconds, 2000 milliseconds)
    scrollToElement($(this).attr("href"));
});

// Scroll to element helper
var scrollToElement = function(el) {
    $("html,body").animate(
        {
            scrollTop: $(el).offset().top - 0.08 * vh + 2
        },
        2500
    );
};

// Hide and show navbar on scroll
$(document).ready(function() {
    // hide .navbar first
    $(".navbar").hide();

    // fade in .navbar
    $(function() {
        $(window).scroll(function() {
            // set distance user needs to scroll before we start fadeIn
            if ($(this).scrollTop() > 0.5 * vh) {
                $(".navbar").fadeIn();
            } else {
                $(".navbar").fadeOut();
            }
        });
    });
});

// Disable parallax on mobile
jarallax(document.querySelectorAll(".jarallax"), {
    disableParallax: /iPad|iPhone|iPod|Android/,
    disableVideo: /iPad|iPhone|iPod|Android/
});
