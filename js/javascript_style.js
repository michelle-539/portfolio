// making footer sticky
// based off of https://codeconvey.com/make-responsive-sticky-footer-using-javascript/

var footer = document.querySelector("#footer")
var body = document.querySelector("body")

function alignFooter() {
    
   footer.classList.add("sticky")
  }
  window.addEventListener("load", alignFooter)
  window.addEventListener("resize", alignFooter)

