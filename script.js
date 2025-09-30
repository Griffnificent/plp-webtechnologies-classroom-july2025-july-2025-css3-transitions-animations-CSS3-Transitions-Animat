// Function with parameter + return value
function calculateArea(width, height) {
  let area = width * height; // local scope
  return area;               // return value
}

// Function to trigger animations
function triggerAnimation() {
  const btn = document.getElementById("animateBtn");
  const box = document.getElementById("box");

  // Animate the button (bounce)
  btn.classList.add("animate");
  setTimeout(() => btn.classList.remove("animate"), 1000);

  // Toggle box size & color using transition
  if (box.style.width === "200px") {
    box.style.width = "100px";
    box.style.height = "100px";
    box.style.backgroundColor = "coral";
  } else {
    box.style.width = "200px";
    box.style.height = "200px";
    box.style.backgroundColor = "lightgreen";
  }

  // Show function return value in console
  console.log("Box area is:", calculateArea(box.offsetWidth, box.offsetHeight));
}

// Attach event listener to button
document.getElementById("animateBtn").addEventListener("click", triggerAnimation);
