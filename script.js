// Part 2: Functions with parameters + return values
function calculateArea(width, height) {
  return width * height;
}

// Using global + local scope
let globalMessage = "Hello from Global Scope!";
function showMessage() {
  let localMessage = "Hello from Local Scope!";
  console.log(globalMessage); // accessible
  console.log(localMessage);  // accessible only here
}
showMessage();

// Example of reuse
console.log("Box area:", calculateArea(10, 5));

// Part 3: JS + CSS Integration
const animateBtn = document.getElementById("animateBtn");
const animateBox = document.getElementById("animateBox");

function toggleAnimation(element, className) {
  element.classList.toggle(className);
}

animateBtn.addEventListener("click", () => {
  toggleAnimation(animateBox, "move");
});
