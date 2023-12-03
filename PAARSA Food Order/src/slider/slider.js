const slider = document.querySelector(".slider");
function activate(e) {
  const items = document.querySelectorAll(".item");
  e.target.matches(".next") && slider.append(items[0]);
  e.target.matches(".prev") && slider.prepend(items[items.length - 1]);
}
document.addEventListener("click", activate, false);
document.getElementById("previousPage").onclick = function () {
  location.href = "http://localhost:5173/";
};
document.getElementById("previousPage1").onclick = function () {
  location.href = "http://localhost:5173/";
};
