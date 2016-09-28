var ratings = document.querySelector(".js-btn--open-dialog");
var dialog = document.querySelector(".js-dialog");
var closeBtn = document.querySelector(".js-btn--close");

/* view card dialog */

function openDialog() {
  ratings.addEventListener("click", function (event) {
    dialog.classList.remove("is-hidden");
  })
}
openDialog();

/* close card dialog */

function closeDialog() {
  closeBtn.addEventListener("click", function (event) {
    dialog.classList.add("is-hidden");
  })
}
closeDialog();