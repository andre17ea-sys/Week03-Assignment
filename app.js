// variabile initiale

let cookieCount = 0;
let cps = 1;

// cam al 6lea pas..dupa ce am dat valorile initiale - dau - salvare count in local storage pt a nu pierde progresul

if (localStorage.getItem("cookieCount")) {
  cookieCount = parseInt(localStorage.getItem("cookieCount"));
}
if (localStorage.getItem("cps")) {
  cps = parseInt(localStorage.getItem("cps"));
}

//preiau elementele din html pt afisat valori

const cookieDisplay = document.getElementById("cookies");
const cpsDisplay = document.getElementById("cps");
const cookieImage = document.getElementById("cookie");

//fct de actualizat in pag valorile curente

function updateDisplay() {
  cookieDisplay.textContent = `Cookies: ${cookieCount}`;
  cpsDisplay.textContent = `Cookies per second: ${cps}`;

  // un pas 7.. salvez valorile actuale in local storage

  localStorage.setItem("cookieCount", cookieCount);
  localStorage.setItem("cps", cps);
}

// click pt a creste c.count

cookieImage.addEventListener("click", () => {
  cookieCount += 1;
  updateDisplay();
});

updateDisplay();

//setat automat intervalul la secunda
//c.count creste automat la fiecare sec + mai repede la click + la refresh o ia de la 0

setInterval(() => {
  cookieCount += cps;
  updateDisplay();
}, 1000);
