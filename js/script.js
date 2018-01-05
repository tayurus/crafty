document.addEventListener("DOMContentLoaded", function(event) {
    $(".owl-carousel").owlCarousel({
        items: 1,
        dots: true
    })

    setInterval(() => {
        $(".about-item img:not(:first)").each((index, item) => {
            setTimeout(() => {
                $(item).css({
                    "background-color": "#ffde00"
                })
            }, (index + 1) * 1000);
        });
        setTimeout(() => {
            $(".about-item img").css({
                    "background-color": "transparent"
                })
            }, 4000);
    }, 4000);




});
