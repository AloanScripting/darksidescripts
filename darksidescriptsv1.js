//DS Functions




//change Sports cards to Darkside Sports
(function($){
  $('#shopify-section-header-3 > section > nav > div > div > div > ul > li:nth-child(3) > a').text('Darkside Sports').attr('href', "/pages/darkside-sports");
})(jQuery);


(function($){
  $('#mobile-menu > div > div:nth-child(1) > div > ul > li:nth-child(3) > a').text('Darkside Sports').attr('href', "/pages/darkside-sports");
})(jQuery);

//change HTML ID if sports. this shoots to collection-sports-cards for CSS purposes

(function($) {
  let darksideSportsUrl = $(location).attr('href');
  if(darksideSportsUrl.indexOf('sports') != -1) {
  $('html').attr( 'id', "collections-sports-cards");
  }
})(jQuery);


// (function($) {
//   if(('p.collection-title-aloanscripting:contains(Darkside Sports)')) {
//   $('html').attr( 'id', "collections-sports-cards")

//   }
// })(jQuery);

$(document).ready(function() {
  let darksideSportsUrl = $(location).attr('href');
  let existingStyles = $("#header_customer_login > button").attr("style");
  const sportsUrlElement = document.getElementsByClassName('header__logo-link sports-cards');
  if($('p.collection-title-aloanscripting:contains(Darkside Sports)'))

  {
    $(".button").removeAttr("style"),
    $(".button").attr('style', 'color:#000000 !important'),
    $('#mc_embed_signup_scroll > div:nth-child(7) > input').css({
      'background' : 'linear-gradient(90deg, rgba(251,211,4,1) 0%, rgba(252,222,63,1) 35%, rgba(255,255,255,1) 100%)', 'color' : '#000000'
    }),
    $('.header__logo-link').attr('href', 'https://darksidegames.com/pages/darkside-sports'), 
    $('.header__cart-count').css('color','#000000'), 
    $('.header__logo-image').attr('src','https://cdn.discordapp.com/attachments/1016787628370182144/1016787695239970827/Darkside_Sports_Logo-removebg-preview.png'), 
    $('.button').css({'background' : 'linear-gradient(90deg, rgba(251,211,4,1) 0%, rgba(252,222,63,1) 35%, rgba(255,255,255,1) 100%)'}),

    $('#shopify-section-template--15413602517037__fc0bebeb-c524-4482-8b12-b2e477258643 .button').css({
      'background' : 'linear-gradient(90deg, rgba(251,211,4,1) 0%, rgba(252,222,63,1) 35%, rgba(255,255,255,1) 100%)', 'color' : '#000000'
    }),
    $('.header__logo-link').attr('href','https://darksidegames.com/pages/darkside-sports'),
    $('#shopify-section-header-3 > section > header > div > div > div.header__action-list > div.header__action-item.header__action-item--account > div > a.header__action-item-link.hidden-pocket.hidden-lap').css('href','https://darksidegames.com/pages/darkside-sports'),
    $('.link--accented').css('color','#fbd304'), 
    $('.product__refund-policy-link').css('background','#60fbd304'), 
    //this changes navigation image. test src below, figure out what darkside wants this to be.
    // $('#desktop-menu-0-2 > div > div > a > div > div > img').attr('src','https://cdn.shopify.com/s/files/1/0375/3587/5117/products/DSC00090_800x.jpg?v=1663208001'),
    //change sports time 
    $('#block-42ca0212-5d2d-4cd3-90cb-a1fe57e3e30b > div > div > p').contents().filter(function() {
      return this.nodeType == 3
    }).each(function(){
      this.textContent = this.textContent.replace('9AM–9PM','10AM-7PM'),this.textContent = this.textContent.replace('9AM–12AM','10AM-7PM');
    }),
    document.documentElement.style.setProperty('--color-primary', '#fbd304');
  }
}); 



//element swaps if sports in url
$(document).ready(function() {
  let darksideSportsUrl = $(location).attr('href');
  let existingStyles = $("#header_customer_login > button").attr("style");
  const sportsUrlElement = document.getElementsByClassName('header__logo-link sports-cards');
  if(darksideSportsUrl.indexOf('sports') != -1) 

  {
    $(".button").removeAttr("style"),
    $(".button").attr('style', 'color:#000000 !important'),
    $('#mc_embed_signup_scroll > div:nth-child(7) > input').css({
      'background' : 'linear-gradient(90deg, rgba(251,211,4,1) 0%, rgba(252,222,63,1) 35%, rgba(255,255,255,1) 100%)', 'color' : '#000000'
    }),
    $('.header__logo-link').attr('href', 'https://darksidegames.com/pages/darkside-sports'), 
    $('.header__cart-count').css('color','#000000'), 
    $('.header__logo-image').attr('src','https://cdn.discordapp.com/attachments/1016787628370182144/1016787695239970827/Darkside_Sports_Logo-removebg-preview.png'), 
    $('.button').css({'background' : 'linear-gradient(90deg, rgba(251,211,4,1) 0%, rgba(252,222,63,1) 35%, rgba(255,255,255,1) 100%)'}),

    $('#shopify-section-template--15413602517037__fc0bebeb-c524-4482-8b12-b2e477258643 .button').css({
      'background' : 'linear-gradient(90deg, rgba(251,211,4,1) 0%, rgba(252,222,63,1) 35%, rgba(255,255,255,1) 100%)', 'color' : '#000000'
    }),
    $('.header__logo-link').attr('href','https://darksidegames.com/pages/darkside-sports'),
    $('#shopify-section-header-3 > section > header > div > div > div.header__action-list > div.header__action-item.header__action-item--account > div > a.header__action-item-link.hidden-pocket.hidden-lap').css('href','https://darksidegames.com/pages/darkside-sports'),
    $('.link--accented').css('color','#fbd304'), 
    $('.product__refund-policy-link').css('background','#60fbd304'), 
    //this changes navigation image. test src below, figure out what darkside wants this to be.
    // $('#desktop-menu-0-2 > div > div > a > div > div > img').attr('src','https://cdn.shopify.com/s/files/1/0375/3587/5117/products/DSC00090_800x.jpg?v=1663208001'),
    //change sports time 
    $('#block-42ca0212-5d2d-4cd3-90cb-a1fe57e3e30b > div > div > p').contents().filter(function() {
      return this.nodeType == 3
    }).each(function(){
      this.textContent = this.textContent.replace('9AM–9PM','10AM-7PM'),this.textContent = this.textContent.replace('9AM–12AM','10AM-7PM');
    }),
    document.documentElement.style.setProperty('--color-primary', '#fbd304');
  }
}); 



