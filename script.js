let arr = [
  {
    team: "MI",
    primaryColor: "#24518A",
    secondaryColor: "#F2A92D",
    image: "./assets/mi.jpg",
  },
  {
    team: "CSK",
    primaryColor: "#DFA51E",
    secondaryColor: "#354A69",
    image: "./assets/csk.jpg",
  },
  {
    team: "KKR",
    primaryColor: "#5D3076",
    secondaryColor: "#EDB04C",
    image: "./assets/kkr.jpg",
  },
  {
    team: "RCB",
    primaryColor: "#D43912",
    secondaryColor: "#1A2D3A",
    image: "./assets/rcb.webp",
  },
  {
    team: "SRH",
    primaryColor: "#CF4500",
    secondaryColor: "rgb(34, 31, 33) ",
    image: "./assets/srh.jpg",
  },
  {
    team: "LSG",
    primaryColor: "#304E6F",
    secondaryColor: "#A05450",
    image: "./assets/lsg.jpg",
  },
  {
    team: "GT",
    primaryColor: "#152D45",
    secondaryColor: "#A5692C",
    image: "./assets/gt.jpg",
  },
  {
    team: "RR",
    primaryColor: "#FF3659",
    secondaryColor: "#375EB2",
    image: "./assets/rr.jpg",
  },
  {
    team: "DC",
    primaryColor: "#323F6B ",
    secondaryColor: "#E26B7F",
    image: "./assets/dc.jpg",
  },
  {
    team: "PBKS",
    primaryColor: "#B1321A",
    secondaryColor: "#CD9735",
    image: "./assets/pbks.jpg",
  },
];

let popup = document.querySelector(".popup");
let input = document.querySelector("input");
let ok = document.querySelector(".ok");
let main = document.querySelector(".main");
let playBtn = document.querySelector(".play-btn");
let info = document.querySelector(".info");
let teamName = document.querySelector(".team-name");
let card = document.querySelector(".card");
let teamImg = document.querySelector(".team-img");
let gameText = document.querySelector(".game-text");
let playAgain = document.querySelector(".play-again");
let num = document.querySelector(".num");

let inputValue;

let attempts = [];

function startConfetti() {
  confetti({
    particleCount: 2000,
    spread: 1000,
    origin: { y: 0.6 },
  });
}

function popop() {
  inputValue = input.value.trim().toUpperCase();
  if (inputValue == "") {
    info.innerHTML = "Please enter your favourite team";
    info.style.display = "block";
    return;
  }
  const exists = arr.some((el) => el.team == inputValue.toUpperCase());

  if (!exists) {
    info.innerHTML = "Please enter a valid IPL Team";
    inputValue = "";
  } else {
    popup.classList.add("remove");
    main.style.opacity = 1;
    playBtn.disabled = false;
  }
}

function play() {
  let randomIdx = Math.floor(Math.random() * arr.length);
  attempts.push(randomIdx);
  if(attempts.length <= 5){
  let selected = arr[randomIdx];
  teamName.innerHTML = selected.team;
  teamName.style.color = selected.secondaryColor;
  card.style.backgroundColor = selected.primaryColor;
  teamImg.src = selected.image;

  num.innerHTML = `${attempts.length}`;

    if (inputValue == selected.team) {
      startConfetti();
      gameText.innerHTML = "CONGRATS,YOU WON!";
      gameText.style.color = "green";
      playAgain.style.display = "block";
      playBtn.style.display = "none";
    } 
  }
  


  else if(attempts.length>5){
    gameText.innerHTML = "You Loose,better luck next time"
    gameText.style.color = 'red'
    playAgain.style.display = 'block'
    playBtn.style.display = "none"
  }
  
}
ok.addEventListener("click", popop);
playBtn.addEventListener("click", play);

if(playAgain){
  playAgain.addEventListener("click", () => {
    location.reload();
  });
}
