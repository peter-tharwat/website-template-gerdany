AOS.init();
$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 30,
    responsiveClass: true,
    dots: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1,
        },
        1000: {
            items: 3,
        }
    }
});
Fancybox.bind("[data-fancybox]", {
  // Your options go here
});