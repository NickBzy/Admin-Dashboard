console.log("Hello World!");

document.querySelector(".bell").addEventListener("click", function() {
    this.classList.toggle("clicked");
});