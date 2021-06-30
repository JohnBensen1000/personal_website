const navButtons =
    ["nav-about-me", "nav-entropy", "nav-rocket-guidance", "nav-this-website"];

var currentIndex = 0;

window.addEventListener("scroll", (_) => {
    // Looks at the vertical scroll position divided by the height of the page to
    // determine which section the user is on. This information is used to determine
    // which of the navigation buttons should be white. (The button that corresponds
    // to the section that the user is at is white, every other button is grey).

    var newIndex = Math.floor((this.scrollY / window.innerHeight) + .1);

    if (newIndex != currentIndex) {
        currentIndex = newIndex;

        for (var i = 0; i < navButtons.length; i++) {
            document.getElementById(navButtons[i]).style.color = 
                (i == currentIndex) ? "white" : "rgb(160, 160, 160)";
        }
    }
})

function changeMenu() {
    // When the user is on a mobile device, the navigation buttons are accessed through
    // a button. This button either opens are closes a menu that contains the navigation
    // buttons. This function is called every time this button is clicked. This function
    // has to determine if the menu is opened or closed, and change things accordingly. 
    var style = document.getElementById('nav-buttons').style;
    var image = document.getElementById("menu-button");

    if (style.display == "none") {
        style.display = "contents";
        image.src = "content/x.png";
    }
    else {
        style.display = "none";
        image.src = "content/menu.png";
    }
}