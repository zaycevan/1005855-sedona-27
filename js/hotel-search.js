var buttonsearch = document.querySelector(".button-hotel-search");
var popup = document.querySelector(".hotel-search-form");
var form = popup.querySelector("form");
var datein = popup.querySelector("[name=datein]");
var dateout = popup.querySelector("[name=dateout]");
var adult = popup.querySelector("[name=adult]");
var children = popup.querySelector("[name=children]");

buttonsearch.addEventListener("click", function (evt) {
    evt.preventDefault();
    if (popup.classList.contains("modal-slide")) {
        popup.classList.add("modal-hide");
        popup.classList.remove("modal-slide");
        popup.classList.remove("modal-error");
    } else {
        popup.classList.add("modal-slide");
        popup.classList.remove("modal-hide");
    }
});

form.addEventListener("submit", function (evt) {
    if (!datein.value || !dateout.value || !adult.value || !children.value) {
        evt.preventDefault();
        popup.classList.remove("modal-error");
        popup.offsetWidth = popup.offsetWidth;
        popup.classList.add("modal-error");
    }
  });
