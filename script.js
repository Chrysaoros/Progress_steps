const progress = document.querySelector("#progress");
const circles = document.querySelectorAll(".circle");
const btnPrevious = document.querySelector("#previous");
const btnNext = document.querySelector("#next");

let nextStep = 1;

btnNext.addEventListener("click", () => {
  if (nextStep < circles.length) {
    nextStep++;
    update("next");
  }
});

btnPrevious.addEventListener("click", () => {
  if (nextStep > 1) {
    nextStep--;
    update("prev");
  }
});

function update(step) {
  //   circles.forEach((circle, index) => {
  //     if (index < nextStep) {
  //       circle.classList.add("active");
  //       console.log("adding", index);
  //     } else {
  //       circle.classList.remove("active");
  //       console.log("removing", index);
  //     }
  //   });

  if (step === "next") {
    circles[nextStep - 1].classList.add("active");
  } else {
    circles[nextStep].classList.remove("active");
  }

  const actives = document.querySelectorAll(".active");
  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + "%";

  if (nextStep === 1) {
    btnPrevious.disabled = true;
  } else if (nextStep === circles.length) {
    btnNext.disabled = true;
  } else {
    btnPrevious.disabled = false;
    btnNext.disabled = false;
  }
}
