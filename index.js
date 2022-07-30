const books = [
  {
    image: "img/book.png",
    title: "Отечественная бонистика",
  },
  {
    image: "img/book1.png",
    title: "Позитивные изменения №2-2022",
  },
  {
    image: "img/book.png",
    title: "Вестник ЮНЕСКО №48",
  },
  {
    image: "img/book1.png",
    title: " Аукцион №32 «Коллекционные монеты и медали»",
  },
  {
    image: "img/book.png",
    title: "Позитивные изменения №2-2022",
  },
  {
    image: "img/book.png",
    title: "Позитивные изменения №2-2022",
  },
  {
    image: "img/book.png",
    title: "книга обо всем",
  },
  {
    image: "img/book.png",
    title: "Илиада",
  },
  {
    image: "img/book.png",
    title: "Позитивные изменения №2-2022",
  },
  {
    image: "img/book.png",
    title: "Илиада",
  },
  {
    image: "img/book.png",
    title: "Позитивные изменения №2-2022",
  },
  {
    image: "img/book.png",
    title: "Позитивные изменения №2-2022",
  },
  {
    image: "img/book.png",
    title: "Позитивные изменения №2-2022",
  },
];

function addBook() {
  const wrapperBooks = document.querySelector(".books");

  books.forEach(function (books) {
    wrapperBooks.insertAdjacentHTML(
      "beforeend",
      `
    <div class="books__item">
           <img class="books__img" src="${books.image}" alt="" />
           <h2 class="books__title">${books.title}</h2>
         </div>
    
    `
    );
  });
}
addBook();

const btnSearch = document.querySelector(".search__button");
btnSearch.addEventListener("click", searchFilter);

function searchFilter() {
  let input = document.querySelector(".search__input");
  let filter = input.value.toUpperCase();
  let wrapperBooks = document.querySelector(".books");
  let book = wrapperBooks.querySelectorAll(".books__item");

  for (let i = 0; i < book.length; i++) {
    let booksTitle = book[i].querySelectorAll(".books__title")[0];
    if (booksTitle.innerHTML.toUpperCase().indexOf(filter) > -1) {
      book[i].style.display = "";
    } else {
      book[i].style.display = "none";
    }
  }
}
