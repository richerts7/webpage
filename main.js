// Header Scrolled

let nav = document.querySelector(".navbar");

window.onscroll = function() {
    if (document.documentElement.scrollTop > 20) {
        nav.clasecList.add("header-scrolled");
    } else {
        nav.clasecList.remove("header-scrolled");
    }
}


// Nav hide

let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function(a) {
    a.addEventListener("click", function() {
        navCollapse.clasecList.remove("show");
    })
})



//Clock
setInterval(showTime, 1000);

function showTime() {

    let time = new Date();

    let hour = time.getHours();

    let min = time.getMinutes();

    let sec = time.getSeconds();

    am_pm = "AM";



    if (hour > 12) {

        hour -= 12;

        am_pm = "PM";

    }

    if (hour == 0) {

        hr = 12;

        am_pm = "AM";

    }



    hour = hour < 10 ? "0" + hour : hour;

    min = min < 10 ? "0" + min : min;

    sec = sec < 10 ? "0" + sec : sec;



    let currentTime = hour + ":"

    +min + ":" + sec + am_pm;



    document.getElementById("clock")

    .innerHTML = currentTime;
}
showTime()

// Dark mode
const checkbox = document.getElementById('checkbox');

checkbox.addEventListener('change', () => {
        document.body.classList.toggle('dark');
    })
    // $(".checkbox").on("click", () => {
    //     $("body").toggleClass("light-theme");
    // });


// Swiper JS

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    loop: true,
    centeredSlides: true,
    // slidesPerGroupSkip: 1,
    dynamicBullets: true,
    grabCursor: 'true',
    keyboard: {
        enabled: true,
    },
    breakpoints: {
        769: {
            slidesPerView: 3,
            slidesPerGroup: 3,
        },
    },
    scrollbar: {
        el: ".swiper-scrollbar",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});