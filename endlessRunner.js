let stick = document.getElementById("stick");
let obstacle = document.getElementById("obstacle");
let score = 0;

function jump() {
    if (stick.classList === "animate") {
        return
    }
    stick.classList.add("animate");
    setTimeout(function () {
        stick.classList.remove("animate");
    }, 300);
}

let checkDead = setInterval(function () {
    let stickAux = parseInt(window.getComputedStyle(stick).getPropertyValue("top"));
    let obstacleAux = parseInt(window.getComputedStyle(obstacle).getPropertyValue("left"));

    if (obstacleAux < 20 && obstacleAux > -20 && stickAux >= 130) {
        obstacle.style.animation = "none";
        alert("You lost! Your score is: " + Math.floor(score / 100));
        score = 0;
        obstacle.style.animation = "block 1s infinite linear";
    } else {
        score++;
        document.getElementById("scoreComponent").innerHTML = Math.floor(score / 100);
    }
}, 10);