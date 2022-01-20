var menuBtn = document.getElementById("menuBtn")
var sideNav = document.getElementById("sideNav")
var menu = document.getElementById("menu")
sideNav.style.right = "-250px"
menuBtn.onclick = function(){
    if(sideNav.style.right == "-250px"){
        sideNav.style.right = "0px"
        menu.src = "images/close.png"
    }
    else{
        menu.src = "images/menu.png"
        sideNav.style.right = "-250px"
    }
}
var scroll = new SmoothScroll('a[href*="#"]', {
    speed: 1000,
    speedAsDuration: true
});