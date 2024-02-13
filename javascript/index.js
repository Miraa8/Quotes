const quotesArray = [
  {
    quote: "Get busy living or get busy dying.",
    author: "Stephen King",
  },
  {
    quote:
      "Life is not a problem to be solved, but a reality to be experienced.",
    author: "Soren Kierkegaard",
  },
  {
    quote:
      "The way I see it, if you want the rainbow, you gotta put up with the rain.",
    author: "Dolly Parton",
  },
  {
    quote:
      "Life is ten percent what happens to you and ninety percent how you respond to it.",
    author: "Charles Swindoll",
  },
  {
    quote: "Life shrinks or expands in proportion to one's courage.",
    author: "Anais Nin",
  },
  {
    quote:
      "Live as if you were to die tomorrow. Learn as if you were to live forever.",
    author: "Mahatma Gandhi",
  },
  {
    quote:
      "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
    author: " Ralph Waldo Emerson",
  },
  {
    quote:
      "Insanity is doing the same thing, over and over again, but expecting different results.",
    author: "Narcotics Anonymous",
  },
  {
    quote:
      "It is better to be hated for what you are than to be loved for what you are not.",
    author: "Andre Gide, Autumn Leaves",
  },
];

function generateQuote() {
  if (quotesArray.length == 0) {
    document.getElementById("quote").innerHTML = "That's all we got for now !";
    document.getElementById("author").innerHTML = "";
  } else {
    //   window.alert(quotesArray.length);
    var random = Number.parseInt(Math.random() * quotesArray.length);
    document.getElementById("author").innerHTML = quotesArray[random].author;
    document.getElementById("quote").innerHTML = quotesArray.splice(
      random,
      1
    )[0].quote;
  }
}
