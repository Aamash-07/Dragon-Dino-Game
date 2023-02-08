var score = 0;
cross = true;
myMusic = 0;

let audio2 = new Audio("gameover.mp3");
let audio = new Audio("music.mp3");
document.getElementById("obstacle").style.animationPlayState = "paused";
function start() {
  if (myMusic == 0) {
    audio.play();
    document.getElementById("start").innerHTML = "Pause";
    myMusic = 1;
    document.getElementById("obstacle").style.animationPlayState = "running";
  } else if (myMusic == 1) {
    audio.pause();
    document.getElementById("start").innerHTML = "Resume";
    myMusic = 0;
    document.getElementById("obstacle").style.animationPlayState = "paused";
  }else if(myMusic==2){
    window.location.reload();  
  } else {
    console.log("game is on");
  }

  let newStyle = {
    color: "black",
    "background-color": "white",
  };
  var btn = document.getElementById("start");

  Object.assign(btn.style, newStyle);
}

document.onkeydown = function (e) {
  if (e.keyCode == 38) {
    var dino = document.getElementById("dino");
    dino.classList.add("animateDino");
    setTimeout(() => {
      dino.classList.remove("animateDino");
    }, 800);
  }
  if (e.keyCode == 39) {
    var dino = document.querySelector(".dino");
    var dinox = parseInt(
      window.getComputedStyle(dino, null).getPropertyValue("left")
    );
    dino.style.left = dinox + 112 + "px";
  }
  if (e.keyCode == 37) {
    var dino = document.querySelector(".dino");
    var dinox = parseInt(
      window.getComputedStyle(dino, null).getPropertyValue("left")
    );
    dino.style.left = dinox - 112 + "px";
  }
};
setInterval(() => {
  dino = document.querySelector(".dino");
  obstacle = document.querySelector(".obstacle");
  gameOver = document.querySelector(".gameOver");

  dx = parseInt(window.getComputedStyle(dino, null).getPropertyValue("left"));
  dy = parseInt(window.getComputedStyle(dino, null).getPropertyValue("top"));

  ox = parseInt(
    window.getComputedStyle(obstacle, null).getPropertyValue("left")
  );
  oy = parseInt(
    window.getComputedStyle(obstacle, null).getPropertyValue("top")
  );
  offsetX = Math.abs(dx - ox);
  offsetY = Math.abs(dy - oy);

  if (offsetX < 100 && offsetY < 52) {
    gameOver.innerHTML = "Game over. Please try again later!!!";
    document.onkeydown=null;
    audio2.play();
    myMusic=2;
    setTimeout(() => {
      audio2.pause();
    }, 1000);
    document.getElementById("start").innerHTML = "Try again";
    let newStyle = {
      color: "white",
      "background-color": "black",
    };
    var btn = document.getElementById("start");
    Object.assign(btn.style, newStyle);
    audio.pause();
    document.getElementById("obstacle").style.animationPlayState = "paused";
  } else if (offsetX < 145 && cross) {
    score += 1;
    updateScore(score);
    cross = false;
    setTimeout(() => {
      cross = true;
    }, 1000);
  }
}, 100);

function updateScore(score) {
  document.getElementById("scoreCont").innerHTML = "Your Score : " + score;
}

// setInterval(() => {
//   dino = document.querySelector(".dino");
//   obstacle = document.querySelector(".obstacle");
//   gameOver = document.querySelector(".gameOver");

//   dx = parseInt(window.getComputedStyle(dino, null).getPropertyValue("left"));
//   dy = parseInt(window.getComputedStyle(dino, null).getPropertyValue("top"));

//   ox = parseInt(
//     window.getComputedStyle(obstacle, null).getPropertyValue("left")
//   );
//   oy = parseInt(
//     window.getComputedStyle(obstacle, null).getPropertyValue("top")
//   );

//   offsetX = Math.abs(dx - ox);
//   offsetY = Math.abs(dy - oy);
//   if (offsetX < 73 && offsetY < 52) {
//     gameOver.innerHtml = "Game over Please Play it again";
//     obstacle.classList.remove("obstacleAni");
//     audio.play();
//     setTimeout(() => {
//       audiogo.pause();
//       audiogo.pause();
//     }, 1000);
//   } else if (offsetX < 145 && cross) {
//     score += 1;
//     updateScore(score);
//     crose = false;
//     setTimeout(() => {
//       cross = true;
//     }, 1000);
//     setTimeout(() => {
//       aniDur = parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue("animation-duration"));
//       newDur=aniDur -0.1;
//       obstacle.style.animationDuration=newDur + 's';
//       console.log("New Animation duration :",newDur)
//   },500);
//   }
// },1000);

// function updateScore(score){
//   scoreCont.innerHtml="You Score : "+score;
// }
