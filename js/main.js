/* <!-- hamburger-menu --> */
function show_silde() {
    var toggle_btn = document.getElementById("toggle_btn");
    var slide = document.getElementById("slide");
    if (toggle_btn.checked == true) {
        slide.style.display = "block";
    } else {
        slide.style.display = "none";
    }
}


/* <!-- accordion dropdown --> */
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    var add = this.firstElementChild.firstElementChild;
var sub = this.lastElementChild.lastElementChild;
    if (panel.style.display === "block") {
      panel.style.display = "none";
      sub.style.display = "none";
      add.style.display = "block";
    } else {
      panel.style.display = "block";
      sub.style.display="block"
      add.style.display = "none";
    }

});
}
