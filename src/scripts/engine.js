
const ids = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8"
];

const natalinos = [];
let openCards = [];

ids.forEach(id => {
  natalinos.push(id);
  natalinos.push(id);
})

const shuffledImages = natalinos.sort(() => Math.random() >= 0.5 ? 2 : -1);

shuffledImages.forEach(shuffledImage => {
  const box = document.createElement("div");
  box.className = "item";
  box.dataset.value = shuffledImage;
  box.innerHTML = `<img src="./src/images/${shuffledImage}.png">`;
  box.onclick = handleClick;
  document.querySelector(".game").appendChild(box);
})

function handleClick() {
  if (openCards[0] === this) {
    return
  }

  if (openCards.length === 2) {
    return
  }

  if(openCards.length < 2) {
    this.classList.add("boxOpen");
    openCards.push(this);
  }

  if(openCards.length === 2) {
    setTimeout(checkMatch, 500);
  }
}

function checkMatch() {
  console.log(openCards[0].dataset.value, openCards[1].dataset.value)
  if (openCards[0].dataset.value === openCards[1].dataset.value) {
    openCards[0].classList.add("boxMatch");
    openCards[1].classList.add("boxMatch");
  } else {
    openCards[0].classList.remove("boxOpen");
    openCards[1].classList.remove("boxOpen");
  }

  openCards = [];

  if(document.querySelectorAll(".boxMatch").length === natalinos.length) {
    alert("Você venceu!");
  }
}





const snowContainer = document.getElementById("snow-container");

const snowContent = ['❄', '❅', '❆'];

const random = (num) => {
  return Math.floor(Math.random() * num);
}

const getRandomStyles = () => {
  const top = random(100);
  const left = random(100);
  const dur = random(10) + 10;
  const size = random(100) + 30;
  return `
    top: -${top}%;
    left: ${left}%;
    font-size: ${size}px;
    animation-duration: ${dur}s;
  `;
}

const createSnow = (num) => {
  for (var i = num; i > 0; i--) {
    var snow = document.createElement("div");
    snow.className = "snow";
    snow.style.cssText = getRandomStyles();
    snow.innerHTML = snowContent[random(2)]
    snowContainer.append(snow);
  }
}

window.addEventListener("load", () => {
  createSnow(30)
});
