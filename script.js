let arr = [
  {
    team: "MI",
    primaryColor: "rgb(0, 75, 141)",
    secondaryColor: "rgb(255, 209, 65) ",
    image: "./assets/mi.jpg",
  },
  {
    team: "CSK",
    primaryColor: "rgb(255, 217, 80)",
    secondaryColor: "rgb(0, 166, 93) ",
    image: "./assets/csk.jpg",
  },
  {
    team: "KKR",
    primaryColor: "rgb(58, 34, 93)",
    secondaryColor: "rgb(247, 213, 78)",
    image: "./assets/kkr.jpg",
  },
  {
    team: "RCB",
    primaryColor: "rgb(225, 38, 28) ",
    secondaryColor: "rgb(43, 42, 41) ",
    image: "./assets/rcb.jpg",
  },
  {
    team: "SRH",
    primaryColor: "rgb(238, 116, 41) ",
    secondaryColor: "rgb(34, 31, 33) ",
    image: "./assets/srh.jpg",
  },
  {
    team: "LSG",
    primaryColor: "rgb(0, 166, 93) ",
    secondaryColor: "rgb(0, 87, 226)",
    image: "./assets/lsg.jpg",
  },
  {
    team: "GT",
    primaryColor: "rgb(0, 56, 168)  ",
    secondaryColor: "rgb(255, 209, 65)",
    image: "./assets/gt.jpg",
  },
  {
    team: "RR",
    primaryColor: "rgb(238, 41, 189) ",
    secondaryColor: "rgb(7, 78, 162) ",
    image: "./assets/rr.jpg",
  },
  {
    team: "DC",
    primaryColor: "rgb(40, 41, 104) ",
    secondaryColor: "rgb(215, 25, 33) ",
    image: "./assets/dc.jpg",
  },
  {
    team: "PBKS",
    primaryColor: "rgb(225, 38, 28)",
    secondaryColor: "rgb(255, 209, 65) ",
    image: "./assets/pkbs.webp",
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
  if(attempts.length < 6){
    let selected = arr[randomIdx];
  teamName.innerHTML = selected.team;
  teamName.style.color = selected.secondaryColor;
  card.style.backgroundColor = selected.primaryColor;
  teamImg.src = selected.image;

  num.innerHTML = `${attempts.length}`;
  console.log(attempts.length);

    if (inputValue == selected.team) {
      startConfetti();
      gameText.innerHTML = "CONGRATS,YOU WON";
      gameText.style.color = "green";
      playAgain.disabled = false;
      playAgain.style.display = "block";
      playBtn.style.display = "none";
    } 
  }else{
    playBtn.disabled = true
    gameText.innerHTML = "You Loose,better luck next time"
    gameText.style.color = 'red'
    playAgain.style.display = 'block'
    playBtn.style.display = "none"

    
  }
  
}
ok.addEventListener("click", popop);
playBtn.addEventListener("click", play);

playAgain.addEventListener("click", () => {
  location.reload();
});
