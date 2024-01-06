new Swiper(".swiper-container", {
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    loop: true,
});



const animItems = document.querySelectorAll("._anim-items");
if (animItems.length > 0) {
    window.addEventListener("scroll", animOnScroll);
    function animOnScroll(params) {
        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffSet = offset(animItem).top;
            const animStart = 4;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;

            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }

            if ((pageYOffset > animItemOffSet - animItemPoint) && pageYOffset < (animItemOffSet + animItemHeight)) {
                animItem.classList.add("_active");
            }else {
                if (!animItem.classList.contains("_anim-no-hide")) {
                    animItem.classList.remove("_active");
                }
            }
        }
    }
    function offset(el) {
        const rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft}
    }
    setTimeout(() => {
        animOnScroll();
    }, 300)
}


const menuButton = document.querySelector(".header_menu");
menuButton.addEventListener("click", function() {
    const header = document.querySelector(".header");
    header.classList.toggle("open-menu");
    const body = document.querySelector("body");
    body.classList.toggle("lock");
})

const buttonR = document.querySelector(".header_button._right");
buttonR.addEventListener("click" , function() {
    window.scrollBy({
        top: 500,
        left:0,
        behavior:"smooth"
    });
})
const buttonL = document.querySelector(".header_button._left");
buttonL.addEventListener("click" , function() {
    window.scrollBy({
        top: -500,
        left:0,
        behavior:"smooth"
    });
})