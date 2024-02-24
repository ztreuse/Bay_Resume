// const changeColor = () => {
//   var wrapper = document.querySelector(".wrapper");
//   var originalBgColor = "#f5f5f5";
//   var originalFontColor = "#000000";
//   var newBgColor = "#96120b";
//   var newFontColor = "#ffdc5c";

//   if (wrapper.style.backgroundColor === newBgColor) {
//     wrapper.style.backgroundColor = originalBgColor;
//     wrapper.style.color = originalFontColor;
//   } else {
//     wrapper.style.backgroundColor = newBgColor;
//     wrapper.style.color = newFontColor;
//   }
// };

const changeColor = () => {
    var element = document.querySelector(".wrapper");
    element.classList.toggle("dark");
  };