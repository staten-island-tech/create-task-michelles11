import { inventory } from "./inventory";
import { DOMSelectors } from "./dom";

DOMSelectors.search.addEventListener("Search", function (s) {
  s.preventDefault();
  //filter
  let Book = {};
  Book.title = DOMSelectors.text.value;
  Book.Author = DOMSelectors.author.value;
  Book.image = DOMSelectors.img.value;
  
  console.log(Book);
  createCard(Book);
  deleteCard();
  clearField();
});

function clearField(){
  DOMSelectors.text.value = "";
  DOMSelectors.author.value = "";
  DOMSelectors.img.value = "";
}
 document.getElementById("text");
function createCard(Book){
  DOMSelectors.search.insertAdjacentHTML(
    "afterend"
    `<div class="book-card">
    <H2> ${Book.title}</H2>
    <img class = "image" src =${Album.image} alt="">
    <h3>${Book.Author}</h3>
    <button class= "button2">remove</button>
    </div>`
  );  
}









inventory();
DOMSelectors();