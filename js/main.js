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

    var box = document.querySelector('#alert-message.active');
    if(box!=null)
        var height_message = box.offsetHeight;
    else
        var height_message = 0;

    var box2 = document.querySelector('#main-fixed-top');
    var height_navbar = box2.offsetHeight;

    var scroll = this.scrollY;
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


/*$(".dropdown").click(function(e){
    e.stopPropagation();
});*/
$(".dropdown-sub").click(function(e){
    var id= $(e.target).parent().attr("id");
    $(".dropdown-sub").not("#"+id).find(".dropdown-menu").removeClass('show');
    $(".dropdown-sub").not("#"+id).find(" >a:nth-of-type(1)").removeClass('show');
});
$(".dropdown-main").click(function(e){
    var id = $(e.target).closest(".dropdown-main").attr("id");
    $(".dropdown-main").not("#"+id).find(" >a:nth-of-type(1)").removeClass("show");
    $(".dropdown-main").not("#"+id).find(".dropdown-menu").removeClass("show");
    e.stopPropagation();
});
$(document).click(function(){
 $(".dropdown-menu").removeClass("show");
});

setTimeout(function(){
    $('#pre-loader').fadeOut(800);
},500);
