const revertColor = (exclude) => {
    switch(exclude) {
        case "home":
            updatesButton.style.color = "white";
            portfolioButton.style.color = "white";
            aboutButton.style.color = "white";
            break;
        case "updates":
            portfolioButton.style.color = "white";
            aboutButton.style.color = "white";
            break;
        case "portfolio":
            updatesButton.style.color = "white";
            aboutButton.style.color = "white";
            break;
        case "about":
            updatesButton.style.color = "white";
            portfolioButton.style.color = "white";
            break;
    }
}

const home = () => {
    container.style.transform = "translateX(0%)";
    currentPage = 0;
    revertColor("home");
}

const updates = () => {
    container.style.transform = "translateX(-25%)";
    currentPage = 1;
    revertColor("updates");
}

const updatesMouseover = () => {
    updatesButton.style.color = "#8b99af";
}

const updatesMouseout = () => {
    if(currentPage != 1)
        updatesButton.style.color = "white";
}

const portfolio = () => {
    container.style.transform = "translateX(-50%)";
    currentPage = 2;
    revertColor("portfolio");
}

const portfolioMouseover = () => {
    portfolioButton.style.color = "#8b99af";
}

const portfolioMouseout = () => {
    if(currentPage != 2)
        portfolioButton.style.color = "white";
}

const about = () => {
    container.style.transform = "translateX(-75%)";
    currentPage = 3;
    revertColor("about");
}

const aboutMouseover = () => {
    aboutButton.style.color = "#8b99af";
}

const aboutMouseout = () => {
    if(currentPage != 3)
        aboutButton.style.color = "white";
}

const hamburgerMenu = () => {
    if(hamburgerMenuIsOpen) {
        document.getElementById("mobileMenu").style.visibility = "hidden";
        document.getElementById("hamburgerMenuImage").src = "img/hamburgerToOpen.png";
        hamburgerMenuIsOpen = false;
    }
    else {
        document.getElementById("mobileMenu").style.visibility = "visible";
        document.getElementById("hamburgerMenuImage").src = "img/hamburgerToClose.png";
        hamburgerMenuIsOpen = true;
    }
}

const mobileUpdates = () => {
    updates();
    hamburgerMenu();
}

const mobilePortfolio = () => {
    portfolio();
    hamburgerMenu();
}

const mobileAbout = () => {
    about();
    hamburgerMenu();
}

var currentPage = 0;

var hamburgerMenuIsOpen = false;

const menuArea = document.getElementById("menuArea");

const container = document.getElementById("pageContainer");
const homeButton = document.getElementById("logo");
homeButton.addEventListener("click", home);
const updatesButton = document.getElementById("updatesButton");
updatesButton.addEventListener("click", updates);
updatesButton.addEventListener("mouseover", updatesMouseover);
updatesButton.addEventListener("mouseout", updatesMouseout);
const portfolioButton = document.getElementById("portfolioButton");
portfolioButton.addEventListener("click", portfolio);
portfolioButton.addEventListener("mouseover", portfolioMouseover);
portfolioButton.addEventListener("mouseout", portfolioMouseout);
const aboutButton = document.getElementById("aboutButton");
aboutButton.addEventListener("click", about);
aboutButton.addEventListener("mouseover", aboutMouseover);
aboutButton.addEventListener("mouseout", aboutMouseout);
const hamburgerMenuButton = document.getElementById("hamburgerMenuButton");
hamburgerMenuButton.addEventListener("click", hamburgerMenu);
const mobileMenuUpdatesButton = document.getElementById("mobileMenuUpdatesButton");
mobileMenuUpdatesButton.addEventListener("click", mobileUpdates);
const mobileMenuPortfolioButton = document.getElementById("mobileMenuPortfolioButton");
mobileMenuPortfolioButton.addEventListener("click", mobilePortfolio);
const mobileMenuAboutButton = document.getElementById("mobileMenuAboutButton");
mobileMenuAboutButton.addEventListener("click", mobileAbout);

document.getElementById('software').style.marginBottom =
    String((document.getElementById('home').offsetHeight /10)) + "px";
document.getElementById('web').style.marginBottom =
    String((document.getElementById('home').offsetHeight /10)) + "px";

document.getElementById('homeWrapper').style.marginTop = 
    String((document.getElementById('home').offsetHeight / 2) - (document.getElementById('homeWrapper').offsetHeight / 2)) + "px";

document.getElementById('aboutWrapper').style.marginTop = 
    String((document.getElementById('about').offsetHeight / 2) - (document.getElementById('aboutWrapper').offsetHeight / 2)) + "px";


/*if(document.getElementById("updatesWrapper").offsetHeight < document.getElementById('home').offsetHeight) {
    document.getElementById("updatesWrapper").style.touchAction = "pinch-zoom";
    document.getElementById("updates").style.touchAction = "pinch-zoom";
}*/

window.addEventListener('resize', function(event) {
    document.getElementById('software').style.marginBottom =
    String((document.getElementById('home').offsetHeight /10)) + "px";
    document.getElementById('web').style.marginBottom =
    String((document.getElementById('home').offsetHeight /10)) + "px";
    document.getElementById('homeWrapper').style.marginTop = 
    String((document.getElementById('home').offsetHeight / 2) - (document.getElementById('homeWrapper').offsetHeight / 2)) + "px";
    document.getElementById('aboutWrapper').style.marginTop = 
    String((document.getElementById('about').offsetHeight / 2) - (document.getElementById('aboutWrapper').offsetHeight / 2)) + "px";
    if(!(window.matchMedia("(max-width: 850px)").matches)) {
        if(hamburgerMenuIsOpen) {
            hamburgerMenu();
        }
    }
});

console.log("result: " + window.visualViewport.scale > 1);

//hammer testing
/*var updatesZoom = new Hammer(document.getElementById("updates"));
updatesZoom.get('pinch').set({enable: true});
updatesZoom.on("pinch", function(ev) {
    console.log("test worked?");
});

var updatesWZoom = new Hammer(document.getElementById("updatesWrapper"));
updatesWZoom.get('pinch').set({enable: true});
updatesWZoom.on("pinch", function(ev) {
    console.log("test worked?");
});*/