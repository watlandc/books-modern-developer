/*------------------------------------*\
  #DISPLAY-CARD-DIALOG
\*------------------------------------*/

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





/*------------------------------------*\
  #BOOK-LIBRARY
\*------------------------------------*/

var Book = function(id, title, author, published, edition, description, ratings, procurement, image) {
  this.id = id;
  this.title = title;
  this.author = author;
  this.published = published;
  this.edition = edition;
  this.description = description;
  this.ratings = ratings;
  this.procurement = procurement;
  this.image = image;
}

var book1 = new Book("book1", "Eloquent JavaScript: A Modern Introduction to Programming", "Marijn Haverbeke", "2015", "2nd", "<p>JavaScript lies at the heart of almost every modern web application, from social apps to the newest browser-based games. Though simple for beginners to pick up play with, JavaScript is a flexible, complex language that you can use to build full-scale applications.</p><p>Eloquent JavaScript, 2nd Edition dives deep into the JavaScript language to show you how to write beautiful, effective code.</p>", [29, 6, 18], ["gumroad", "amazon", "manning"], "//dl.dropboxusercontent.com/s/s3cis0bha3lyfxi/Screenshot%202016-09-28%2016.09.03.png?raw=1");

var book2 = new Book("book2", "JavaScript and JQuery: Interactive Front-End Web Development", "Marijn Haverbeke", "2016", "1st", "<p>In JavaScript & JQuery renowned author Jon Duckett discards the traditional programming book template and approaches writing code in a more relevant, less intimidating way.</p><p>Full-color and packed with instructional graphics and photos, his books have gained a loyal following by illustratting programming in a way both instructive for newcomers and invaluable for seasoned coders.</p>", [80, 75, 95], null, "//dl.dropboxusercontent.com/s/2jne9d540r04xdr/Screenshot%202016-09-28%2016.10.57.png?raw=1");

var book3 = new Book("book3", "Learning PHP, MySQL & JavaScript: With jQuery, CSS & HTML5", "Marijn Haverbeke", "2016", "4th", "<p>Build interactive, data-driven websites with the potent combination of open-source technologies and web standards, even if you have only basic HTML knowledge. With This popular hands-on guide, you'll tackle dynamic web programming with the help of today's core technologies: PHP, MySQL, JavaScript, jQuery, CSS and HTML5.</p><p>By discussing JavaScript and jQuery in a single text, Duckett ensures you will quickly be writing your own...</p>", [80, 75, 95], ["gumroad", "amazon", "manning"], "//dl.dropboxusercontent.com/s/hhrnw7461yegn6x/Screenshot%202016-09-28%2016.12.35.png?raw=1");





/*------------------------------------*\
  #DISPLAY-BOOKS
\*------------------------------------*/

// function displayBook() {
  
//   var cardTemplate = 
//     ''
// }
