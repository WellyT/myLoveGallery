let cta = document.getElementById("cta")
let close = document.getElementById("close")
cta.addEventListener("click", () => {
  document.querySelector("body").style.overflow = "hidden"
  document.getElementById("imgs").classList.remove("show")
  cta.style.outline = "none"
})
close.addEventListener("click", () => {
  document.getElementById("imgs").classList.add("show")
  document.querySelector("body").style.overflow = "auto"
})
