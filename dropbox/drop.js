const CTA = document.querySelector(".cta a");
const AERT = document.querySelector("#booking-alert");

CTA.classList.remove("hide");
ALERT.classlist.add("hide");

function reveal(e) {
    e.preventDefault();
    CTA.classList.toggle("hide");
    ALERT.classList.toggle("hide");
}
current.innerHTML == "Book Now!" ? CTA.innerHTML = "Ooops" : CTA.innerHTML = "Book Now!";

CTA.addEventListener("click", reveal, false);
CTA.addEventListener("click", function() { console.log("The button was called!"); }, false);