import { inventory } from "./inventory";
import { DOMSelectors } from "./dom";
console.log(DOMSelectors);
DOMSelectors.search.addEventListener("click", function () {
  //DOMSelectors.Display.innerHTML = "";
  console.log("clicked");
  /* inventory
    .filter((Book) => Book.book.includes(DOMSelectors.title.value))
    .forEach((Book) =>
      DOMSelectors.search.insertAdjacentHTML(
        "afterend",
        `<div class="card">
    <h2>${Book.book}</h2>
    </div>`
      )
    ); */
  console.log(`Title value is ${DOMSelectors.title.value}`);
  const filtered = inventory.filter((Book) =>
    Book.book.includes(DOMSelectors.title.value)
  );
  console.log(filtered);

  //console.log(Book);
  //createCard(Book);
  //deleteCard();
  //clearField();
});

function clearField() {
  DOMSelectors.title.value = "";
  DOMSelectors.author.value = "";
  DOMSelectors.img.value = "";
}
//document.getElementById("text");
function createCard(book) {
  DOMSelectors.search.insertAdjacentHTML(
    "afterend"`<div class="book-card">
    <H2> ${book.title}</H2>
    <img class = "image" src =${book.image} alt="">
    <h3>${book.Author}</h3>
    <button class= "button2">remove</button>
    </div>`
  );
}
