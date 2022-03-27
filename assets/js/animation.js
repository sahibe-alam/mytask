if (screen.width >= 800) {
    gsap.timeline({
        scrollTrigger: {
            trigger: ".banner_wrapper",
            start: "center center",
            end: "bottom top",
            scrub: 0.2,
            markers: false,
            pin: true

        }
    })

        .from(".mtn1", {
            y: innerHeight * 1,
            duration: 3
        })
        .from(".mnt2", {
            y: innerHeight * 1,
            duration: 3
        })
        .from(".moon", {
            opacity: 0,
            y: 400,
            rotation: 360,
            duration: 6

        })
        .from(".op_tag", {
            opacity: 0,
            x: 400,

            duration: 6

        })

    gsap.timeline({
        scrollTrigger: {
            trigger: "#about",
            start: "center center",
            end: "bottom top",
            scrub: true,
            markers: false,
            pin: true

        }
    })

        .from(".about_pic", {
            opacity: 0,
            x: 400,

            duration: 6

        })
}
 
//  change header color on scroll 
$(window).on("scroll", function() {
    if($(window).scrollTop() > 50) {
        $(".navbar").addClass("header-scrolled");
    } else {
        //remove the background property so it comes transparent again (defined in your css)
       $(".navbar").removeClass("header-scrolled");
    }
});


// waypoint anim 
$(document).ready(function () {
    $('.div1').waypoint(function (direction) {

        $('.div1').addClass('animated slideInRight')
    }, {
        offset: '70%'
    })
});

$(document).ready(function () {
    $('.div2').waypoint(function (direction) {

        $('.div2').addClass('animated slideInLeft')
    }, {
        offset: '70%'
    })
});


$(document).ready(function () {
    $('.div3').waypoint(function (direction) {

        $('.div3').addClass('animated slideInRight')
    }, {
        offset: '70%'
    })
});