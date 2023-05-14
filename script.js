//COLLAPSIBLE SETTINGS

let pickInput = document.querySelector(".pick");
let todayPick = new Date().toISOString().split("T")[0];
pickInput.setAttribute("min", todayPick);

let returnInput = document.querySelector(".return");
let todayReturn = new Date().toISOString().split("T")[0];
returnInput.setAttribute("min", todayReturn);

//PICK-UP RETURN DATE input

const showCarsBtn = document.querySelector(".show-cars-btn");

const newFunc = (e) => {
  let selectedDate = e.target.value;
  let currentDate = new Date().toISOString().split("T")[0];

  if (selectedDate >= currentDate) {
    console.log("we can show cars");
    showCarsBtn.style.opacity = "calc(100%";
    showCarsBtn.style.cursor = "pointer";
  }
};

document.querySelector(".pick").addEventListener("input", newFunc);
document.querySelector(".return").addEventListener("input", newFunc);

//CARDS
const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeActiveClasses();

    panel.classList.add("active");
  });
});

function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}
