const ham = document.getElementById("hamMenu");
const sideBar = document.querySelector(".sidebar");
const closeBtn = document.getElementById("close");
const appwrap = document.querySelector(".appwrap");
const copyBtn = document.querySelector(".copyBtn");

ham.addEventListener("click", toggleSideBar);

function toggleSideBar() {
  sideBar.classList.toggle("show");
  appwrap.classList.toggle("appwrapBGchange"); //darkens background when menu appears
  document.querySelector("body").classList.toggle("hideScroll"); //hides scroll while sidebar is active
}

closeBtn.addEventListener("click", hideSideBar);

function hideSideBar() {
  sideBar.classList.remove("show");
  appwrap.classList.remove("appwrapBGchange");
}

//This section is for copying link to clipboard

copyBtn.addEventListener("click", () => {
  navigator.clipboard.writeText(
    document.getElementById("linkText").textContent
  );
  document.querySelector(".copiedAlert").style.display = "block";
});
