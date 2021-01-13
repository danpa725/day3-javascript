// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
// <⚠️ /DONT DELETE THIS ⚠️>

/*
✅ The text of the title should change when the mouse is on top of it.
✅ The text of the title should change when the mouse is leaves it.
✅ When the window is resized the title should change.
✅ On right click the title should also change.
✅ The colors of the title should come from a color from the colors array.
✅ DO NOT CHANGE .css, or .html files.
✅ ALL function handlers should be INSIDE of "superEventHandler"
*/
const title = document.querySelector("h2");
//get title dom

const slectColor = (colors) => {
  const randomNum = Math.floor(Math.random() * colors.length);
  return colors[randomNum];
};
//get color from given array

const superEventHandler = {
  titleHovering: title.addEventListener("mouseenter", function () {
    const color = slectColor(colors);
    title.style.color = color;
    title.innerText = "I'm 단팥초!";
  }),
  titleMoving: title.addEventListener("mouseleave", function () {
    const color = slectColor(colors);
    title.style.color = color;
    title.innerText = "Nico is Best Teacher()";
  }),
  widowResize: window.addEventListener("resize", function () {
    const color = slectColor(colors);
    title.style.color = color;
    title.innerText = "I'm Resizing!";
  }),
  onRightClick: window.addEventListener("click", function (e) {
    const color = slectColor(colors);
    title.style.color = color;
    title.innerText = "I'm Right Clicked!";
  })
};
//methods in dictionary
