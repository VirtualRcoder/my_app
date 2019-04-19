//import React, { Component } from "react";
//import Book from "./Book";
//export default class Booklist extends Component {
//  state = {
//    books: [
//      { id: 1, book: "Python you and me", author: "Kushal Das" },
//      {
//        id: 2,
//        book: "Three Time loser",
//        author: "Aakash Verma"
//      }
//    ]
//  };
//  //this.setState({})
//  render() {
//    // const books = this.state.books.map(item => item.book);
//    // console.log(books);
//
//    //filter
//    //forEach
//    //map
//    //reduce
//
//    return (
//      <section>
//        <h3>This is our Booklist</h3>
//        {this.state.books.map(item => (
//          <Book key={item.id} info={item} />
//        ))}
//      </section>
//    );
//  }
//}

import React, { Component } from "react";
import Book from "./Book";
import booksData from "./data";
export default class Booklist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: booksData
    };
  }
  // state = {

  // }
  render() {
    return (
      <section>
        <h3>This is our Booklist</h3>
        {this.state.books.map(item => (
          <Book key={item.id} info={item} />
        ))}
      </section>
    );
  }
}
