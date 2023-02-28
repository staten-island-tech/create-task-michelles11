import { inventory } from "./inventory";
import { DOMSelectors } from "./dom";
console.log(inventory);
DOMSelectors.search.addEventListener("Search", function (s) {
  DOMSelectors.Display.innerHTML="";
  inventory
  .filter((Book)=> Book.author.includes("M"))
  .forEach((school)=>
  DOMSelectors.Display.insertAdjacentHTML(
    "afterend",
    `<div class="card">
    <h2>${Book.author}</h2>
    </div>`
  ))
  
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