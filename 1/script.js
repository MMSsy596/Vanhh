// script.js
const container = document.querySelector('.container');

let x = 0;
let timer;

function update() {
  container.style.transform = `perspective(1000px) rotateY(${x}deg)`;
  timer = setTimeout(() => {
    x -= 90;
    update();
  }, 1500); // Giảm thời gian giữa các lần quay
}

update();
