import { inventory } from "./inventory";
import { DOMSelectors } from "./dom";
console.log(DOMSelectors);
var searchHistory = [];
DOMSelectors.search.addEventListener("click", function () {
  searchHistory.push(DOMSelectors.title.value);
  clearCards();
  clearHistoryItems();
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
      createCard(item)
    );
  console.log(`Title value is ${DOMSelectors.title.value}`);
});

DOMSelectors.showSearches.addEventListener("click", function () {
  clearCards();
  clearHistoryItems();
  searchHistory.forEach((item) => {
    createSearchHistoryItem(item);
  });
});

DOMSelectors.goBack.addEventListener("click", function () {
  clearCards();
  clearHistoryItems();
});

function createCard(book) {
  DOMSelectors.display.insertAdjacentHTML(
    "afterend",
    `<div class="book-card">
    <H2> ${book.title}</H2>
    <img class = "image" src =${book.image} alt="">
    <h3>${book.author}</h3>
    </div>`
  );
}

function clearCards() {
  if (DOMSelectors.book) {
    var books = DOMSelectors.book;
    while (books[0]) {
      books[0].parentNode.removeChild(books[0]);
    }
  }
}

function createSearchHistoryItem(item) {
  DOMSelectors.display.insertAdjacentHTML(
    "afterend",
    `<div class="search-history-item">
    <h3>${item}</h3>
    </div>`
  );
}

function clearHistoryItems() {
  if (DOMSelectors.book) {
    var searches = DOMSelectors.searchItems;
    while (searches[0]) {
      searches[0].parentNode.removeChild(searches[0]);
    }
  }
}
