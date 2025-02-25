function slider_carouselInit() {
    $('.owl-carousel.slider_carousel').owlCarousel({
        dots: false,
        loop: true,
        margin: 30,
        stagePadding: 2,
        autoplay: true,
        nav: true,
        navText: ["<i class='fa-solid fa-chevron-left'></i>","<i class='fa-solid fa-chevron-right'></i>"],
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2,
            },
            992: {
                items: 5
            }
        }
    });
}
slider_carouselInit();