AOS.init();
$('.owl-carousel-3').owlCarousel({
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
$('.owl-carousel-4').owlCarousel({
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
            items: 4,
        }
    }
});
Fancybox.bind("[data-fancybox]", {
  // Your options go here
});

window.addEventListener("scroll", (event) => {

    let box = document.querySelector('#alert-message.active');
    let height_message = box.offsetHeight;
    let box2 = document.querySelector('#main-fixed-top');
    let height_navbar = box2.offsetHeight;

    let scroll = this.scrollY;
    console.log(scroll);
    console.log("test"+height_message);
    if(scroll>height_message){
        $('#main-fixed-top').addClass("fixed-top");
        $('#main-fixed-top').css({'top':"0px"});
        $('#alert-message.active').fadeOut(0);
        $('#fixing-margin-top').css({'padding-top':height_navbar+"px"});
    }else{
        $('#main-fixed-top').removeClass("fixed-top");
        $('#alert-message.active').fadeIn(0);
    }
}); 

$(document).click(function(){
  $(".dropdown-menu").removeClass("show");
});
$(".dropdown").click(function(e){
  e.stopPropagation();
});
setTimeout(function(){
    $('#pre-loader').fadeOut(800);
},500);
