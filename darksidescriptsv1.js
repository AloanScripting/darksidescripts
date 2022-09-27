//DS Functions

function changeSportsURL() {
    const elements = document.getElementsByClassName('header__logo-link sports-cards ');
    for (const element of elements) {
        element.href = "https://darksidegames.com/collections/sports-cards";
    }
} window.onload=changeSportsURL()


  function insertFancyBoxLink() {
    let link = document.createElement('link');
    link.type = 'text/css';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    link.href = 'https://cdn.jsdelivr.net/npm/@fancyapps/ui@4.0/dist/fancybox.css';
};  insertFancyBoxLink();


// function executeFancyBox() {
//   if (window.location.href.indexOf("") > -1){
//   const fancybox = new Fancybox([
//     {
//       src: "<img><h3>Discount Code:</h2><h3>Darkside10</h2><p>Valid on MTG or Pokemon singles purchases over $10.00! (Cannot be combined with store credit.)</p>",
//       type: "html",
//     },
//    ])
//   };
// } window.onload = executeFancyBox();
