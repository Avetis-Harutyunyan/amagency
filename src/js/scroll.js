window.addEventListener("scroll", function() {
    const topNav = this.document.querySelector(".header__section");
    topNav.classList.toggle("nav_change", window.scrollY > 130);

    const toTop = this.document.querySelector(".toTop");
    toTop.classList.toggle("active", window.scrollY > 600);
});