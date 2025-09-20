// variabile initiale

let cookieCount = 0;
let cps = 1;
let purchasedUpgrades = {}; // added soo late after saw I'm back to 0

if (localStorage.getItem("cookieCount")) {
  cookieCount = parseInt(localStorage.getItem("cookieCount"));
}
if (localStorage.getItem("cps")) {
  cps = parseInt(localStorage.getItem("cps"));
}
if (localStorage.getItem("purchasedUpgrades")) {
  //have progres from local strorage -see comm at 5
  purchasedUpgrades = JSON.parse(localStorage.getItem("purchasedUpgrades"));
}

//preiau elementele din html pt afisat valori
const cookieDisplay = document.getElementById("cookies");
const cpsDisplay = document.getElementById("cps");
const cookieImage = document.getElementById("cookie");
const toggleSoundButton = document.getElementById("toggle-sound");

//fct de actualizare ui and save progress
function updateDisplay() {
  cookieDisplay.textContent = `Cookies: ${cookieCount}`;
  cpsDisplay.textContent = `Cookies per second: ${cps}`;

  // un pas 7.. salvez valorile actuale in LOCAL STORAGE
  localStorage.setItem("cookieCount", cookieCount);
  localStorage.setItem("cps", cps);
  localStorage.setItem("purchasedUpgrades", JSON.stringify(purchasedUpgrades));
}

const clickSound = new Audio("media/boiling-w.mp3");
let soundOn = true;

function updateSoundButton() {
  if (soundOn) {
    toggleSoundButton.textContent = "🔊 On ";
  } else {
    toggleSoundButton.textContent = "🔇 Off";
  }
}

updateSoundButton();

toggleSoundButton.addEventListener("click", () => {
  soundOn = !soundOn; //inversez true - false
  updateSoundButton();
});

// click pt a creste c.count
cookieImage.addEventListener("click", () => {
  if (soundOn) {
    clickSound.play();
  }
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
//fetch pt uprgrade din API
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

    const name = document.createElement("h3");
    name.textContent = upgrade.name;

    const cost = document.createElement("p");
    cost.textContent = `Cost: ${upgrade.cost}`;

    const increase = document.createElement("p"); //cat adauga la  c pe secunda
    increase.textContent = `+${upgrade.increase} CPS`;

    const bought = document.createElement("p"); // nr de cate ori am cumparat
    const timesBought = purchasedUpgrades[upgrade.id] || 0; //if obiectul purchUp. are val pt cheia up.id. daca da, salveaza val in var timesB, daca nu, foloseste OR 0
    bought.textContent = `Bought: ${timesBought}`;

    const buyButton = document.createElement("button");
    buyButton.textContent = "Buy";

    buyButton.addEventListener("click", () => {
      //click pt a cumpara
      if (cookieCount >= upgrade.cost) {
        cookieCount -= upgrade.cost; //scad costul upgrade-ului
        cps += upgrade.increase; //cresc cookie per sec

        if (purchasedUpgrades[upgrade.id]) {
          //salvez ce a fost cumparat
          purchasedUpgrades[upgrade.id] += 1;
        } else {
          purchasedUpgrades[upgrade.id] = 1;
        }

        bought.textContent = `Bought:${purchasedUpgrades[upgrade.id]}`; //update and save pregress
        updateDisplay();
      } else {
        alert("Not enough cookies!");
      }
    });

    // pun toate in div-ul upgrade-ului
    upgradeDiv.appendChild(name);
    upgradeDiv.appendChild(cost);
    upgradeDiv.appendChild(increase);
    upgradeDiv.appendChild(bought);
    upgradeDiv.appendChild(buyButton);

    // pun upgrade-ul in shop
    shopDiv.appendChild(upgradeDiv);
  });
});
