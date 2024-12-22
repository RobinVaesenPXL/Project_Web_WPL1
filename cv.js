const cardToggles = document.querySelectorAll(".card-toggle");

function topFunction() {
    document.body.scrollTop = 0; // Safari
    document.documentElement.scrollTop = 0; // Chrome, Firefox, IE and Opera
  }  

cardToggles.forEach((button) => {
    button.addEventListener("click", () => {
        button.parentNode.classList.toggle("open");
    })
})
