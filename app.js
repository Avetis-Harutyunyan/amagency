function navSide() {
    const bars = document.querySelector("#burger");
    const nav = document.querySelector("#navSide");
    const body = document.querySelector("body");

    bars.addEventListener("click", function () {
        nav.classList.toggle("active");

        // burger animation
        bars.classList.toggle("close");

        // body to left
        body.classList.toggle("left");
    });
}
navSide();