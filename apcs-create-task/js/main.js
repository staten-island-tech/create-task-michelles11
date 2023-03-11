import { inventory } from "./inventory";
import { DOMSelectors } from "./dom";

var searchHistory = [];

DOMSelectors.search.addEventListener("click", function () {
  // Add the search into history
  searchHistory.push(DOMSelectors.title.value);

  // Clear Screen
  clearScreen();

  // Create a book card
  inventory
    .filter((Book) =>
      Book.title.toLowerCase().includes(DOMSelectors.title.value.toLowerCase())
    )
    .forEach((item) =>
      //   DOMSelectors.search.insertAdjacentHTML(
      //     "afterend",
      //     `<div class="card">
      // <h2>${Book.title}</h2>
      // </div>`
      //   )
      createScreenItem(item, "book-card")
    );
});

DOMSelectors.showSearches.addEventListener("click", function () {
  clearScreen();

  searchHistory.forEach((item) => {
    createScreenItem(item, "search-item");
  }); //first call description : to clear the screen in order to make it available for new input and output; result : screen and cards are cleare
});

DOMSelectors.goBack.addEventListener("click", function () {
  clearScreen();
});

//second call description : to clear the screen so user can refresh the page and put in new input rather than typing in again, result : screen is cleared and cards are cleared and user can type in new search again
function clearScreen(item = "all") {
  // Clear book cards
  if (item == "books" || item == "all") {
    if (DOMSelectors.books) {
      var books = DOMSelectors.books;
      while (books[0]) {
        books[0].parentNode.removeChild(books[0]);
      }
    }
  }

  // Clear search items
  if (item == "searches" || item == "all") {
    if (DOMSelectors.searchItems) {
      var searches = DOMSelectors.searchItems;
      while (searches[0]) {
        searches[0].parentNode.removeChild(searches[0]);
      }
    }
  }
}

//algorithm function
//condition being tested by if statement: if that item exists in the dom,
function createScreenItem(item, type) {
  if (type === "book-card") {
    DOMSelectors.display.insertAdjacentHTML(
      "afterend",
      `<div class="book-card">
      <H2> ${item.title}</H2>
      <img class = "image" src =${item.image} alt="">
      <h3>${item.author}</h3>
      </div>`
    );
  } else if (type == "search-item") {
    DOMSelectors.display.insertAdjacentHTML(
      "afterend",
      `<div class="search-history-item">
      <h3>${item}</h3>
      </div>`
    ); //uses parameters
  }
}
