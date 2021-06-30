const navButtons =
    ["nav-entropy", "nav-rocket-guidance", "nav-this-website"];

var currentIndex = 0;

window.addEventListener("scroll", (_) => {
    changeNavigationBarDisplay(this.scrollY);
    changeNavButtonColors(this.scrollY);
})

function changeNavigationBarDisplay(scrollY) {
    var style = document.getElementById("navbar").style;

    if (scrollY == 0) {
        style.display = "none";
    } else {
        style.display = "flex";
    }
}

function changeNavButtonColors(scrollY) {
    // Looks at the vertical scroll position divided by the height of the page to
    // determine which section the user is on. This information is used to determine
    // which of the navigation buttons should be white. (The button that corresponds
    // to the section that the user is at is white, every other button is grey).

    // The .9 value that appears accounts for the fact that every section is 90% of
    // the window's total height. 

    var newIndex = (scrollY > .9 * window.innerHeight) 
        ? Math.floor((scrollY / (.9 * window.innerHeight)) - .9)
        : -1;

    if (newIndex != currentIndex) {
        currentIndex = newIndex;

        for (var i = 0; i < navButtons.length; i++) {
            document.getElementById(navButtons[i]).style.color = 
                (i == currentIndex) ? "white" : "rgb(160, 160, 160)";
        }
    }
}

function goToEntropySection() {
    // On the intro section, there is a down arrow. When this button is pressed,
    // the user is taken to the Entropy section (section immediately after intro
    // section).

    document.getElementById("entropy").scrollIntoView({block: 'center', behavior: 'smooth'});
}

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