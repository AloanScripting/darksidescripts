//DS Functions

function changeSportsURL() {
    const elements = document.getElementsByClassName('header__logo-link sports-cards ');
    for (const element of elements) {
        element.href = "https://darksidegames.com/collections/sports-cards";
    }
} window.onload=changeSportsURL()

function createElementsClassChecker() { 
    const classMatcher = document.querySelectorAll(
    ".binderpos-credit-input-div,.form__input-row,.quantity-selector__button,.product-recommendations,.product__refund-policy-link,.product-item__title text--strong link, .mobile-menu__back-button, .card__title, .mobile-menu__section,.header__inner,.header__action-item-title, .product-item__action-button,.productCard__imageWrap, .nav-dropdown__link, .select-wrapper--primary, .select-wrapper,.product-item, .product-item__info-inner, .section__header, .mobile-menu__inner, .mega-menu__column, .header__mobile-nav-toggle, .nav-bar, .nav-bar__inner, .nav-bar__item, .product-meta__vendor, .product-meta,.product-meta__title, .section__title, .product-form__info-title, .product-form__info-item, .shipping-estimator, .button-group, .button, .heading, .mini-cart__product-info, .productCard__button--outOfStock, .product-meta__title, .header__logo-image,.announcement-bar,.footer__title, .header__cart-count");
    // Loop through all elements (including html, head, meta, scripts) and add collection.url
    for (const classElement of classMatcher) {
    classElement.id = {{ collection.url | handle}}
  } 
} window.onload=createElementsClassChecker(); 



function executeFancyBox() {
  const fancybox = new Fancybox([
    {
      src: "<img><h3>Discount Code:</h2><h3>Darkside10</h2><p>Valid on MTG or Pokemon singles purchases over $10.00! (Cannot be combined with store credit.)</p>",
      type: "html",
    },
  ]);
} 
