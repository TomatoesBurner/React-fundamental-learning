const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

// Destrcuturing
const books = getBooks();
books;
const book = getBook(2);
const { title, author, pages, publicationDate, genres, hasMovieAdaptation } =
  book;

//********************* //
//  Rest and Spread    //
//***************** ***//

// Rest operator
const [primaryGenre, secondaryGenre, ...otherGenre] = genres;
console.log(primaryGenre, secondaryGenre, otherGenre);

// Spread operator
// - can be used to update new properties by simply overriding them
const newGenres = [...genres, "epic fantasy"];
newGenres;

//{ ...book }： Copies all properties from the book object into the new updateBook object.
const updateBook = {
  ...book,
  //Adding a new propery
  moviePublicationDat: "2021-09-07",

  //Overwriting an existing property.
  pages: 1210,
};
updateBook;

//********************* //
//  Template Literals //
//***************** ***//
const summary = `${title} is a book ${2 + 4} version`;
summary;

//********************* //
// Ternary operator //
//***************** ***//
const pagesRange = pages > 1000 ? "over a thousad" : "less than 1000";
pagesRange;

//********************* //
//   Arrow Function    //
//***************** ***//

//function getYear(str) {
// return str.split("-")[0];
// }
const getYear = (str) => str.split("-")[0];
console.log(getYear(publicationDate));

//********************* //
//  Short-Circuiting And Logical Operators:&&,||,??   //
//***************** ***//
console.log(true && "Some String");
console.log(false && "Some String");
console.log(hasMovieAdaptation && "This book has a movie ");
// falsy value :0,'',null,undefined
console.log("jonas" && "Some String");
console.log(0 && "Some String");

// ||
console.log(true || "Some String");
console.log(false || "Some String");
console.log(0 || "Some String");
const spanishTranslation = book.translations.spanish || "Not translated";
spanishTranslation;

// Nullish if A are falsy value(0,null,undefined)，return B。Otherwise，return A。
// 与 || 的区别是，它不会将 0、false 或 "" 作为空值。
const count = book.reviews.librarything.reviewsCount ?? "no data";
count;
const testnull = null ?? "no data";
testnull;
const testundefined = undefined ?? "no data";
testundefined;

//********************* //
//  Optional Chaining Operator  //
//  Optional chaining operator (?.): Safely access properties or methods.
//***************** ***//
function getTotalReviewCount(book) {
  const goodreads = book.reviews.goodreads.reviewsCount;
  goodreads;
  const librarything = book.reviews.librarything?.xxxxx ?? 0;
  librarything;
  return goodreads + librarything;
}
console.log(getTotalReviewCount(book));

//********************* //
// The Array map method
//***************** ***//