// replaced with above
// function changeSportsURL() {
//   const sportsUrlElement = document.getElementsByClassName('header__logo-link sports-cards');
//   for (const element of sportsUrlElement) {
//       element.href = "https://darksidegames.com/pages/darkside-sports";
//   }
// }


// function insertFancyBoxLink() {
//   let link = document.createElement('link');
//   link.type = 'text/css';
//   link.rel = 'stylesheet';
//   document.head.appendChild(link);
//   link.href = 'https://cdn.jsdelivr.net/npm/@fancyapps/ui@4.0/dist/fancybox.css';
// };  



// function executeFancyBox() {
//   if (window.location.pathname.length < 2){
//   const fancybox = new Fancybox([
//   {
//     src: "<img><h3>Sign Up For Our Newsletter!</h2><p>Enter your email above and you will be subscribed to our newsletter, which includes monthly discount codes, the latest Darkside news and much more!</p>",
//     type: "html",
//     },
//    ])
//   }; 
// };



//bodyID is page_title | handle
function createElementsIDChecker() { 
const bodyID = document.getElementsByTagName('body')[-0].id;
const idMatcher = document.querySelectorAll(
".header__logo-link,#shopify-section-template--15302417645613__content"
);
// Loop through all elements (including html, head, meta, scripts) and add collection.url
for (const idElement of idMatcher) {
  idElement.classList.add(bodyID)
  }; 
};


function createElementsClassChecker() { 
  const htmlID = document.getElementsByTagName('html')[-0].id;
  const classMatcher = document.querySelectorAll(
  ".product-form__payment-container,.binderpos-credit-input-div,.form__input-row,.quantity-selector__button,.product-recommendations,.product__refund-policy-link,.product-item__title text--strong link, .mobile-menu__back-button, .card__title, .mobile-menu__section,.header__inner,.header__action-item-title, .product-item__action-button,.productCard__imageWrap, .nav-dropdown__link, .select-wrapper--primary, .select-wrapper,.product-item, .product-item__info-inner, .section__header,mobile-menu__panel, .mobile-menu__inner, .mega-menu__column, .header__mobile-nav-toggle, .nav-bar, .nav-bar__inner, .nav-bar__item, .product-meta__vendor, .product-meta,.product-meta__title, .section__title, .product-form__info-title, .product-form__info-item, .shipping-estimator, .button-group, .button, .heading, .mini-cart__product-info, .productCard__button--outOfStock, .product-meta__title, .header__logo-image,.announcement-bar,.footer__title, .header__cart-count");
  // Loop through all elements (including html, head, meta, scripts) and add collection.url
  for (const classElement of classMatcher) {
  classElement.id = htmlID
  };
}; 

function insertSportsFavicon() {
if (window.location.toString().includes("sports")){
  let link = document.querySelector("link[rel*='icon']") || document.createElement('link');
  link.type = 'image/png';
  link.rel = 'shortcut icon';
  link.href = 'https://cdn.discordapp.com/attachments/1016787628370182144/1016787695239970827/Darkside_Sports_Logo-removebg-preview.png';
  document.getElementsByTagName('head')[0].appendChild(link);
};
}  

// function setSportsRoot() {
// if (window.location.toString().includes("sports")){
// document.documentElement.style.setProperty('--color-primary', '#fbd304')

// } 
// } window.onload = setSportsRoot();

function changeProductPageStyles() {
const hasDarksideSportsText = (el, text) => el.textContent.includes(text);

document.querySelectorAll('p.collection-title-aloanscripting').forEach(el => {
  if(hasDarksideSportsText(el, "Darkside Sports") == true) {
    document.documentElement.style.setProperty('--color-primary', '#fbd304');
    //this needs updated, probably best to load a new css file
  const navBarInner =  document.getElementsByClassName(".nav-bar__inner")
  // document.getElementsByTagName('html')[0].setAttribute('id', 'collections-sports-cards')
  
    
  let link = document.querySelector("link[rel*='icon']") || document.createElement('link');
  link.type = 'image/png';
  link.rel = 'shortcut icon';
  link.href = 'https://cdn.discordapp.com/attachments/1016787628370182144/1016787695239970827/Darkside_Sports_Logo-removebg-preview.png';
  document.getElementsByTagName('head')[0].appendChild(link);

  const elements = document.getElementsByClassName('header__logo-link');
    for (const element of elements) {
        element.href = "https://darksidegames.com/pages/darkside-sports";
      };
    };
  })
}; 




//execute functions 
insertSportsFavicon();
// insertFancyBoxLink();


// window.onload = setSportsRoot();
// window.onload = changeSportsURL();
// window.onload = executeFancyBox();
window.onload = createElementsIDChecker();
window.onload = createElementsClassChecker(); 

document.ready = changeProductPageStyles();
