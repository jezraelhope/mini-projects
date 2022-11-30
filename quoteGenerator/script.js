//quote api

let quotes = [];

fetch("https://type.fit/api/quotes")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    for(let i = 200; i < 300; i++) {
        quotes.push(data[i])
    }
  });

  console.log(quotes)

//variables

let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

btn.addEventListener("click", function() {
    let random = Math.floor(Math.random() * quotes.length);
    quote.innerText = quotes[random].text
    person.innerText = quotes[random].author
})



