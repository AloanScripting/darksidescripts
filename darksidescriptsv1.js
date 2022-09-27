//DS Functions

function changeSportsURL() {
    const elements = document.getElementsByClassName('header__logo-link sports-cards ');
    for (const element of elements) {
        element.href = "https://darksidegames.com/collections/sports-cards";
    }
} window.onload=changeSportsURL()

function createElementsIDChecker() { 
    const idMatcher = document.querySelectorAll(
  ".header__logo-link,#shopify-section-template--15302417645613__content");
  // Loop through all elements (including html, head, meta, scripts) and add collection.url
    for (const idElement of idMatcher) {
    idElement.classList.add('{{ page_title | handle }}') 
  } 
} window.onload=createElementsIDChecker(); 

function executeFancyBox() {
  const fancybox = new Fancybox([
    {
      src: "<img><h3>Discount Code:</h2><h3>Darkside10</h2><p>Valid on MTG or Pokemon singles purchases over $10.00! (Cannot be combined with store credit.)</p>",
      type: "html",
    },
  ]);
} 
