const quote = document.getElementById("quote");
const tweetWindow = document.getElementById("tweet");
const newQuoteBtn = document.getElementById("newQuote");
const author = document.getElementById("author");
const api_url = "https://api.quotable.io/random";
async function getquote(url) {
  const response = await fetch(url);
  var data = await response.json();
  console.log(data);
  quote.innerHTML = data.content;
  author.innerHTML = data.author;
}

getquote(api_url);

newQuoteBtn.addEventListener("click", () => {
  getquote(api_url);
});

function tweet() {
  window.open(
    "https://twitter.com/intent/tweet?text=Hello%20world",
    "Tweet Window",
    "width=600",
    "height=500"
  );
}

tweetWindow.addEventListener("click", () => {
  tweet();
});
