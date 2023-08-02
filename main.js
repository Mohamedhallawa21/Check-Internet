let title = document.querySelector(".title");
let img = document.querySelector("img");
let ul = document.querySelector("ul");
let reload = document.querySelector(".reload");
let span = document.querySelector("span");

window.onload = function () {
  if (window.navigator.onLine) {
    onLine();
  } else {
    offLine();
  }
};

window.addEventListener("online", function () {
  onLine();
});
window.addEventListener("offline", function () {
  offLine();
});

function onLine() {
  title.innerHTML = "Online Now";
  title.style.color = "green";
  img.src =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYMzLBumBDO94gHPGyWvHiyxPpWZw35IYnQ_MOeoI2P-mx9NEHJSMsZ6gafBCqg41w_fc&usqp=CAU";
  img.style.left = "5px";
  img.style.margin = "10px";
  ul.classList.add("hide");
  span.classList.add("hide");
  reload.classList.add("hide");
}
function offLine() {
  title.innerHTML = "Offline Now";
  title.style.color = "grey";
  img.src = "download.png";
  ul.classList.remove("hide");
  span.classList.remove("hide");
  reload.classList.remove("hide");
}
