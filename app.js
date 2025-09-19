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

// un pas 8: upgrade si facut div shop sa le afisez - fetch api

async function fetchUpgrades() {
  const response = await fetch(
    "https://cookie-upgrade-api.vercel.app/api/upgrades"
  );
  const upgrades = await response.json();
  return upgrades;
}

//chemat fetchUpgrades + afisat + buy button

fetchUpgrades().then((upgrades) => {
  const shopDiv = document.getElementById("shop");

  upgrades.forEach((upgrade) => {
    //container pt fiecare upgrade  //blocuri html
    const upgradeDiv = document.createElement("div");
    upgradeDiv.classList.add("upgrade");

    const name = document.createElement("h3"); //nume upgrade
    name.textContent = upgrade.name;

    const cost = document.createElement("p"); //cost upgrade
    cost.textContent = `Cost: ${upgrade.cost}`;

    const increase = document.createElement("p"); //cat adauga la  c pe secunda
    increase.textContent = `+${upgrade.increase} CPS`;

    const buyButton = document.createElement("button"); // buy button
    buyButton.textContent = "Buy";

    buyButton.addEventListener("click", () => {
      //click pt a cumpara
      if (cookieCount >= upgrade.cost) {
        cookieCount -= upgrade.cost;
        cps += upgrade.increase;
        updateDisplay(); //actualizez val in pag si salvez in local storage
      } else {
        alert("Not enough cookies!");
      }
    });
    // pun toate in div-ul upgrade-ului
    upgradeDiv.appendChild(name);
    upgradeDiv.appendChild(cost);
    upgradeDiv.appendChild(increase);
    upgradeDiv.appendChild(buyButton);
    // pun upgrade-ul in shop
    shopDiv.appendChild(upgradeDiv);
  });
});
