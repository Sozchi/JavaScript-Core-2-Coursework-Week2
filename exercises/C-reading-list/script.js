function readingList( books )
{
  let AllBooks = document.createElement( "ul" );
  for ( let i = 0; i < books.length; i++ )
  {
    let itemOfBookList = document.createElement( "li" );
    let para = document.createElement( "p");
    para.innerText = books[i].title;
    para.innerText = books[i].author;
    itemOfBookList.appendChild( para );
    let imgOfBook = document.createElement( "img" );
    imgOfBook.src = books[i].bookLink;
    imgOfBook.style.backgroundColor = "red";
    imgOfBook.body.appendChild(AllBooks);
  }
  document.querySelector( "#content" ).appendChild( AllBooks );
  // Write your code here...
}

const books = [
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    alreadyRead: false,
    bookLink: "https://img.yumpu.com/39630655/1/500x640/the-design-of-everyday-things-revised-and-expanded-edition.jpg"
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true,
    bookLink:"https://images-na.ssl-images-amazon.com/images/I/71HMyqG6MRL.jpg"
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    alreadyRead: true,
    bookLink:"https://images-na.ssl-images-amazon.com/images/I/51cUVaBWZzL._SX380_BO1,204,203,200_.jpg"
  }
];

readingList(books);