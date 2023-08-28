const overlay = document.querySelector(".darkoverlay");
const options = document.querySelector(".opcoes");

const btnMoreOption = document.querySelector(".btn-flutuante").addEventListener("click", () => {
            overlay.style.display = "block";
            options.style.display = "block";
    }
);

overlay.addEventListener("click", () => {
    overlay.style.display = "none";
    options.style.display = "none";
})