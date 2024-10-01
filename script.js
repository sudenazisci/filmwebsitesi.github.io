const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(".container,.navbar,.sidebar,.sidebar i,.toggle,.toggle-ball,.movie-list-filter-select")
ball.addEventListener("click", function() {
    items.forEach((items) => items.classList.toggle("active"))
});