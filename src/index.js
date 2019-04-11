import React from "react";
import ReactDom from "react-dom";

//ES6, Nested Components and React Tools

function Books() {
  return (
    <section>
      <Book />
      <Book1 />
    </section>
  );
}
const Book = () => {
  return (
    <article>
      <CoverImage />
      <Title />
      <Author />
    </article>
  );
};

const Book1 = () => {
  return (
    <article>
      <CoverImage1 />
      <Title1 />
      <Author1 />
    </article>
  );
};

const CoverImage = () => (
  <img
    width="200"
    src="https://images-na.ssl-images-amazon.com/images/I/71N4oeWwYlL._AC_UL200_SR200,200_.jpg"
    alt="wonkey donkey"
  />
);

const CoverImage1 = () => (
  <img
    width="200"
    src="https://images-na.ssl-images-amazon.com/images/I/71N4oeWwYlL._AC_UL200_SR200,200_.jpg"
    alt="wonkey donkey"
  />
);
const Title = () => <h1>The Donkey</h1>;
const Author = () => <p>by ASR</p>;

const Title1 = () => <h1>The Sad story</h1>;
const Author1 = () => <p>by shubham sharma</p>;

ReactDom.render(<Books />, document.getElementById("root"));
