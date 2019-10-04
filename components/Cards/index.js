// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

function cards(cardHead, imgSrc, authName) {
    const card = document.createElement("div");
    const headline = document.createElement("div");
    const author = document.createElement("div");
    const imgContainer = document.createElement("div");
    const img = document.createElement("img");
    const authorName = document.createElement("span");

    card.appendChild(headline);
    headline.appendChild(author);
    author.appendChild(imgContainer);
    author.appendChild(authorName);
    imgContainer.appendChild(img);

    card.classList.add("card");
    headline.classList.add("headline");
    author.classList.add("author");
    imgContainer.classList.add("img-container");

    headline.textContent = cardHead;
    img.src = imgSrc;
    authorName.textContent = authName;

    return card;
}

const cardsContainer = document.querySelector(".cards-container");

axios.get("https://lambda-times-backend.herokuapp.com/articles").then(function(res) {
    // console.log(res);
    res.data.articles.forEach(function(element){
        element.forEach(function(ele) {
             cardsContainer.appendChild(cards(ele.headline, ele.authorPhoto, ele.authorName));
            })
    })
    // res.data.articles.bootstrap.forEach(function(ele) {
    //     cardsContainer.appendChild(cards(ele.headline, ele.authorPhoto, ele.authorName));
    // })

    // res.data.articles.javascript.forEach(function(ele) {
    //     cardsContainer.appendChild(cards(ele.headline, ele.authorPhoto, ele.authorName));
    // })

    // res.data.articles.jquery.forEach(function(ele) {
    //     cardsContainer.appendChild(cards(ele.headline, ele.authorPhoto, ele.authorName));
    // })

    // res.data.articles.node.forEach(function(ele) {
    //     cardsContainer.appendChild(cards(ele.headline, ele.authorPhoto, ele.authorName));
    // })

    // res.data.articles.technology.forEach(function(ele) {
    //     cardsContainer.appendChild(cards(ele.headline, ele.authorPhoto, ele.authorName));
    // })
}).catch(function(err) {
    console.log(err);
})