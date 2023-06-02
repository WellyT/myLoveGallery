let cta = document.getElementById("cta")
let close = document.getElementById("close")
cta.addEventListener("click", () => {
  document.getElementById("imgs").classList.remove("show")
  document.querySelector("body").style.overflow = "hidden"
  cta.style.outline = "none"
})
close.addEventListener("click", () => {
  document.getElementById("imgs").classList.add("show")
  document.querySelector("body").style.overflow = "auto"
})
