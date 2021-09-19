// var render = document.querySelector('[data-action="render"]');
// var destroy = document.querySelector('[data-action="destroy"]');
// var boxes = document.getElementById('boxes');
// render.addEventListener('click', getAmount);
// destroy.addEventListener('click', destroyBoxes);

// function getAmount() {
//   var amount = +document.querySelector('#controls input').value;
//   createBoxes(amount);
// }

// function createBoxes(amount) {
//   var basicSize = 30;
//   var fragment = document.createDocumentFragment();
//   for (var i = 0; i < amount; i++) {
//     var size = basicSize + i * 10;
//     var div = document.createElement('div');
//     div.style.cssText = `width: ${size}px; height: ${size}px; background-color: rgba( ${random()} , ${random()} , ${random()} )`;
//     fragment.appendChild(div);
//   }
//   boxes.appendChild(fragment);
// }

// function destroyBoxes() {
//   boxes.innerHTML = '';
// }

// function random() {
//   return Math.floor(Math.random() * 256);
// }


const input = document.querySelector("#controls input");
const createboxBtn = document.querySelector('[data-action="render"]');
const deleteboxBtn = document.querySelector('[data-action="destroy"]');
const boxes = document.querySelector("#boxes");
const inputChange = (e) => {
  input.setAttribute("count", Number(e.currentTarget.value));
};
input.addEventListener("input", inputChange);

let baseboxSize = 30;

function random_bg_color() {
  let x = Math.floor(Math.random() * 256);
  let y = Math.floor(Math.random() * 256);
  let z = Math.floor(Math.random() * 256);
  let bgColor = "rgb(" + x + "," + y + "," + z + ")";
  return bgColor;
}
random_bg_color();

const createbox = () => {
  let countBox = Number(input.getAttribute("count"));
  for (let i = 0; i < countBox; i++) {
    baseboxSize += 10;
    const newBox = document.createElement("div");
    newBox.style.background = random_bg_color();
    newBox.style.height = baseboxSize + "px";
    newBox.style.width = baseboxSize + "px";
    newBox.style.margin = "10px";
    newBox.classList.add("new-box");
    boxes.append(newBox);
  }
};

createboxBtn.addEventListener("click", createbox);

const deletebox = () => {
  const allNewBoxes = document.querySelectorAll(".new-box");
  for (let allNewBoxe of allNewBoxes) {
    boxes.removeChild(allNewBoxe);
  }
  baseboxSize = 30;
};

deleteboxBtn.addEventListener("click", deletebox);