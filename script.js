// Smooth scrolling for navigation
$(document).ready(function() {
    $('a').click(function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: $(this.hash).offset().top
            }, 800);
        }
    });
});
