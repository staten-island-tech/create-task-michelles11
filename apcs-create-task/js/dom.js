const DOMSelectors = {
  author: document.getElementById("Author"),
  book: document.getElementsByClassName("book-card"),
  img: document.getElementById("image"),
  remove: document.querySelector(".remove"),
  title: document.getElementById("title"),
  search: document.getElementById("search"),
  display: document.getElementById("display"),
  showSearches: document.getElementById("show-searches"),
  searchItems: document.getElementsByClassName("search-history-item"),
};

export { DOMSelectors };
