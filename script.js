var player_position = [0, 0];

function startGame(player_position) {
  stopMusic();
  gameWinSound.play();
  alert("Вы выиграли");
  // document.getElementById("00").style.backgroundColor = "red";
  document.getElementById(player_position.join("")).style.backgroundColor =
    "green";
  // var player_position = [0, 0];
  // return player_position;
  // console.log(player_position);
  // return player_position;
}

function makeActionDown(player_position) {
  if (player_position[0] == 9) {
    stop_position = [0, player_position[1]];
  } else {
    stop_position = [player_position[0] + 1, player_position[1]];
  }
  if (document.getElementById(stop_position.join("")).classList[0] != "stop") {
    // console.log(player_position);
    if (player_position[0] != 9) {
      document.getElementById(player_position.join("")).style.backgroundColor =
        "rgba(0, 0, 0, 0)";
      player_position[0] = player_position[0] + 1;
      document.getElementById(player_position.join("")).style.backgroundColor =
        "red";
      gameMusic();
    } else {
      document.getElementById(player_position.join("")).style.backgroundColor =
        "rgba(0, 0, 0, 0)";
      player_position[0] = 0;
      document.getElementById(player_position.join("")).style.backgroundColor =
        "red";
      gameMusic();
    }
  }
  if (document.getElementById(stop_position.join("")).classList[0] == "green") {
    startGame(player_position);
  }
}

function makeActionUp(player_position) {
  if (player_position[0] == 0) {
    stop_position = [9, player_position[1]];
  } else {
    stop_position = [player_position[0] - 1, player_position[1]];
  }
  if (document.getElementById(stop_position.join("")).classList[0] != "stop") {
    // console.log(player_position);
    if (player_position[0] != 0) {
      document.getElementById(player_position.join("")).style.backgroundColor =
        "rgba(0, 0, 0, 0)";
      player_position[0] = player_position[0] - 1;
      document.getElementById(player_position.join("")).style.backgroundColor =
        "red";
      gameMusic();
    } else {
      document.getElementById(player_position.join("")).style.backgroundColor =
        "rgba(0, 0, 0, 0)";
      player_position[0] = 9;
      document.getElementById(player_position.join("")).style.backgroundColor =
        "red";
      gameMusic();
    }
  }
  if (document.getElementById(stop_position.join("")).classList[0] == "green") {
    startGame(player_position);
  }
}

function makeActionLeft(player_position) {
  if (player_position[1] == 0) {
    stop_position = [player_position[0], 9];
  } else {
    stop_position = [player_position[0], player_position[1] - 1];
  }
  if (document.getElementById(stop_position.join("")).classList[0] != "stop") {
    // console.log(player_position);
    if (player_position[1] != 0) {
      document.getElementById(player_position.join("")).style.backgroundColor =
        "rgba(0, 0, 0, 0)";
      player_position[1] = player_position[1] - 1;
      document.getElementById(player_position.join("")).style.backgroundColor =
        "red";
      gameMusic();
    } else {
      document.getElementById(player_position.join("")).style.backgroundColor =
        "rgba(0, 0, 0, 0)";
      player_position[1] = 9;
      document.getElementById(player_position.join("")).style.backgroundColor =
        "red";
      gameMusic();
    }
  }
  if (document.getElementById(stop_position.join("")).classList[0] == "green") {
    startGame(player_position);
  }
}

function makeActionRight(player_position) {
  if (player_position[1] == 9) {
    stop_position = [player_position[0], 0];
  } else {
    stop_position = [player_position[0], player_position[1] + 1];
  }
  if (document.getElementById(stop_position.join("")).classList[0] != "stop") {
    // console.log(player_position);
    if (player_position[1] != 9) {
      document.getElementById(player_position.join("")).style.backgroundColor =
        "rgba(0, 0, 0, 0)";
      player_position[1] = player_position[1] + 1;
      document.getElementById(player_position.join("")).style.backgroundColor =
        "red";
      gameMusic();
    } else {
      document.getElementById(player_position.join("")).style.backgroundColor =
        "rgba(0, 0, 0, 0)";
      player_position[1] = 0;
      document.getElementById(player_position.join("")).style.backgroundColor =
        "red";
      gameMusic();
    }
  }
  if (document.getElementById(stop_position.join("")).classList[0] == "green") {
    startGame(player_position);
  }
}

var gameTheme = new Audio("./sounds/gameTheme.mp3");
var moveSound = new Audio("./sounds/moveSound.mp3");
var gameWinSound = new Audio("./sounds/gameWinSound.mp3");
function gameMusic() {
  moveSound.currentTime = 0;
  moveSound.play();
  if (gameTheme.currentTime == 0) {
    gameTheme.play();
  }
}
function stopMusic() {
  moveSound.currentTime = 0;
  gameTheme.pause();
  gameTheme.currentTime = 0;
}

document.addEventListener("keydown", function () {
  switch (event.keyCode) {
    case 37:
      makeActionLeft(player_position);
      // gameMusic();
      break;
    case 38:
      makeActionUp(player_position);
      // gameMusic();
      break;
    case 39:
      makeActionRight(player_position);
      // gameMusic();
      break;
    case 40:
      makeActionDown(player_position);
      // gameMusic();
      break;
  }
});

document.getElementById("buttonUp").onclick = function () {
  makeActionUp(player_position);
};
document.getElementById("buttonDown").onclick = function () {
  makeActionDown(player_position);
};
document.getElementById("buttonLeft").onclick = function () {
  makeActionLeft(player_position);
};
document.getElementById("buttonRight").onclick = function () {
  makeActionRight(player_position);
};

document.addEventListener(
  "touchstart",
  function (event) {
    if (event.touches.length > 1) {
      event.preventDefault();
    }
  },
  { passive: false }
);
document.addEventListener("gesturestart", function (e) {
  e.preventDefault();
});

let details = navigator.userAgent;
let regexp = /android|iphone|kindle|ipad/i;
let isMobileDevice = regexp.test(details);
if (isMobileDevice) {
  document.getElementById("buttons_container").style.display = "flex";
} else {
}
