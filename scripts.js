/*------------------------------------*\
  #BOOK-LIBRARY
\*------------------------------------*/

var books = [
  {
    'id': 'book1',
    'title': 'Eloquent JavaScript: A Modern Introduction to Programming',
    'author': 'Marijn Haverbeke',
    'published': 'Published on 2015',
    'edition': '2nd Edition',
    'description': 
      '<p class="card__description__text">JavaScript lies at the heart of almost every modern web application, from social apps to the newest browser-based games. Though simple for beginners to pick up play with, JavaScript is a flexible, complex language that you can use to build full-scale applications.</p> \
      <p class="card__description__text">Eloquent JavaScript, 2nd Edition dives deep into the JavaScript language to show you how to write beautiful, effective code.</p> \
      <a class="read-more" href="#">Read more</a>',
    'ratings': ['29%', '6%', '18%'],
    'procurement': ["js-procurement__option--2", "js-procurement__option--3", "js-procurement__option--4"],
    'image': '//dl.dropboxusercontent.com/s/s3cis0bha3lyfxi/Screenshot%202016-09-28%2016.09.03.png?raw=1'
  },
  {
    'id': 'book2',
    'title': 'JavaScript and JQuery: Interactive Front-End Web Development',
    'author': 'Marijn Haverbeke',
    'published': 'Published on 2016',
    'edition': '1st Edition',
    'description': 
      '<p>In JavaScript & JQuery renowned author Jon Duckett discards the traditional programming book template and approaches writing code in a more relevant, less intimidating way.</p> \
      <p>Full-color and packed with instructional graphics and photos, his books have gained a loyal following by illustratting programming in a way both instructive for newcomers and invaluable for seasoned coders.</p> \
      <a class="read-more" href="#">Read more</a>',
    'ratings': ['80%', '75%', '95%'],
    'procurement': ["js-procurement__option--1"],
    'image': '//dl.dropboxusercontent.com/s/2jne9d540r04xdr/Screenshot%202016-09-28%2016.10.57.png?raw=1'
  },
  {
    'id': 'book3',
    'title': 'Learning PHP, MySQL & JavaScript: With jQuery, CSS & HTML5',
    'author': 'Marijn Haverbeke',
    'published': 'Published on 2016',
    'edition': '4th Edition',
    'description': 
      '<p>Build interactive, data-driven websites with the potent combination of open-source technologies and web standards, even if you have only basic HTML knowledge. With This popular hands-on guide, you\'ll tackle dynamic web programming with the help of today\'s core technologies: PHP, MySQL, JavaScript, jQuery, CSS and HTML5.</p> \
      <p>By discussing JavaScript and jQuery in a single text, Duckett ensures you will quickly be writing your own...</p> \
      <a class="read-more" href="#">Read more</a>',
    'ratings': ['80%', '75%', '95%'],
    'procurement': ["js-procurement__option--2", "js-procurement__option--3", "js-procurement__option--4"],
    'image': '//dl.dropboxusercontent.com/s/hhrnw7461yegn6x/Screenshot%202016-09-28%2016.12.35.png?raw=1'
  }
];






/*------------------------------------*\
  #DISPLAY-BOOKS
\*------------------------------------*/

var productTemplate = document.getElementById("js-product-template");
var mainContent = document.querySelector(".js-main-content");
var procurementOptions = document.querySelector(".procurement__options");

// var cardTitle = document.querySelector(".js-card__title");

// add books to list
for (var i = 0; i < books.length; i++) {

  var book = books[i];
  var productTemplate = document.getElementById("js-product-template").content.cloneNode(true);

  productTemplate.querySelector(".js-card__title").innerHTML = book.title;
  productTemplate.querySelector(".js-author-details__link").innerHTML = book.author;
  productTemplate.querySelector(".js-author-details__published").innerHTML = book.published;
  productTemplate.querySelector(".js-author-details__edition").innerHTML = book.edition;
  productTemplate.querySelector(".js-card__description").innerHTML = book.description;
  productTemplate.querySelector(".js-img--book").src = book.image;

  // display book ratings
  for (var j = 0; j < book.ratings.length; j++) {
    productTemplate.querySelectorAll(".js-rating-percentage")[j].innerHTML = book.ratings[j];
  }
  // display procurement options
  productTemplate.querySelector(".procurement__options");
  for (var k = 0; k < book.procurement.length; k++) {
    var optionTemplate = productTemplate.getElementById(book.procurement[k]).content.cloneNode(true);
    productTemplate.querySelector(".procurement__options").appendChild(optionTemplate);
  }

  mainContent.appendChild(productTemplate);

}






/*------------------------------------*\
  #DISPLAY-CARD-DIALOG
\*------------------------------------*/

var ratings = document.querySelectorAll(".js-btn--open-dialog");
var dialog = document.querySelectorAll(".js-dialog");
var closeBtn = document.querySelectorAll(".js-btn--close");

/* view card dialog */
function openDialog() {
  for (var i = 0; i < ratings.length; i++) {
    ratings[i].addEventListener("click", function (event) {
      this.parentNode.parentNode.parentNode.parentNode.parentNode.querySelector(":scope > .js-dialog").classList.remove("is-hidden");
    })
  }
}
openDialog();

/* close card dialog */
function closeDialog() {
  for (var i = 0; i < closeBtn.length; i++) {
    closeBtn[i].addEventListener("click", function (event) {
      this.parentNode.parentNode.classList.add("is-hidden");
    })
  }
}
closeDialog();