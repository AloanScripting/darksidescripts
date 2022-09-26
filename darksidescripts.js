//ionos hosted functions

function changeSportsURL() {
    const elements = document.getElementsByClassName('header__logo-link sports-cards ');
    for (const element of elements) {
        element.href = "https://darksidegames.com/collections/sports-cards";
    }
} changeSportsURL()
